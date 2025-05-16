
app.controller('rootCtrl', function ($scope, $location, membershipService, $rootScope, smsService) {


    $scope.userData = {};
        
    $scope.userData.displayUserInfo = displayUserInfo;
    $scope.logout = logout;

    function displayUserInfo() {
        $scope.userData.isUserLoggedIn = membershipService.isUserLoggedIn();
        

        if($scope.userData.isUserLoggedIn)
        {
            $scope.username = $rootScope.repository.loggedUser.username;
        }
    }

    function logout() {
        membershipService.removeCredentials();
        $location.path('#/');
        $scope.userData.displayUserInfo();
    }

    //function getBalance() {

    //    NProgress.start();
    //    apiService.get('/api/sms/balance', null,
	//   getBalanceSucceded,
	//   getBalanceFailed);
    //}

    //function getBalanceSucceded(response) {
    //    NProgress.done();
    //    $rootScope.balance = response.data;
    //    console.log('$scope.balance', $rootScope.balance);


    //}

    //function getBalanceFailed(response) {
    //    console.log(response);
    //    notificationService.displayError('Loading customers failed : ' + response.data.Message);
    //}
   
    $scope.userData.displayUserInfo();
  //  getBalance();
});