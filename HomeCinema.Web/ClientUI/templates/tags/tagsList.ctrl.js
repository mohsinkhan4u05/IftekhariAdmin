/**
 * Operator PAGE CONTROLLER
 */

app.controller('TagsListCtrl', function ($scope, $location, $rootScope, apiService, notificationService, DTOptionsBuilder, DTColumnBuilder) {

	$scope.GetTags = getTags;
//	$scope.EditOperator = editOperator;

	$scope.operators = [];		

	function getTags() {
	 
	    NProgress.start();
		apiService.get('/api/tags/list', null,
	   gettagsSucceded,
	   gettagsFailed);
	}

	function gettagsSucceded(response) {
	    NProgress.done();
	    console.log(response);
	    $scope.tags = response.data;
	  
	}

	function gettagsFailed(response) {
	    console.log(response);
	    notificationService.displayError('Loading tags failed : ' + response.data.Message);
	}

	function editOperator(id) {
		window.location.href = '#!/tags/edit/' + id + '';
	}


	$scope.vm = {};

	$scope.vm.dtOptions = DTOptionsBuilder.newOptions()
		.withOption('responsive', true)
		.withDisplayLength(100)
		.withOption('lengthMenu', [100, 200, 500,1000])
      .withOption('order', [0, 'asc']);

	
	getTags();
});