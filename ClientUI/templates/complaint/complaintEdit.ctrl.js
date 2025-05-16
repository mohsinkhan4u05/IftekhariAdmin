/**
 * Complaint PAGE CONTROLLER
 */

app.controller('ComplaintEditCtrl', function ($scope, $location, $rootScope,$routeParams, apiService, notificationService) {


    $scope.UpdateComplaint = updateComplaint;
    $scope.status = ["Active", "DeActive"];

    function getComplaintDetail() {
        NProgress.start();
        apiService.get('http://server.b-net.co.in/api/complaint/details/' + $routeParams.id, null,
	   getComplaintSucceded,
	   getComplaintFailed);
    }

    function getComplaintSucceded(response) {
        NProgress.done();
        console.log(response);
        $scope.editedComplaint = response.data;
    }

    function getComplaintFailed(response) {
        console.log(response);
        notificationService.displayError('Unable to load Complaint details : ' + response.data.Message);
    }


    function updateComplaint() {
        console.log('edited', $scope.editedComplaint);
        //    $scope.Complaint = {};
        //    $scope.Complaint = { Email: "az@gmail.com", Mobile: "96846584", RegDate: "August 2, 2017" };
        NProgress.start();
        apiService.post('http://server.b-net.co.in/api/complaint/update', $scope.editedComplaint,
	   updateComplaintSucceded,
	   updateComplaintFailed);
    }

    function updateComplaintSucceded(response) {
        NProgress.done();
        console.log(response);
        notificationService.displaySuccess('Complaint updated successfully : ' + $scope.editedComplaint.Name);
    }

    function updateComplaintFailed(response) {
        console.log(response);
        notificationService.displayError('Unable to update Complaint : ' + response.data.Message);
    }

    getComplaintDetail();

});