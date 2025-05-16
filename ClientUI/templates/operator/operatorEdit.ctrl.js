/**
 * Operator PAGE CONTROLLER
 */

app.controller('OperatorEditCtrl', function ($scope, $location, $rootScope,$routeParams, apiService, notificationService) {


    $scope.UpdateOperator = updateOperator;
    $scope.status = ["Active", "DeActive"];


    function getOperatorDetail() {
        NProgress.start();
        apiService.get('http://server.b-net.co.in/api/operator/details/' + $routeParams.id, null,
	   getOperatorSucceded,
	   getOperatorFailed);
    }

    function getOperatorSucceded(response) {
        NProgress.done();
        console.log(response);
        $scope.editedOperator = response.data;
    }

    function getOperatorFailed(response) {
        console.log(response);
        notificationService.displayError('Unable to load operator details : ' + response.data.Message);
    }


    function updateOperator() {
        console.log('edited', $scope.editedOperator);
        //    $scope.operator = {};
        //    $scope.operator = { Email: "az@gmail.com", Mobile: "96846584", RegDate: "August 2, 2017" };
        NProgress.start();
        apiService.post('http://server.b-net.co.in/api/operator/update', $scope.editedOperator,
	   updateOperatorSucceded,
	   updateOperatorFailed);
    }

    function updateOperatorSucceded(response) {
        NProgress.done();
        console.log(response);
        notificationService.displaySuccess('Operator updated successfully : ' + $scope.editedOperator.Name);
    }

    function updateOperatorFailed(response) {
        console.log(response);
        notificationService.displayError('Unable to update operator : ' + response.data.Message);
    }

    $scope.onSelectCallback = function (item, model) {

        $scope.statusSelected = item;
        console.log('statusSelected :', $scope.statusSelected);
        if (item != null) {
            $scope.DisableSubmitButton = false;
        }
    };

    getOperatorDetail();

});