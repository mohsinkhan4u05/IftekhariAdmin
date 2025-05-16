/**
 * Book PAGE CONTROLLER
 */

app.controller('BookListCtrl', function ($scope, $rootScope, apiService, notificationService, DTOptionsBuilder) {

	$scope.GetBooks = getBooks;
	$scope.UpdateBook = editBook;
	$scope.GetBookDetail = getBookDetail;	
	$scope.books = [];
	

	function getBooks() {
		NProgress.start();
		var config = {
			Page: 1,
			Limit: 1000,
			Filter : ''
		}
		apiService.post('/api/books/list', config,
			getBooksSucceded,
			getBooksFailed);
	}

	function getBooksSucceded(response) {
		NProgress.done();
		$scope.books = response.data.books;
	}

	function getBooksFailed(response) {
		NProgress.done();
		notificationService.displayError('Loading books failed : ' + response.data.Message);
	}

	function editBook(id) {	  
	    window.location.href = '#!/Book/edit/' + id + '';
	}


	function getBookDetail(selectedBook) {
		$scope.selectedBook = selectedBook;
	}

	function deleteBook(itemSelected) {
		NProgress.start();
		apiService.post('/api/books/delete', itemSelected,
			deleteBookSucceded,
			deleteBookFailed);
	}

	function deleteBookSucceded(response) {

		NProgress.done();
		notificationService.displaySuccess('Book deleted successfully!!!');
		getBooks();
	}

	function deleteBookFailed(response) {

		if (response.status === 500) {
			notificationService.displayError('Book does not exist!!!');
		} else {
			notificationService.displayError('Unable to delete Book : ' + response.data.Message);
		}
		NProgress.done();

	}

	$scope.checkConfirmDelete = function (item) {
		deleteBook(item);
	}

	$scope.sweetDelete = {};
	$scope.sweetDelete.option = {
		title: "Are you sure?",
		text: "You will not be able to recover this information!",
		type: "warning",
		showCancelButton: true,
		confirmButtonColor: "#DD6B55",
		confirmButtonText: "Yes, delete it!",
		cancelButtonText: "No, cancel it!",
		closeOnConfirm: false,
		closeOnCancel: false
	}
	$scope.sweetDelete.confirm = {
		title: 'Deleted!',
		text: 'Book has been deleted.',
		type: 'success'
	};

	$scope.sweetDelete.cancel = {
		title: 'Cancelled!',
		text: 'Book record is safe',
		type: 'error'
	}

	$scope.checkCancelDelete = function () {

	}

	$scope.vm = {};

	$scope.vm.dtOptions = DTOptionsBuilder.newOptions()
       .withOption('responsive', true)
       .withOption('order', [])
    .withOption('deferRender', true)
   .withOption('lengthMenu', [20,50, 100, 150, 200]);

	
	getBooks();

});

