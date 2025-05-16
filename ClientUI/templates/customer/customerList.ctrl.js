/**
 * Customer PAGE CONTROLLER
 */

app.controller('CustomerListCtrl', function ($scope, $location, $rootScope, apiService, smsService, notificationService, DTOptionsBuilder, DTColumnBuilder) {

	$scope.GetCustomers = getCustomers;
	$scope.UpdateCustomer = editCustomer;

	$scope.customers = [];		

	function getCustomers() {
	 
	    NProgress.start();
	    $scope.customers = $rootScope.customers;
	    console.log('$scope.customers', $scope.customers);
	  
	}

	function editCustomer(id) {	  
	    window.location.href = '#!/customer/edit/' + id + '';
	}

	function getBalance() {

	   
	    apiService.get('http://server.b-net.co.in/api/sms/balance', null,
	   getBalanceSucceded,
	   getBalanceFailed);
	}

	function getBalanceSucceded(response) {
	    $rootScope.balance = response.data;
	 
	    

	}

	function getBalanceFailed(response) {

	    notificationService.displayError('Loading customers failed : ' + response.data.Message);
	}

	$scope.vm = {};

	$scope.vm.dtOptions = DTOptionsBuilder.newOptions()
       .withOption('responsive', true)
    .withOption('deferRender', true)
   .withOption('lengthMenu', [20,50, 100, 150, 200]);


	
	getCustomers();
     getBalance();
});

