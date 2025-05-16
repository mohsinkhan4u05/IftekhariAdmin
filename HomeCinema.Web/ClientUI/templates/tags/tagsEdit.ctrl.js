/**
 * Operator PAGE CONTROLLER
 */

app.controller('TagsEditCtrl', function ($scope, $location, $rootScope,$routeParams, apiService, notificationService) {


    $scope.UpdateTags = updateTags;

    function getTagsDetail() {
        NProgress.start();
        apiService.get('/api/tags/details/' + $routeParams.id, null,
	   getTagsDetailSucceded,
	   getTagsDetailFailed);
    }

    function getTagsDetailSucceded(response) {
        NProgress.done();
        console.log(response);
        $scope.editedTags = response.data;
    }

    function getTagsDetailFailed(response) {
        console.log(response);
        notificationService.displayError('Unable to load Tags details : ' + response.data.Message);
    }


    function updateTags() {
        console.log('edited', $scope.editedTags);
        NProgress.start();
        apiService.post('/api/tags/update', $scope.editedTags,
	   updateTagsSucceded,
	   updateTagsFailed);
    }

    function updateTagsSucceded(response) {
        NProgress.done();
        console.log(response);
        notificationService.displaySuccess('Tags updated successfully : ' + $scope.editedTags.Name);
    }

    function updateTagsFailed(response) {
        console.log(response);
        notificationService.displayError('Unable to update Tags : ' + response.data.Message);
    }


    getTagsDetail();

});