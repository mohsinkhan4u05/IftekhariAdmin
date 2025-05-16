/**
 * Operator PAGE CONTROLLER
 */

app.controller('BookEditCtrl', function ($scope, $location, $rootScope,$routeParams, apiService, notificationService) {


    $scope.UpdateBook = updateBook;
    $scope.categories = [];
    $scope.languageList = ['Arabic', 'Bengali', 'English', 'Hindi', 'Hinglish', 'Kashmiri', 'Persian', 'Punjabi', 'Sanskrit', 'Sindhi', 'Turkish', 'Urdu', 'Others'];
    $scope.multiple = { tages : [] };


    function getBookDetail() {
        NProgress.start();
        apiService.get('/api/books/details/' + $routeParams.id, null,
	   getBookDetailSucceded,
	   getBookDetailFailed);
    }

    function getBookDetailSucceded(response) {
        NProgress.done();
        $scope.editedBook = response.data;
        const arr = $scope.editedBook.Tags.split(',');
        $scope.multiple.tags = arr;
    }

    function getBookDetailFailed(response) {
        notificationService.displayError('Unable to load Book details : ' + response.data.Message);
    }


    function updateBook() {
        $scope.editedBook.Tags = $scope.multiple.tags.join();
        NProgress.start();
        apiService.post('/api/books/update', $scope.editedBook,
	   updateBookSucceded,
            updateBookFailed
        );
    }

    function updateBookSucceded(response) {
        NProgress.done();
        notificationService.displaySuccess('Book updated successfully : ' + $scope.editedBook.Name);
    }

    function updateBookFailed(response) {
        notificationService.displayError('Unable to update Book : ' + response.data.Message);
    }

    function loadCategoryList() {

        NProgress.start();
        apiService.get('/api/categories/list', null,
            loadCategorySucceded,
            loadCategoryFailed);
    }

    function loadCategorySucceded(response) {
        NProgress.done();
        $scope.categories = response.data;

    }

    function loadCategoryFailed(response) {
        console.log(response);
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

    $scope.onSelectCallbackLanguage = function (item, model) {
        $scope.languageSelected = item;
    };

    $scope.onSelectCallbackMultipleCategory = function (item, model) {
        $scope.tagsSelected = item;
    };

    getBookDetail();
    loadCategoryList();
    loadTagList();
});