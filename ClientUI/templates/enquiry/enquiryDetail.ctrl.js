/**
 * enquiryPAGE CONTROLLER
 */

app.controller('EnquiryDetailCtrl', function ($scope, $location, $rootScope, $routeParams, apiService, notificationService, smsService, globalService) {

    $scope.UpdateenquiryStatus = updateEnquiryStatus;
    $scope.AddNewComment = addNewComment;
    $scope.DisableSubmitButton = true;
    $scope.statusList = ['Assigned', 'Completed'];
    $scope.addedByList = ['Customer', 'Operator'];
    $scope.smsModel = {};
    $scope.newComment = {AddedBy : 'Customer'};

    $scope.disabled = undefined;
    $scope.deleted = false;

    $scope.enable = function () {
        $scope.disabled = false;
    };

    $scope.disable = function () {
        $scope.disabled = true;
    };

    $scope.clear = function () {
        $scope.person.selected = undefined;
        $scope.address.selected = undefined;
        $scope.country.selected = undefined;
    };   

    $scope.enquiry = {};
    $scope.updateStatus = {};
   
    function getEnquiryDetail() {

        NProgress.start();
        apiService.get('http://server.b-net.co.in/api/enquiry/details/' + $routeParams.id, null,
	   getEnquiryDetailSucceded,
	   getEnquiryDetailFailed);
    }

    function getEnquiryDetailSucceded(response) {
        NProgress.done();       
        $scope.enquiry = response.data;
        console.log($scope.enquiry);

    }

    function getEnquiryDetailFailed(response) {
        console.log(response);
        notificationService.displayError('Loading enquiry details failed : ' + response.data);
    }       
		
    function updateEnquiryStatus() {

        $scope.updateStatus = $scope.enquiry;


        console.log('update status', $scope.updateStatus);
	
	    NProgress.start();
	    apiService.post('http://server.b-net.co.in/api/enquiry/update', $scope.updateStatus,
	   updateenquiryStatusSucceded,
	   updateenquiryStatusFailed);
	}

    function updateenquiryStatusSucceded(response) {
	    NProgress.done();
	    console.log(response);
	    console.log('completed', $scope.enquiry);	    
	    notificationService.displaySuccess('Enquiry completed successfully for ' + response.data.Name);
	    globalService.getGlobalData();
	    getEnquiryDetail();
	

    }

    function updateenquiryStatusFailed(response) {
		console.log(response);
		notificationService.displayError('Registration failed : ' + response.data.Message);
		NProgress.done();
	   
    }

    function addNewComment() {

     
        $scope.newComment.CommentId = $scope.enquiry.ID;
        console.log('new comment', $scope.newComment);

        NProgress.start();
        apiService.post('http://server.b-net.co.in/api/enquiry/addComment', $scope.newComment,
	   addNewCommentSucceded,
	   addNewCommentFailed);
    }

    function addNewCommentSucceded(response) {

        console.log(response);       
        notificationService.displaySuccess('New comment added successfully');
        $scope.newComment = {};
        getEnquiryDetail();
    }

    function addNewCommentFailed(response) {
        console.log(response);
        notificationService.displayError('Adding Comment failed : ' + response.data.Message);
       

    }

    function smsCompleted(result) {
        //  NProgress.done();

        console.log('sms send result', result);
        notificationService.displayWarning('SMS sent succesfully to Customer..');

    }

    function deleteenquiry() {
        console.log('deleted', $scope.enquiry);

        NProgress.start();
        apiService.post('http://server.b-net.co.in/api/enquiry/delete', $scope.enquiry,
	   deleteenquirySucceded,
	   deleteenquiryFailed);
    }

    function deleteenquirySucceded(response) {

        console.log(response);

        NProgress.done();
        notificationService.displaySuccess('enquiry deleted successfully : ' + $scope.enquiry.Name);
        globalService.getGlobalData();
        $scope.deleted = true;
    }

    function deleteenquiryFailed(response) {
        console.log(response);
        if (response.status === 500) {
            notificationService.displayError('enquiry Already deleted');
        } else {
            notificationService.displayError('Unable to delete enquiry : ' + response.data.Message);
        }
        NProgress.done();

    }
	
    $scope.sweet = {};
    $scope.sweet.option = {
        title: "Are you sure?",
        text: "You will not be able to recover this enquiry information!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel it!",
        closeOnConfirm: false,
        closeOnCancel: false
    }
    $scope.sweet.confirm = {
        title: 'Deleted!',
        text: 'enquiry record has been deleted.',
        type: 'success'
    };

    $scope.sweet.cancel = {
        title: 'Cancelled!',
        text: 'enquiry record is safe',
        type: 'error'
    }

    $scope.checkCancel = function () {
        console.log("check cancel");
    }

    $scope.checkConfirm = function () {
        console.log("check confrim");
        deleteenquiry();

    }


	$scope.onSelectCallback = function (item, model) {

	    //   $scope.eventResult = { item: item, model: model };
	    $scope.statusSelected = item;
	    console.log('statusSelected :', $scope.statusSelected);
	    if (item != null) {
	        $scope.DisableSubmitButton = false;
	    }
	};

	getEnquiryDetail();

});

app.filter('propsFilter', function () {
    return function (items, props) {
        var out = [];

        if (angular.isArray(items)) {
            items.forEach(function (item) {
                var itemMatches = false;

                var keys = Object.keys(props);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var text = props[prop].toLowerCase();
                    if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                        itemMatches = true;
                        break;
                    }
                }

                if (itemMatches) {
                    out.push(item);
                }
            });
        } else {
            // Let the output be the input untouched
            out = items;
        }

        return out;
    }
});