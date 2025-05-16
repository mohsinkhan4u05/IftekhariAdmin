/**
 * enquiryPAGE CONTROLLER
 */

app.controller('EnquiryAddCtrl', function ($scope, $location, $rootScope, apiService, notificationService, smsService, globalService) {

    $scope.Addenquiry = addenquiry;
    $scope.enquiry = { CommentsList: [
        {
            Comment : 'Request for new connection'
        } ] };
    $scope.operatorList = [];
   

    $scope.enquiry.isRemind = false;
    $scope.changeCallback = function () {
        console.log('This is the state of my model ' + $scope.isRemind);
    };

    var smsModelCustomer = {};
    var smsModelOperator = {};

    function loadOperatorList() {
        console.log('loadOperatorList called');
        NProgress.start();
        apiService.get('http://server.b-net.co.in/api/operator/list', null,
	   loadOperatorSucceded,
	   loadOperatorFailed);
    }

    function loadOperatorSucceded(response) {        
        NProgress.done();
        $scope.operatorList = response.data;
 
    }

    function loadOperatorFailed(response) {
        console.log(response);
     
    }
		
    function addenquiry() {
        $scope.enquiry.CommentsList[0].AddedBy = 'Customer';
        $scope.enquiry.Status = 'Assigned';
	    console.log('add', $scope.enquiry);	   
	    NProgress.start();
	    apiService.post('http://server.b-net.co.in/api/enquiry/add', $scope.enquiry,
	   addenquirySucceded,
	   addenquiryFailed);
	}

	function addenquirySucceded(response) {
	    NProgress.done();
	    console.log(response);
	   
		notificationService.displaySuccess('Enquiry registered successfully for ' + $scope.enquiry.Name);
		sendSMS(4); // Enquiry Added Customer
		sendSMS(5); // Enquiry Added Operator
		globalService.getGlobalData();		
		smsService.checkBalance();
	   
	}

	function sendSMS(type) {


	    if (type === 4) {
	        smsModelCustomer.Type = 4;
	     
	        smsModelCustomer.CustomerName = $scope.enquiry.Name;
	        smsModelCustomer.CustomerMobile = $scope.enquiry.Mobile;
	      
	        smsModelCustomer.OperatorName = $scope.opearorSelected.Name;
	        smsModelCustomer.OperatorMobile = $scope.opearorSelected.Mobile;
	        smsModelCustomer.Date = null;
	        console.log("smsModelCustomer :", smsModelCustomer);
	             smsService.send(smsModelCustomer, smsCompleted);
	    } else {
	        smsModelOperator.Type = 5;
	        smsModelOperator.CustomerName = $scope.enquiry.Name;
	        smsModelOperator.CustomerMobile = $scope.enquiry.Mobile;

	        smsModelOperator.OperatorName = $scope.opearorSelected.Name;
	        smsModelOperator.OperatorMobile = $scope.opearorSelected.Mobile;
	        smsModelOperator.Date = null;
	        console.log("smsModelOperator :", smsModelOperator);
	            smsService.send(smsModelOperator, smsCompleted);
	    }

	}

	function smsCompleted(result) {

	    console.log('sms send result', result);
	    notificationService.displayInfo('SMS sent succesfully..');

	}

	function addenquiryFailed(response) {
		console.log(response);
		notificationService.displayError('Registration failed : ' + response.data[0]);
		NProgress.done();
	}

	

	$scope.onSelectCallback = function (item, model) {

	    //   $scope.eventResult = { item: item, model: model };
	    $scope.opearorSelected = item;
	    $scope.enquiry.OperatorId = $scope.opearorSelected.ID;
	    console.log('opearorSelected :', $scope.opearorSelected);
	};


	$scope.onSelectCallbackRouter = function (item, model) {

	    //   $scope.eventResult = { item: item, model: model };
	    $scope.opearorSelectedRouter = item;
	    console.log('opearorSelectedRouter :', $scope.opearorSelectedRouter);
	};

	$scope.onSelectCallbackStatus = function (item, model) {

	    //   $scope.eventResult = { item: item, model: model };
	    $scope.statusSelected = item;
	    console.log('statusSelected :', $scope.statusSelected);
	    if (item != null) {
	        $scope.DisableSubmitButton = false;
	    }
	};

    loadOperatorList();


});