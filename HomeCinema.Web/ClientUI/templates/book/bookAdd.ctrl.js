/**
 * book PAGE CONTROLLER
 */

app.controller('BookAddCtrl', function ($scope, $rootScope, $timeout, apiService, notificationService, Upload) {

	$scope.AddBook = addbook;
	$scope.showUpload = true;
	$scope.categoryList = [];
	$scope.languageList = ['Arabic', 'Bengali', 'Englsih', 'Hindi', 'Hinglish', 'Kashmiri', 'Persian', 'Punjabi', 'Sanskrit', 'Sindhi', 'Turkish', 'Urdu', 'Others'];
	$scope.multiple = {};
	$scope.multiple.tags = ['Sufism', 'Tasawwuf'];
	$scope.SelectedFiles = [];


	function addbook() {
		if ($scope.SelectedFiles && $scope.SelectedFiles.length === 1) {
			$scope.book.CategoryId = $scope.categorySelected.ID;
			$scope.book.Category = $scope.categorySelected;
			$scope.book.Tags = $scope.multiple.tags.join();
			$scope.book.AddedBy = $rootScope.repository.loggedUser.username;
			$scope.book.UpdatedBy = $rootScope.repository.loggedUser.username;	   
			NProgress.start();
			apiService.post('/api/books/add', $scope.book,
				addbookSucceded,
				addbookFailed);
		}
		else
		{
			notificationService.displayError('Please upload book !!!');
		}
	}

	function addbookSucceded(response) {	     	
		upload(response.data);
	}

	function addbookFailed(response) {
		notificationService.displayError('Adding book failed : ' + response.data[0]);
		NProgress.done();
	}

	function upload(data) {
		if ($scope.SelectedFiles && $scope.SelectedFiles.length) {
			Upload.upload({
				url: "/api/books/uploadFiles",
				data: {
					files: $scope.SelectedFiles,
					id: data.BookId,
					name: data.Name
				}
			}).then(function (response) {
				$timeout(function () {
					$scope.Result = response.data;
					notificationService.displaySuccess('Book added successfully : ' + $scope.book.Name);	
					NProgress.done();	   
					$scope.book = {};
					$scope.SelectedFiles = [];	
				});
			}, function (response) {
				if (response.status > 0) {
					var errorMsg = response.status + ': ' + response.data;
					alert(errorMsg);
				}
			}, function (evt) {
				var element = angular.element(document.querySelector('#dvProgress'));
				$scope.Progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
				element.html('<div style="width: ' + $scope.Progress + '%">' + $scope.Progress + '%</div>');
			});
		}
	}

	function loadCategoryList() {
		NProgress.start();
		apiService.get('/api/categories/list', null,
			loadCategorySucceded,
			loadCategoryFailed);
	}

	function loadCategorySucceded(response) {
		NProgress.done();
		$scope.categoryList = response.data;
	}

	function loadCategoryFailed(response) {
		NProgress.done();
	}

	function loadTagList() {
		NProgress.start();
		apiService.get('/api/tags/listDrodDown', null,
			loadTagSucceded,
			loadTagFailed);
	}

	function loadTagSucceded(response) {
		NProgress.done();
		$scope.tags = response.data;
	}

	function loadTagFailed(response) {
		NProgress.done();
	}

	$scope.onSelectCallbackCategory = function (item, model) {
		$scope.categorySelected = item;
	};

	$scope.onSelectCallbackMultipleCategory = function (item, model) {
		$scope.tagsSelected = item;
	};

	$scope.onSelectCallbackLanguage = function (item, model) {
		$scope.languageSelected = item;
	};

	$scope.UploadFiles = function (files) {
		$scope.SelectedFiles = files;
	};

	loadCategoryList();
	loadTagList();
	
});