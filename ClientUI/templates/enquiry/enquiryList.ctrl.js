/**
 * enquiry PAGE CONTROLLER
 */

app.controller('EnquiryListCtrl', function ($scope, $location, $rootScope, apiService, notificationService, DTOptionsBuilder, DTColumnBuilder) {

	$scope.Getenquirys = getEnquiries;
	$scope.Updateenquiry = editenquiry;

	$scope.enquirys = [];		

	function getEnquiries() {
	 
	    NProgress.start();
	  //  $scope.enquirys = $rootScope.enquirys;
	  //  console.log('$scope.enquirys', $scope.enquirys);
	    apiService.get('http://server.b-net.co.in/api/enquiry/list', null,
	   getenquirysSucceded,
	   getenquirysFailed);
	}

	function getenquirysSucceded(response) {
	   
	    
	    $scope.enquirys = response.data;
	    console.log('$scope.enquirys', $scope.enquirys);
	    NProgress.done();
	  
	}

	function getenquirysFailed(response) {
	  
	    notificationService.displayError('Loading enquiries failed : ' + response.data.Message);
	}

	function editenquiry(id) {	  
	    window.location.href = '#!/enquiry/edit/' + id + '';
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

	    notificationService.displayError('Loading enquirys failed : ' + response.data.Message);
	}

	$scope.vm = {};

	$scope.vm.dtOptions = DTOptionsBuilder.newOptions()
       .withOption('responsive', true)
	.withOption('order', [])
    .withOption('deferRender', true)
   .withOption('lengthMenu', [20,50, 100, 150, 200]);


	getEnquiries();
    getBalance();
});

