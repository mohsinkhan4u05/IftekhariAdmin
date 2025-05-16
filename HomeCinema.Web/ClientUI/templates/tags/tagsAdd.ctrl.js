/**
 * Tags PAGE CONTROLLER
 */

app.controller('TagsAddCtrl', function ($scope, $location, $rootScope, apiService, notificationService) {

    $scope.AddTags = addTags;

		
	function addTags() {
	    NProgress.start();
		apiService.post('/api/tags/add', $scope.Tags,
	  addTagsSucceded,
	   addTagsFailed);
	}

	function addTagsSucceded(response) {
	    NProgress.done();
		console.log(response);
		notificationService.displaySuccess('Tags added successfully : ' + $scope.Tags.Name);	
	}

	function addTagsFailed(response) {
		console.log(response);
		notificationService.displayError('Adding Tags failed : ' + response.data[0]);
	}

	
});