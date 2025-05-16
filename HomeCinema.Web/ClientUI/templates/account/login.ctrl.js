/**
 * LOGIN PAGE CONTROLLER
 */

app.controller('loginPageCtrl', function ($scope, membershipService,globalService, notificationService, $rootScope, $location) {

    $rootScope.hideLeftMenu = true;
    $rootScope.hideTopMenu = true;
    $rootScope.showFooter = false;

    $scope.login = login;
    $scope.user = {};
   
   // $scope.regsiterUser = { Username: 'Mohsin', Password: 'MohsinM', mobile: '9773406237', Email: 'demo@gmail.com' };
  //  $scope.regsiterUser = { Username: 'Tausif', Password: '9224287460', mobile: '9224287460', Email: 'demo@gmail.com' };

    function login() {
        NProgress.start();
        membershipService.login($scope.user, loginCompleted);
    // membershipService.register($scope.regsiterUser, loginCompleted);
    }

    function loginCompleted(result) {
        NProgress.done();
        if (result.data.success) {
            $rootScope.hideLeftMenu = false;
            $rootScope.hideTopMenu = false;
            $rootScope.showFooter = true;
            $scope.user.role = result.data.role;
            $scope.user.mobile = result.data.mobile;
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