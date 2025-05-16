/**
 * Category PAGE CONTROLLER
 */

app.controller('CategoryAddCtrl', function ($scope, $location, $rootScope, apiService, notificationService) {

    $scope.AddCategory = addCategory;

		
	function addCategory() {
	    console.log('add', $scope.Category);
	    NProgress.start();
		apiService.post('/api/categories/add', $scope.Category,
	  addCategorySucceded,
	   addCategoryFailed);
	}

	function addCategorySucceded(response) {
	    NProgress.done();
		console.log(response);
		notificationService.displaySuccess('Category added successfully : ' + $scope.Category.Name);	
	}

	function addCategoryFailed(response) {
		console.log(response);
		notificationService.displayError('Adding Category failed : ' + response.data[0]);
	}

	
});