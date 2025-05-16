/**
 * CustomerPAGE CONTROLLER
 */

app.controller('CustomerAddCtrl', function ($scope, $location, $rootScope, apiService, notificationService, smsService, globalService) {

    $scope.AddCustomer = addCustomer;
    $scope.customer = { Operator : [] ,RegDate : new Date() , DueDate : new Date()};
    $scope.operatorList = [];
   
    $scope.sendWelcome = false;
    $scope.hasRouter = true;


    $scope.changeCallback = function () {
        console.log('This is the state of my model ' + $scope.sendWelcome);
    };

    $scope.statusOptions = ['Active', 'Inactive', 'New - Activation Pending', 'Suspended'];
    $scope.smsModel = {};

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
		
    function addCustomer() {
      //  $scope.customer.Operator.ID = $scope.opearorSelected.ID;
        $scope.customer.IsRouter = $scope.hasRouter;
        $scope.customer.Status = $scope.statusSelected;
	    console.log('add', $scope.customer);	   
	    NProgress.start();
	    apiService.post('http://server.b-net.co.in/api/customers/add', $scope.customer,
	   addCustomerSucceded,
	   addCustomerFailed);
	}

	function addCustomerSucceded(response) {
	    NProgress.done();
	    console.log(response);
	    globalService.getCustomers();
		notificationService.displaySuccess('Customer registered successfully : ' + $scope.customer.Name);
		if ($scope.sendWelcome === true) {
		    $scope.smsModel.CustomerId = $scope.customer.CustomerID;
		    $scope.smsModel.CustomerName = $scope.customer.Name;
		    $scope.smsModel.CustomerMobile = $scope.customer.Mobile;
		    $scope.smsModel.OperatorId = $scope.opearorSelected.ID;
		    $scope.smsModel.OperatorName = $scope.opearorSelected.Name;
		    $scope.smsModel.OperatorMobile = $scope.opearorSelected.Mobile;
		    $scope.smsModel.TicketId = null;
		    $scope.smsModel.Date = null;
		    $scope.smsModel.Type = 0;
		    console.log('$scope.smsModel', $scope.smsModel);
		    smsService.send($scope.smsModel, smsCompleted);
		}
		$scope.customer = { Operator: [], RegDate: new Date(), DueDate: new Date() };
	}

	function smsCompleted(result) {
	        console.log('sms send result', result);	     
	        notificationService.displayInfo('welcome SMS sent succesfully..');
	        smsService.checkBalance();
	        globalService.getGlobalData();

	}

	function addCustomerFailed(response) {
		console.log(response);
		notificationService.displayError('Registration failed : ' + response.data[0]);
		NProgress.done();
	}

	

	$scope.onSelectCallback = function (item, model) {

	    //   $scope.eventResult = { item: item, model: model };
	    $scope.opearorSelected = item;
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