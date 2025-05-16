/**
 * Operator PAGE CONTROLLER
 */

app.controller('DashboardCtrl',
   
        function ($scope, $interval, apiService) {

            function getLineChartData() {

              //  NProgress.start();
                //  $scope.enquirys = $rootScope.enquirys;
                //  console.log('$scope.enquirys', $scope.enquirys);
                apiService.get('http://server.b-net.co.in/api/complaint/chart', null,
               getLineChartDataSucceded,
               getLineChartDataFailed);
            }

            function getLineChartDataSucceded(response) {


                $scope.lineData = response.data;
                console.log('$scope.lineData', $scope.lineData);
             //   NProgress.done();

            }

            function getLineChartDataFailed(response) {

               // notificationService.displayError('Loading enquiries failed : ' + response.data.Message);
            }


            // line chart
            $scope.lineData2 = {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                series: [
                   [12, 9, 7, 8, 5],
                   [2, 1, 3.5, 7, 3],
                   [1, 3, 4, 5, 6]
                ]
            };

            console.log('$scope.lineData2', $scope.lineData2);


            $scope.lineOptions = {
                width : '98%',
                fullWidth: !0,
                chartPadding: {
                    right: 40
                },

                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value;
                    },
                    showLabel: true, showGrid: true
                },
                axisY: {
                    labelInterpolationFnc: function (value) {
                        return value;
                    },

                },
                plugins: [
                  Chartist.plugins.tooltip()
                ]
            };


            this.events = {
                draw: function(obj) {
                    // do stuff
                }
            };

            // bar chart
            this.barData = {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                series: [
                    [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
                    [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
                ]
            };

            this.barOptions = {
                seriesBarDistance: 15
            };

            this.barResponsiveOptions = [
                ['screen and (min-width: 641px) and (max-width: 1024px)', {
                    seriesBarDistance: 10,
                    axisX: {
                        labelInterpolationFnc: function(value) {
                            return value;
                        }
                    }
                }],
                ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function(value) {
                            return value[0];
                        }
                    }
                }]
            ];

            function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            }

         

            // pie chart
            this.pieData = {
                series: [20, 10, 30, 40]
            };

            // donut chart
            this.donutOptions = {
                donut: true
            };

            function pushLimit(arr, elem, limit) {
                arr.push(elem);
                if (arr.length > limit) {
                    arr.splice(0, 1);
                }
            }

            // Use $interval to update bar chart data
            var barUpdatePromise = $interval(function() {
                var time = new Date();

                pushLimit(this.barData.labels, [
                    time.getHours(),
                    time.getMinutes(),
                    time.getSeconds()
                ].join(':'), 12);

                this.barData.series.forEach(function(series) {
                    pushLimit(series, getRandomInt(0, 10), 12);
                });
            }.bind(this), 1000);

            // Cancel interval once scope is destroyed
            $scope.$on('$destroy', function() {
                $interval.cancel(barUpdatePromise);
            });

            getLineChartData();
        });
