'use strict';

angular.module('cleanUI', [
    'ngRoute',
    'ngCookies',
    'base64',
    'cleanUI.controllers',
    'datatables',
    'ui.select',
    'ngSanitize',
    'uiSwitch',
    'angularMoment',
    'ng-sweet-alert',
    'angular-chartist',
    'ngFileUpload'
    //'pasvaz.bindonce',
    //'underscore'
])
.config(['$locationProvider', '$routeProvider',
    function ($locationProvider, $routeProvider) {


        /////////////////////////////////////////////////////////////
        // Cuustom      

        $routeProvider.when('/book/add', {
            templateUrl: 'ClientUI/templates/book/add.html',
            controller: 'BookAddCtrl',
            resolve: { isAuthenticated: isAuthenticated }
        });

        $routeProvider.when('/book/edit/:id', {
            templateUrl: 'ClientUI/templates/book/edit.html',
            controller: 'BookEditCtrl',
            resolve: { isAuthenticated: isAuthenticated }
        });

        $routeProvider.when('/book/list', {
            templateUrl: 'ClientUI/templates/book/list.html',
            controller: 'BookListCtrl',
            resolve: { isAuthenticated: isAuthenticated }
        });      

        $routeProvider.when('/category/add', {
            templateUrl: 'ClientUI/templates/category/add.html',
            controller: 'CategoryAddCtrl',
            resolve: { isAuthenticated: isAuthenticated }
        });

        $routeProvider.when('/category/list', {
            templateUrl: 'ClientUI/templates/category/list.html',
            controller: 'CategoryListCtrl',
            resolve: { isAuthenticated: isAuthenticated }
        });

        $routeProvider.when('/category/edit/:id', {
            templateUrl: 'ClientUI/templates/category/edit.html',
            controller: 'CategoryEditCtrl',
            resolve: { isAuthenticated: isAuthenticated }
        });

        $routeProvider.when('/tags/add', {
            templateUrl: 'ClientUI/templates/tags/add.html',
            controller: 'TagsAddCtrl',
            resolve: { isAuthenticated: isAuthenticated }
        });

        $routeProvider.when('/tags/list', {
            templateUrl: 'ClientUI/templates/tags/list.html',
            controller: 'TagsListCtrl',
            resolve: { isAuthenticated: isAuthenticated }
        });

        $routeProvider.when('/tags/edit/:id', {
            templateUrl: 'ClientUI/templates/tags/edit.html',
            controller: 'TagsEditCtrl',
            resolve: { isAuthenticated: isAuthenticated }
        });

        $routeProvider.when('/login', {
            templateUrl: 'ClientUI/templates/account/login-omega.html',
            controller: 'loginPageCtrl'
        });

        /////////////////////////////////////////////////////////////
        // SYSTEM
        $routeProvider.when('/', { redirectTo: '/book/list' });
        $routeProvider.otherwise({ redirectTo: 'ClientUI/pages/page-404' });

     

    }
])

.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // handle page refreshes
        $rootScope.repository = $cookieStore.get('repository') || {};
        if ($rootScope.repository.loggedUser) {
            $http.defaults.headers.common['Authorization'] = $rootScope.repository.loggedUser.authdata;
        }
    }
]);

var app = angular.module('cleanUI.controllers', []);

app.controller('RootCtrl', function ($scope,$timeout, $location,notificationService, membershipService, $rootScope, apiService, globalService, smsService) {


    $scope.userData = {};
    $scope.updatedUser = {};
    $scope.userData.displayUserInfo = displayUserInfo;
    $scope.logout = logout;
    $scope.updatePassword = updatePassword;
    $scope.showOTP = showOTP;
    $scope.close = close;
    $scope.showOTPscreen = false;
    $scope.showOTPerror = false;
    $scope.passwordSuccess = false;
    $scope.OTPerror = 'OTP you entered in incorrect!!!';
    $scope.otpEntered = '';
    $scope.smsModel = {};
    $scope.UpdatingPasswordLoader = false;
    NProgress.configure({
        minimum: 0.2,
        trickleRate: 0.1,
        trickleSpeed: 200
    });

    $scope.counter = 120;
    $scope.onTimeout = function () {
        $scope.counter--;
        if ($scope.counter>0) {
            mytimeout = $timeout($scope.onTimeout, 1000);
        } else {
            $timeout.cancel(mytimeout);

        }
       
    }

    var mytimeout = $timeout($scope.onTimeout, 1000);
   
    $scope.$on('$routeChangeStart', function () {

        // NProgress Start
        $('body').addClass('cui-page-loading-state');
        NProgress.start();

    });

    $scope.$on('$routeChangeSuccess', function () {

        // Set to default (show) state left and top menu, remove single page classes
        $('body').removeClass('single-page single-page-inverse');

        // Firefox issue: scroll top when page load
        $('html, body').scrollTop(0);

        // Set active state menu after success change route
        $('.left-menu-list-active').removeClass('left-menu-list-active');
        $('nav.left-menu .left-menu-list-root .left-menu-link').each(function () {
            if ($(this).attr('href') == '#' + $location.path()) {
                $(this).closest('.left-menu-list-root > li').addClass('left-menu-list-active');
            }
        });

        // NProgress End
        setTimeout(function () {
            NProgress.done();
        }, 1000);
        $('body').removeClass('cui-page-loading-state');
    });

    function displayUserInfo() {
        $scope.userData.isUserLoggedIn = membershipService.isUserLoggedIn();        

        if ($scope.userData.isUserLoggedIn) {            
            //globalService.getDashboardData();
            //globalService.getUpcomingAppointment();
            //globalService.getCustomers();
           
            $scope.username = $rootScope.repository.loggedUser.username;
        }
    }

    function logout() {
        membershipService.removeCredentials();
        $location.path('/login');
        $scope.userData.displayUserInfo();
    }

    function showOTP() {
        $scope.showOTPscreen = true;
        $scope.hideNextButton = true;
        $scope.randomNumber = '';
        $scope.randomNumber = Math.floor(1000 + Math.random() * 9000);
        $scope.counter = 120;
        mytimeout = $timeout($scope.onTimeout, 1000);
        $scope.smsModel.OperatorMobile = $rootScope.repository.loggedUser.mobile;
        $scope.smsModel.Type = 7;
        $scope.smsModel.TicketId = $scope.randomNumber;
            smsService.send($scope.smsModel, smsCompleted);        
    }

    function smsCompleted(result) {
        notificationService.displaySuccess('OTP sent on mobile succesfully...');
        smsService.checkBalance();

    }
    function updatePassword() {        
        if ($scope.randomNumber == $scope.otpEntered) {
            $scope.UpdatingPasswordLoader = true;
            $scope.showOTPerror = false;
            $scope.updatedUser.username = $rootScope.repository.loggedUser.username;
            $scope.updatedUser.password = $scope.pw1;
            apiService.post('/api/account/ChangePassword', $scope.updatedUser,
            updatePasswordcompleted,
            updatePasswordFailed);
        } else {
            $scope.showOTPerror = true;

        }

     
    }

    function updatePasswordcompleted() {
        NProgress.done();
        notificationService.displaySuccess('Password updated succesfully. Please logout and login again.');
        $scope.UpdatingPasswordLoader = false;
       // $scope.showOTPscreen = false;
        $scope.passwordSuccess = true;
        
    }

    function updatePasswordFailed(response) {

        notificationService.displayError('Updating password failed. Try again.');
    }

    function close() {
        $scope.showOTPscreen = false;
        $scope.hideNextButton = false;
        $scope.showOTPerror = false;
        $scope.randomNumber = '';
   //     $scope.otpEntered = '';
        $scope.pw1 = '';
        $scope.pw2 = ''; 
        $scope.counter = 20;
    }

    $scope.userData.displayUserInfo();
   
   // smsService.checkBalance();
  
});

app.factory('membershipService', function (apiService, notificationService, $http, $base64, $cookieStore, $rootScope) {

    var service = {
        login: login,
        register: register,
        saveCredentials: saveCredentials,
        removeCredentials: removeCredentials,
        isUserLoggedIn: isUserLoggedIn


    }

    function login(user, completed) {
        apiService.post('/api/account/authenticate', user,
        completed,
        loginFailed);
    }

    function register(user, completed) {
        apiService.post('/api/account/register', user,
        completed,
        registrationFailed);
    }

    function saveCredentials(user) {
        var membershipData = $base64.encode(user.username + ':' + user.password);

        $rootScope.repository = {
            loggedUser: {
                username: user.username,
                role: user.role,
                mobile: user.mobile,
                authdata: membershipData
            }
        };

        $http.defaults.headers.common['Authorization'] = 'Basic ' + membershipData;
        $cookieStore.put('repository', $rootScope.repository);
    }

    function removeCredentials() {
        $rootScope.repository = {};
        $cookieStore.remove('repository');
        $http.defaults.headers.common.Authorization = '';
    };

    function loginFailed(response) {
        notificationService.displayError(response.data);
    }

    function registrationFailed(response) {

        notificationService.displayError('Registration failed. Try again.');
    }

   

    function isUserLoggedIn() {
        return $rootScope.repository.loggedUser != null;
    }

  
    return service;

});

app.factory('apiService', function ($http, $location, notificationService, $rootScope) {

    var service = {
        get: get,
        post: post
    };

    function get(url, config, success, failure) {
        return $http.get(url, config)
                .then(function (result) {
                    success(result);
                }, function (error) {
                    if (error.status == '401') {
                        notificationService.displayError('Authentication required.');
                        $rootScope.previousState = $location.path();
                        $location.path('/login');
                    }
                    else if (failure != null) {
                        failure(error);
                    }
                });
    }

    function post(url, data, success, failure) {
        return $http.post(url, data)
                .then(function (result) {
                    success(result);
                }, function (error) {
                    if (error.status == '401') {
                        notificationService.displayError('Authentication required.');
                        $rootScope.previousState = $location.path();
                        $location.path('/login');
                    }
                    else if (failure != null) {
                        failure(error);
                    }
                });
    }

    return service;

});

app.factory('notificationService', function () {

    toastr.options = {
        "debug": false,
        "positionClass": "toast-top-right",
        "onclick": null,
        "fadeIn": 300,
        "fadeOut": 1000,
        "timeOut": 5000,
        "extendedTimeOut": 1000
    };

    var service = {
        displaySuccess: displaySuccess,
        displayError: displayError,
        displayWarning: displayWarning,
        displayInfo: displayInfo
    };

    return service;

    function displaySuccess(message) {
        toastr.success(message);
    }

    function displayError(error) {
        if (Array.isArray(error)) {
            error.forEach(function (err) {
                toastr.error(err);
            });
        } else {
            toastr.error(error);
        }
    }

    function displayWarning(message) {
        toastr.warning(message);
    }

    function displayInfo(message) {
        toastr.info(message);
    }

});

app.factory('smsService', function (apiService, notificationService, $rootScope) {

    var service = {
        send: send,
        checkBalance: checkBalance

    }

    function send(model, completed) {
        apiService.post('/api/sms/send', model,
        completed,
        sendFailed);
    }

    function sendFailed(response) {
        notificationService.displayError(response.data);
    }

    function checkBalance() {

        apiService.get('/api/sms/balance', null,
        checkBalanceSucceded,
        checkBalanceFailed);
    }

    function checkBalanceSucceded(response) {

        $rootScope.balance = response.data;        
    }

    function checkBalanceFailed(response) {
        notificationService.displayError(response.data);
    }

    return service;

});

app.factory('globalService', function (apiService, notificationService, $rootScope) {

    var service = {
         
    }
    

    return service;

});

app.directive('leftMenu', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.on('click', '.left-menu-link', function () {

                if (!$(this).closest('.left-menu-list-submenu').length) {
                    $('.left-menu-list-opened > a + ul').slideUp(200, function () {
                        $('.left-menu-list-opened').removeClass('left-menu-list-opened');
                    });
                }

            });
        }
    };
});

app.directive('dateTimePicker', function () {
    return {
        restrict: "A",
        require: "ngModel",
        link: function (scope, element, attrs, ngModelCtrl) {
            var parent = $(element).parent();
            var dtp = parent.datetimepicker({
                format: "LL",
                showTodayButton: true
            });
            dtp.on("dp.change", function (e) {
                ngModelCtrl.$setViewValue(moment(e.date).format("LL"));
                scope.$apply();
            });
        }
    };
});


    app.directive('pwCheck', [function () {
        return {
            require: 'ngModel',
            link: function (scope, elem, attrs, ctrl) {
                var firstPassword = '#' + attrs.pwCheck;
                elem.add(firstPassword).on('keyup', function () {
                    scope.$apply(function () {
                        // console.info(elem.val() === $(firstPassword).val());
                        ctrl.$setValidity('pwmatch', elem.val() === $(firstPassword).val());
                    });
                });
            }
        }
    }]);

//var underscore = angular.module('underscore', []);
//underscore.factory('_', function () {
//    return window._; //Underscore should be loaded on the page
//});

function isAuthenticated(membershipService, $rootScope, $location) {
    if (!membershipService.isUserLoggedIn()) {
        $rootScope.previousState = $location.path();
        $location.path('/login');
    }
}