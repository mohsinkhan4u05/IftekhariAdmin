/**
 * LOGIN PAGE CONTROLLER
 */

app.controller('loginPageCtrl', function ($scope, membershipService, notificationService, $rootScope, $location) {

    $rootScope.hideLeftMenu = true;
    $rootScope.hideTopMenu = true;
    $rootScope.showFooter = false;

    $scope.login = login;
    $scope.user = {};

    function login() {
        NProgress.start();
        membershipService.login($scope.user, loginCompleted);
    }

    function loginCompleted(result) {
        NProgress.done();
        if (result.data.success) {

            $rootScope.hideLeftMenu = false;
            $rootScope.hideTopMenu = false;
            $rootScope.showFooter = true;
            membershipService.saveCredentials($scope.user);
            notificationService.displaySuccess('Hello ' + $scope.user.username);
            $scope.userData.displayUserInfo();
            if ($rootScope.previousState)
                $location.path($rootScope.previousState);
            else
                $location.path('/');
        }
        else {
            notificationService.displayError('Login failed. Try again.');
        }
    }

});