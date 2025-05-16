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
    'angular-chartist'
])
.config(['$locationProvider', '$routeProvider',
    function($locationProvider, $routeProvider) {


        /////////////////////////////////////////////////////////////
        // Cuustom
        $routeProvider.when('/dashboard', {
            templateUrl: 'templates/dashboard/dashboard1.html',
            controller: 'DashboardCtrl',
            resolve: { isAuthenticated: isAuthenticated }
        });

        $routeProvider.when('/customer/add', {
            templateUrl: 'templates/customer/add.html',
            controller: 'CustomerAddCtrl',
            resolve: { isAuthenticated: isAuthenticated }
        });
        $routeProvider.when('/customer/list', {
            templateUrl: 'templates/customer/list.html',
            controller: 'CustomerListCtrl',
            resolve: { isAuthenticated: isAuthenticated }
        });
        $routeProvider.when('/customer/edit/:id', {
            templateUrl: 'templates/customer/edit.html',
            controller: 'CustomerEditCtrl',
            resolve: { isAuthenticated: isAuthenticated }
        });

        $routeProvider.when('/complaint/add', {
            templateUrl: 'templates/complaint/add.html',
            controller: 'ComplaintAddCtrl',
            resolve: { isAuthenticated: isAuthenticated }
        });
        $routeProvider.when('/complaint/list', {
            templateUrl: 'templates/complaint/list.html',
            controller: 'ComplaintListCtrl',
            resolve: { isAuthenticated: isAuthenticated }
        });
        $routeProvider.when('/complaint/edit', {
            templateUrl: 'templates/complaint/edit.html',
            controller: 'ComplaintEditCtrl',
            resolve: { isAuthenticated: isAuthenticated }
        });

        $routeProvider.when('/complaint/detail/:id', {
            templateUrl: 'templates/complaint/details.html',
            controller: 'ComplaintDetailCtrl',
            resolve: { isAuthenticated: isAuthenticated }
        });
       
        $routeProvider.when('/operator/add', {
            templateUrl: 'templates/operator/add.html',
            controller: 'OperatorAddCtrl',
            resolve: { isAuthenticated: isAuthenticated }
        });
        $routeProvider.when('/operator/list', {
            templateUrl: 'templates/operator/list.html',
            controller: 'OperatorListCtrl',
            resolve: { isAuthenticated: isAuthenticated }
        });
        $routeProvider.when('/operator/edit/:id', {
            templateUrl: 'templates/operator/edit.html',
            controller: 'OperatorEditCtrl',
            resolve: { isAuthenticated: isAuthenticated }
        });

        $routeProvider.when('/enquiry/add', {
            templateUrl: 'templates/enquiry/add.html',
            controller: 'EnquiryAddCtrl',
            resolve: { isAuthenticated: isAuthenticated }
        });

        $routeProvider.when('/enquiry/list', {
            templateUrl: 'templates/enquiry/list.html',
            controller: 'EnquiryListCtrl',
            resolve: { isAuthenticated: isAuthenticated }
        });

        $routeProvider.when('/enquiry/detail/:id', {
            templateUrl: 'templates/enquiry/details.html',
            controller: 'EnquiryDetailCtrl',
            resolve: { isAuthenticated: isAuthenticated }
        });

        $routeProvider.when('/login', {
            templateUrl: 'templates/account/login-omega.html',
            controller: 'loginPageCtrl'
        });



        /////////////////////////////////////////////////////////////
        // SYSTEM
        $routeProvider.when('/', { redirectTo: '/dashboard' });
        $routeProvider.otherwise({redirectTo: 'pages/page-404'});

        /////////////////////////////////////////////////////////////
        // Documentation
        $routeProvider.when('/documentation/index', {
            templateUrl: 'documentation/index.html'
        });

        /////////////////////////////////////////////////////////////
        // Dashboards
        $routeProvider.when('/dashboards/alpha', {
            templateUrl: 'templates/dashboard/dashboard1.html',
            controller: 'DashboardCtrl',
            resolve: { isAuthenticated: isAuthenticated }
        });

        $routeProvider.when('/dashboards/beta', {
            templateUrl: 'dashboards/beta.html'
        });

        /////////////////////////////////////////////////////////////
        // Apps
        $routeProvider.when('/apps/profile', {
            templateUrl: 'apps/profile.html'
        });

        $routeProvider.when('/apps/messaging', {
            templateUrl: 'apps/messaging.html'
        });

        $routeProvider.when('/apps/mail', {
            templateUrl: 'apps/mail.html'
        });

        $routeProvider.when('/apps/calendar', {
            templateUrl: 'apps/calendar.html'
        });

        $routeProvider.when('/apps/gallery', {
            templateUrl: 'apps/gallery.html'
        });

        /////////////////////////////////////////////////////////////
        // Ecommerce
        $routeProvider.when('/ecommerce/cart-checkout', {
            templateUrl: 'ecommerce/cart-checkout.html'
        });

        $routeProvider.when('/ecommerce/dashboard', {
            templateUrl: 'ecommerce/dashboard.html'
        });

        $routeProvider.when('/ecommerce/orders', {
            templateUrl: 'ecommerce/orders.html'
        });

        $routeProvider.when('/ecommerce/product-details', {
            templateUrl: 'ecommerce/product-details.html'
        });

        $routeProvider.when('/ecommerce/product-edit', {
            templateUrl: 'ecommerce/product-edit.html'
        });

        $routeProvider.when('/ecommerce/products-list', {
            templateUrl: 'ecommerce/products-list.html'
        });

        $routeProvider.when('/ecommerce/products-catalog', {
            templateUrl: 'ecommerce/products-catalog.html'
        });

        /////////////////////////////////////////////////////////////
        // Layout
        $routeProvider.when('/layout/grid', {
            templateUrl: 'layout/grid.html'
        });

        $routeProvider.when('/layout/panels', {
            templateUrl: 'layout/panels.html'
        });

        $routeProvider.when('/layout/sidebars', {
            templateUrl: 'layout/sidebars.html'
        });

        $routeProvider.when('/layout/utilities', {
            templateUrl: 'layout/utilities.html'
        });

        $routeProvider.when('/layout/typography', {
            templateUrl: 'layout/typography.html'
        });

        /////////////////////////////////////////////////////////////
        // Icons
        $routeProvider.when('/icons/fontawesome', {
            templateUrl: 'icons/fontawesome.html'
        });

        $routeProvider.when('/icons/icomoon-ultimate', {
            templateUrl: 'icons/icomoon-ultimate.html'
        });

        /////////////////////////////////////////////////////////////
        // Forms
        $routeProvider.when('/forms/autocomplete', {
            templateUrl: 'forms/autocomplete.html'
        });

        $routeProvider.when('/forms/basic-form-elements', {
            templateUrl: 'forms/basic-form-elements.html'
        });

        $routeProvider.when('/forms/buttons', {
            templateUrl: 'forms/buttons.html'
        });

        $routeProvider.when('/forms/checkboxes-radio', {
            templateUrl: 'forms/checkboxes-radio.html'
        });

        $routeProvider.when('/forms/dropdowns', {
            templateUrl: 'forms/dropdowns.html'
        });

        $routeProvider.when('/forms/extras', {
            templateUrl: 'forms/extras.html'
        });

        $routeProvider.when('/forms/form-wizard', {
            templateUrl: 'forms/form-wizard.html'
        });

        $routeProvider.when('/forms/form-validation', {
            templateUrl: 'forms/form-validation.html'
        });

        $routeProvider.when('/forms/input-mask', {
            templateUrl: 'forms/input-mask.html'
        });

        $routeProvider.when('/forms/file-uploads', {
            templateUrl: 'forms/file-uploads.html'
        });

        $routeProvider.when('/forms/selectboxes', {
            templateUrl: 'forms/selectboxes.html'
        });


        /////////////////////////////////////////////////////////////
        // Components
        $routeProvider.when('/components/badges-labels', {
            templateUrl: 'components/badges-labels.html'
        });

        $routeProvider.when('/components/calendar', {
            templateUrl: 'components/calendar.html'
        });

        $routeProvider.when('/components/carousel', {
            templateUrl: 'components/carousel.html'
        });

        $routeProvider.when('/components/collapse', {
            templateUrl: 'components/collapse.html'
        });

        $routeProvider.when('/components/date-picker', {
            templateUrl: 'components/date-picker.html'
        });

        $routeProvider.when('/components/media-players', {
            templateUrl: 'components/media-players.html'
        });

        $routeProvider.when('/components/modal', {
            templateUrl: 'components/modal.html'
        });

        $routeProvider.when('/components/nestable', {
            templateUrl: 'components/nestable.html'
        });

        $routeProvider.when('/components/notifications-alerts', {
            templateUrl: 'components/notifications-alerts.html'
        });

        $routeProvider.when('/components/pagination', {
            templateUrl: 'components/pagination.html'
        });

        $routeProvider.when('/components/loading-progress', {
            templateUrl: 'components/loading-progress.html'
        });

        $routeProvider.when('/components/progress-bars', {
            templateUrl: 'components/progress-bars.html'
        });

        $routeProvider.when('/components/slider', {
            templateUrl: 'components/slider.html'
        });

        $routeProvider.when('/components/steps', {
            templateUrl: 'components/steps.html'
        });

        $routeProvider.when('/components/breadcrumbs', {
            templateUrl: 'components/breadcrumbs.html'
        });

        $routeProvider.when('/components/tabs', {
            templateUrl: 'components/tabs.html'
        });

        $routeProvider.when('/components/text-editor', {
            templateUrl: 'components/text-editor.html'
        });

        $routeProvider.when('/components/mail-templates', {
            templateUrl: 'components/mail-templates.html'
        });

        $routeProvider.when('/components/tooltips-popovers', {
            templateUrl: 'components/tooltips-popovers.html'
        });

        /////////////////////////////////////////////////////////////
        // Tables
        $routeProvider.when('/tables/basic-tables', {
            templateUrl: 'tables/basic-tables.html'
        });

        $routeProvider.when('/tables/datatables', {
            templateUrl: 'tables/datatables.html'
        });

        $routeProvider.when('/tables/editable-tables', {
            templateUrl: 'tables/editable-tables.html'
        });

        /////////////////////////////////////////////////////////////
        // Charts
        $routeProvider.when('/charts/c3', {
            templateUrl: 'charts/c3.html'
        });

        $routeProvider.when('/charts/chartjs', {
            templateUrl: 'charts/chartjs.html'
        });

        $routeProvider.when('/charts/d3', {
            templateUrl: 'charts/d3.html'
        });

        $routeProvider.when('/charts/chartistjs', {
            templateUrl: 'charts/chartistjs.html'
        });

        $routeProvider.when('/charts/peity', {
            templateUrl: 'charts/peity.html'
        });


        /////////////////////////////////////////////////////////////
        // Pages
        $routeProvider.when('/pages/invoice', {
            templateUrl: 'pages/invoice.html'
        });

        $routeProvider.when('/pages/lockscreen', {
            templateUrl: 'pages/lockscreen.html',
            controller: 'lockscreenPageCtrl'
        });

        $routeProvider.when('/pages/login-alpha', {
            templateUrl: 'pages/login-alpha.html',
            controller: 'loginPageCtrl'
        });

        $routeProvider.when('/pages/login-beta', {
            templateUrl: 'pages/login-beta.html',
            controller: 'loginPageCtrl'
        });

        $routeProvider.when('/pages/login-omega', {
            templateUrl: 'pages/login-omega.html',
            controller: 'loginPageCtrl'
        });

        $routeProvider.when('/pages/page-404', {
            templateUrl: 'pages/page-404.html'
        });

        $routeProvider.when('/pages/page-500', {
            templateUrl: 'pages/page-500.html'
        });

        $routeProvider.when('/pages/pricing-tables', {
            templateUrl: 'pages/pricing-tables.html'
        });

        $routeProvider.when('/pages/register', {
            templateUrl: 'pages/register.html',
            controller: 'registerPageCtrl'
        });

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

//app.controller('MainCtrl', function($location, $scope, $rootScope, $timeout) {

//});

app.controller('RootCtrl', function ($scope, $location, membershipService, $rootScope, apiService, globalService, smsService) {


    $scope.userData = {};
    $scope.userData.displayUserInfo = displayUserInfo;
    $scope.logout = logout;

    NProgress.configure({
        minimum: 0.2,
        trickleRate: 0.1,
        trickleSpeed: 200
    });

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

        console.log(' $scope.userData.isUserLoggedIn', $scope.userData.isUserLoggedIn);

        if ($scope.userData.isUserLoggedIn) {
            $scope.username = $rootScope.repository.loggedUser.username;
        }
    }

    function logout() {       
        membershipService.removeCredentials();
        $location.path('/login');
        $scope.userData.displayUserInfo();
    }
     
    $scope.userData.displayUserInfo();
    globalService.getGlobalData();
    smsService.checkBalance();
    globalService.getCustomers();
    globalService.getComplaints();
});

app.factory('membershipService', function (apiService, notificationService, $http,$base64, $cookieStore, $rootScope) {

    var service = {
        login: login,
        register: register,
        saveCredentials: saveCredentials,
        removeCredentials: removeCredentials,
        isUserLoggedIn: isUserLoggedIn
    }

    function login(user, completed) {
        apiService.post('http://server.b-net.co.in/api/account/authenticate', user,
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
        apiService.post('http://server.b-net.co.in/api/sms/send', model,
        completed,
        sendFailed);
    }

    function sendFailed(response) {
        notificationService.displayError(response.data);
    }

    function checkBalance() {

        apiService.get('http://server.b-net.co.in/api/sms/balance', null,
        checkBalanceSucceded,
        checkBalanceFailed);
    }

    function checkBalanceSucceded(response) {

        $rootScope.balance = response.data;
        console.log('$scope.balance1', $rootScope.balance);	   
    }

    function checkBalanceFailed(response) {
        notificationService.displayError(response.data);
    }
  
    return service;

});

app.factory('globalService', function (apiService, notificationService, $rootScope) {

    var service = {
        getGlobalData: getGlobalData,
        getCustomers: getCustomers,
        getComplaints: getComplaints

    }

    function getGlobalData() {
        apiService.get('http://server.b-net.co.in/api/complaint/global', null,
        getGlobalSucceded,
        getGlobalFailed);
    }
   
    function getGlobalSucceded(response) {

        $rootScope.global = response.data;
        console.log('$scope.global1', $rootScope.global);
    }

    function getGlobalFailed(response) {
        notificationService.displayError(response.data);
    }

    function getCustomers() {

        apiService.get('http://server.b-net.co.in/api/customers/list', null,
	   getCustomersSucceded,
	   getCustomersFailed);
    }

    function getCustomersSucceded(response) {

        $rootScope.customers = response.data;
        console.log('$rootScope.customers', $rootScope.customers);
    }

    function getCustomersFailed(response) {

        notificationService.displayError('Loading customers failed : ' + response.data.Message);
    }

    function getComplaints() {

        apiService.get('http://server.b-net.co.in/api/complaint/list', null,
	   getComplaintsSucceded,
	   getComplaintsFailed);
    }

    function getComplaintsSucceded(response) {

        $rootScope.complaints = response.data;
        console.log('$rootScope.complaints', $rootScope.complaints);
    }

    function getComplaintsFailed(response) {

        notificationService.displayError('Loading complaints failed : ' + response.data.Message);
    }

    return service;

});

app.directive('leftMenu', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.on('click', '.left-menu-link', function() {

                if (!$(this).closest('.left-menu-list-submenu').length) {
                    $('.left-menu-list-opened > a + ul').slideUp(200, function(){
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


function isAuthenticated(membershipService, $rootScope, $location) {
    if (!membershipService.isUserLoggedIn()) {
        $rootScope.previousState = $location.path();
        $location.path('/login');
    }
}