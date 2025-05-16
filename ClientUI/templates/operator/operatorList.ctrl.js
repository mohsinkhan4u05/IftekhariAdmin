/**
 * Operator PAGE CONTROLLER
 */

app.controller('OperatorListCtrl', function ($scope, $location, $rootScope, apiService, notificationService, DTOptionsBuilder, DTColumnBuilder) {

	$scope.GetOperators = getOperators;
	$scope.EditOperator = editOperator;

	$scope.operators = [];		

	function getOperators() {
	 
	    NProgress.start();
	    apiService.get('http://server.b-net.co.in/api/operator/list', null,
	   getOperatorsSucceded,
	   getOperatorsFailed);
	}

	function getOperatorsSucceded(response) {
	    NProgress.done();
	    console.log(response);
	    $scope.operators = response.data;
	  
	}

	function getOperatorsFailed(response) {
	    console.log(response);
	    notificationService.displayError('Loading oprators failed : ' + response.data.Message);
	}

	function editOperator(id) {
	    window.location.href = '#!/operator/edit/' + id + '';
	}


	$scope.vm = {};

	$scope.vm.dtOptions = DTOptionsBuilder.newOptions()
       .withOption('responsive', true)
      .withOption('order', [0, 'asc']);

	//$scope.dtOptions = DTOptionsBuilder.newOptions()
    //            .withOption('responsive', true)
    //            .withOption('bAutoWidth', false)
    //            .withPaginationType('full_numbers')
    //            .withDOM('frtip');

    getOperators();
});