/**
 * Operator PAGE CONTROLLER
 */

app.controller('OperatorAddCtrl', function ($scope, $location, $rootScope, apiService, notificationService) {

	$scope.AddOperator = addOperator;

		
	function addOperator() {
	    console.log('add', $scope.operator);
	//    $scope.operator = {};
	    //    $scope.operator = { Email: "az@gmail.com", Mobile: "96846584", RegDate: "August 2, 2017" };
	    NProgress.start();
	    apiService.post('http://server.b-net.co.in/api/operator/add', $scope.operator,
	   addOperatorSucceded,
	   addOperatorFailed);
	}

	function addOperatorSucceded(response) {
	    NProgress.done();
		console.log(response);
		notificationService.displaySuccess('Operator registered successfully : ' + $scope.operator.Name);	
	}

	function addOperatorFailed(response) {
		console.log(response);
		notificationService.displayError('Registration failed : ' + response.data.Message);
	}

	
});