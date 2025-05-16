/**
 * Customer PAGE CONTROLLER
 */

app.controller('CustomerEditCtrl', function ($scope, $location, $rootScope, $routeParams, apiService, notificationService, globalService) {


    $scope.UpdateCustomer = updateCustomer;
    $scope.DeleteCustomer = deleteCustomer;
    $scope.statusOptions = ['Active', 'Inactive', 'New - Activation Pending', 'Suspended'];

    function getCustomerDetail() {
        NProgress.start();
        apiService.get('http://server.b-net.co.in/api/customers/details/' + $routeParams.id, null,
	   getCustomerSucceded,
	   getCustomerFailed);
    }

    function getCustomerSucceded(response) {
        NProgress.done();
        console.log(response);
        $scope.customer = response.data;
    }

    function getCustomerFailed(response) {
        console.log(response);
        notificationService.displayError('Unable to load Customer details : ' + response.data.Message);
    }

    function updateCustomer() {
        console.log('edited', $scope.customer);
        //    $scope.Customer = {};
        //    $scope.Customer = { Email: "az@gmail.com", Mobile: "96846584", RegDate: "August 2, 2017" };
        NProgress.start();
        apiService.post('http://server.b-net.co.in/api/customers/update', $scope.customer,
	   updateCustomerSucceded,
	   updateCustomerFailed);
    }

    function updateCustomerSucceded(response) {
       
        console.log(response);
        globalService.getCustomers();
        NProgress.done();
        notificationService.displaySuccess('Customer updated successfully : ' + $scope.customer.Name);
    }

    function updateCustomerFailed(response) {
        console.log(response);
        notificationService.displayError('Unable to update Customer : ' + response.data.Message);
    }


    function deleteCustomer() {
        console.log('deleted', $scope.customer);
       
        NProgress.start();
        apiService.post('http://server.b-net.co.in/api/customers/delete', $scope.customer,
	   deleteCustomerSucceded,
	   deleteCustomerFailed);
    }

    function deleteCustomerSucceded(response) {

        console.log(response);
       
        NProgress.done();
        notificationService.displaySuccess('Customer deleted successfully : ' + $scope.customer.Name);
        globalService.getCustomers();
    }

    function deleteCustomerFailed(response) {
        console.log(response);
        if (response.status === 500) {
            notificationService.displayError('Customer Already deleted');
        } else {
            notificationService.displayError('Unable to delete Customer : ' + response.data.Message);
        }
        NProgress.done();
       
    }

    $scope.onSelectCallbackRouter = function (item, model) {

        //   $scope.eventResult = { item: item, model: model };
        $scope.opearorSelectedRouter = item;
        console.log('opearorSelectedRouter :', $scope.opearorSelectedRouter);
    };

    function loadOperatorList() {
        console.log('loadOperatorList called');
        NProgress.start();
        apiService.get('http://server.b-net.co.in/api/operator/list', null,
	   loadOperatorSucceded,
	   loadOperatorFailed);
    }

    function loadOperatorSucceded(response) {
        NProgress.done();
        $scope.operatorList = response.data;

    }

    function loadOperatorFailed(response) {
        console.log(response);

    }

    $scope.sweet = {};
    $scope.sweet.option = {
        title: "Are you sure?",
        text: "You will not be able to recover this customer information!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel it!",
        closeOnConfirm: false,
        closeOnCancel: false
    }
    $scope.sweet.confirm = {
        title: 'Deleted!',
        text: 'Customer record has been deleted.',
        type: 'success'
    };

    $scope.sweet.cancel = {
        title: 'Cancelled!',
        text: 'Customer record is safe',
        type: 'error'
    }

    $scope.checkCancel = function () {
        console.log("check cancel");
    }

    $scope.checkConfirm = function () {
        console.log("check confrim");
        deleteCustomer();

    }


    loadOperatorList();
    getCustomerDetail();
   

});