/**
 * ComplaintPAGE CONTROLLER
 */

app.controller('ComplaintDetailCtrl', function ($scope, $location, $rootScope, $routeParams, apiService, notificationService, smsService, globalService) {

    $scope.UpdateComplaintStatus = updateComplaintStatus;
    $scope.DisableSubmitButton = true;
    $scope.statusList = ['Open', 'In Progress', 'Resolved', 'Completed'];
    $scope.smsModel = {};

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

    $scope.complaint = {};
    $scope.updateStatus = {};
   
    function getComplaintDetail() {

        NProgress.start();
        apiService.get('http://server.b-net.co.in/api/complaint/details/' + $routeParams.id, null,
	   getComplaintDetailSucceded,
	   getComplaintDetailFailed);
    }

    function getComplaintDetailSucceded(response) {
        NProgress.done();       
        $scope.complaint = response.data;
        console.log('$scope.complaint',$scope.complaint);

    }

    function getComplaintDetailFailed(response) {
        console.log(response);
        notificationService.displayError('Loading complaint details failed : ' + response.data);
    }       
		
    function updateComplaintStatus() {

        $scope.updateStatus = $scope.complaint;

        console.log('update status', $scope.updateStatus);
	
	    NProgress.start();
	    apiService.post('http://server.b-net.co.in/api/complaint/updateStatus', $scope.updateStatus,
	   updateComplaintStatusSucceded,
	   updateComplaintStatusFailed);
	}

    function updateComplaintStatusSucceded(response) {
	    NProgress.done();
	    console.log(response);
	    console.log('completed', $scope.complaint);	    
	    notificationService.displaySuccess('Complaint status updated successfully : ' + response.data.TicketId);

	   
	    if ($scope.complaint.Status === 'Completed') {
	        $scope.smsModel.CustomerId = $scope.complaint.CustomerID;
	        $scope.smsModel.CustomerName = $scope.complaint.Customer.Name;
	        $scope.smsModel.CustomerMobile = $scope.complaint.Customer.Mobile;
	        $scope.smsModel.OperatorId = $scope.complaint.Customer.Operator.ID;
	        $scope.smsModel.OperatorName = $scope.complaint.Customer.Operator.Name;
	        $scope.smsModel.OperatorMobile = $scope.complaint.Customer.Operator.Mobile;
	        $scope.smsModel.TicketId = $scope.complaint.TicketId;
	        $scope.smsModel.Date = null;
	        $scope.smsModel.Type = 3;
	        console.log('$scope.smsModel', $scope.smsModel);
	        smsService.send($scope.smsModel, smsCompleted);	        
	        smsService.checkBalance();

	       
	    }

	    getComplaintDetail();
	    globalService.getComplaints();
	    globalService.getGlobalData();
	    

    }

    function updateComplaintStatusFailed(response) {
		console.log(response);
		notificationService.displayError('Updating complaint failed : ' + response.data.Message);
		NProgress.done();
	   
	}

    function smsCompleted(result) {
        //  NProgress.done();

        console.log('sms send result', result);
        notificationService.displayWarning('SMS sent succesfully to Customer..');

    }

    function deleteComplaint() {
        console.log('deleted', $scope.complaint);

        NProgress.start();
        apiService.post('http://server.b-net.co.in/api/complaint/delete', $scope.complaint,
	   deleteComplaintSucceded,
	   deleteComplaintFailed);
    }

    function deleteComplaintSucceded(response) {

        console.log(response);

        NProgress.done();
        notificationService.displaySuccess('Complaint deleted successfully : ' + $scope.complaint.TicketId);
        globalService.getComplaints();
        globalService.getGlobalData();
        $scope.deleted = true;
    }

    function deleteComplaintFailed(response) {
        console.log(response);
        if (response.status === 500) {
            notificationService.displayError('Complaint does not exist!!!');
        } else {
            notificationService.displayError('Unable to delete Complaint : ' + response.data.Message);
        }
        NProgress.done();

    }
	
    $scope.sweet = {};
    $scope.sweet.option = {
        title: "Are you sure?",
        text: "You will not be able to recover this complaint information!",
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
        text: 'Complaint record has been deleted.',
        type: 'success'
    };

    $scope.sweet.cancel = {
        title: 'Cancelled!',
        text: 'Complaint record is safe',
        type: 'error'
    }

    $scope.checkCancel = function () {
        console.log("check cancel");
    }

    $scope.checkConfirm = function () {
        console.log("check confrim");
        deleteComplaint();

    }


	$scope.onSelectCallback = function (item, model) {

	    //   $scope.eventResult = { item: item, model: model };
	    $scope.statusSelected = item;
	    console.log('statusSelected :', $scope.statusSelected);
	    if (item != null) {
	        $scope.DisableSubmitButton = false;
	    }
	};

	getComplaintDetail();

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