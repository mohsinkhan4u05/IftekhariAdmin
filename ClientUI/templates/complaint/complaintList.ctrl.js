/**
 * Complaint PAGE CONTROLLER
 */

app.controller('ComplaintListCtrl', function ($scope, $location, $rootScope,moment, apiService, notificationService, DTOptionsBuilder, DTColumnBuilder) {

	$scope.GetComplaints = getComplaints;
	
	$scope.Complaints = [];		

	function getComplaints() {
	 
	    NProgress.start();
	    $scope.complaints = $rootScope.complaints;
	    NProgress.done();
	}


	$scope.vm = {};

    $scope.vm.dtOptions = DTOptionsBuilder.newOptions()
        .withOption('responsive', true)
        .withOption('order', [])
        //.withOption('order', [6, 'desc'])
        .withOption('lengthMenu', [20, 50, 100, 150, 200]);


    getComplaints();
});

