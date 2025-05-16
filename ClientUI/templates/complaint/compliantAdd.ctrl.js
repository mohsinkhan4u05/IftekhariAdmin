/**
 * ComplaintPAGE CONTROLLER
 */

app.controller('ComplaintAddCtrl', function ($scope, $location, $rootScope, apiService, notificationService, smsService, globalService) {

    $scope.AddComplaint = addComplaint;
    $scope.DisableSubmitButton = true;

    $scope.disabled = undefined;

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

    $scope.customer = {};
    $scope.complaint = {};
    $scope.customers = [];
    $scope.customerSelected = {};
    var smsModelCustomer = {};
    var smsModelOperator = {};

    function getCustomers() {

        NProgress.start();
        $scope.customers = $rootScope.customers;
        NProgress.done();
    }

   
    function addComplaint() {

       
        $scope.complaint.CustomerId = $scope.customerSelected.ID;
        $scope.complaint.status = 'Open';
        $scope.complaint.RegDate = new Date();
	    console.log('add', $scope.complaint);
	
	    NProgress.start();
	    apiService.post('http://server.b-net.co.in/api/complaint/add', $scope.complaint,
	   addComplaintSucceded,
	   addComplaintFailed);
	}

	function addComplaintSucceded(response) {
	    NProgress.done();
	    console.log(response);
	    smsModelOperator.TicketId = response.data.TicketId;
	    smsModelCustomer.TicketId = response.data.TicketId;
	    notificationService.displaySuccess('Complaint registered successfully : ' + response.data.TicketId);

	    sendSMS(1); // Complaint Added Customer
	    sendSMS(2); // Complaint Added Operator
	    globalService.getGlobalData();
	    globalService.getComplaints();
	    smsService.checkBalance();
	    $scope.complaint = {};

	}

	function addComplaintFailed(response) {
		console.log(response);
		notificationService.displayError('Registration failed : ' + response.data.Message);
		NProgress.done();
	   
	}

	function sendSMS(type) {
	    
       
        if (type === 1) {
            smsModelCustomer.Type = 1;
            smsModelCustomer.CustomerId = $scope.customerSelected.CustomerId;
            smsModelCustomer.CustomerName = $scope.customerSelected.Name;
            smsModelCustomer.CustomerMobile = $scope.customerSelected.Mobile;
            smsModelCustomer.OperatorId = $scope.customerSelected.Operator.ID;
            smsModelCustomer.OperatorName = $scope.customerSelected.Operator.Name;
            smsModelCustomer.OperatorMobile = $scope.customerSelected.Operator.Mobile;
            smsModelCustomer.Date = null;
            smsService.send(smsModelCustomer, smsCompleted);
        } else {
            smsModelOperator.Type = 2;
            smsModelOperator.CustomerId = $scope.customerSelected.CustomerId;
            smsModelOperator.CustomerName = $scope.customerSelected.Name;
            smsModelOperator.CustomerMobile = $scope.customerSelected.Mobile;
            smsModelOperator.OperatorId = $scope.customerSelected.Operator.ID;
            smsModelOperator.OperatorName = $scope.customerSelected.Operator.Name;
            smsModelOperator.OperatorMobile = $scope.customerSelected.Operator.Mobile;
            smsModelOperator.Date = null;
            smsService.send(smsModelOperator, smsCompleted);
        }
	   
	}

	function smsCompleted(result) {

	    console.log('sms send result', result);
	    notificationService.displayInfo('SMS sent succesfully..');

	}
	
	$scope.onSelectCallback = function (item, model) {

	    //   $scope.eventResult = { item: item, model: model };
	    $scope.customerSelected = item;
	    console.log('customerSelected :', $scope.customerSelected);
	    if (item != null) {
	        $scope.DisableSubmitButton = false;
	    }
	};

	getCustomers();

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