/**
 * Operator PAGE CONTROLLER
 */

app.controller('CategoryEditCtrl', function ($scope, $location, $rootScope,$routeParams, apiService, notificationService) {


    $scope.UpdateCategory = updateCategory;

    function getCategoryDetail() {
        NProgress.start();
        apiService.get('/api/categories/details/' + $routeParams.id, null,
	   getCategoryDetailSucceded,
	   getCategoryDetailFailed);
    }

    function getCategoryDetailSucceded(response) {
        NProgress.done();
        console.log(response);
        $scope.editedCategory = response.data;
    }

    function getCategoryDetailFailed(response) {
        console.log(response);
        notificationService.displayError('Unable to load Category details : ' + response.data.Message);
    }


    function updateCategory() {
        console.log('edited', $scope.editedCategory);
        NProgress.start();
        apiService.post('/api/categories/update', $scope.editedCategory,
	   updateCategorySucceded,
	   updateCategoryFailed);
    }

    function updateCategorySucceded(response) {
        NProgress.done();
        console.log(response);
        notificationService.displaySuccess('Category updated successfully : ' + $scope.editedCategory.Name);
    }

    function updateCategoryFailed(response) {
        console.log(response);
        notificationService.displayError('Unable to update Category : ' + response.data.Message);
    }


    getCategoryDetail();

});