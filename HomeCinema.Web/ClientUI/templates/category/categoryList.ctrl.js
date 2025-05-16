/**
 * Operator PAGE CONTROLLER
 */

app.controller('CategoryListCtrl', function ($scope, $location, $rootScope, apiService, notificationService, DTOptionsBuilder, DTColumnBuilder) {

	$scope.GetCategories = getCategories;
//	$scope.EditOperator = editOperator;

	$scope.operators = [];		

	function getCategories() {
	 
	    NProgress.start();
		apiService.get('/api/categories/list', null,
	   getcategoriesSucceded,
	   getcategoriesFailed);
	}

	function getcategoriesSucceded(response) {
	    NProgress.done();
	    console.log(response);
	    $scope.categories = response.data;
	  
	}

	function getcategoriesFailed(response) {
	    console.log(response);
	    notificationService.displayError('Loading categories failed : ' + response.data.Message);
	}

	function editOperator(id) {
		window.location.href = '#!/categories/edit/' + id + '';
	}


	$scope.vm = {};

	$scope.vm.dtOptions = DTOptionsBuilder.newOptions()
       .withOption('responsive', true)
      .withOption('order', [0, 'asc']);

	
	getCategories();
});