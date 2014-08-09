angular.module('drupalSpa').controller('LoginController', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location){

    $scope.login = function() {

        drupal.systemConnect(
            function(resp){

                drupal.login($scope.username, $scope.password,
                    function(u) {
                        console.log(u);
                        $rootScope.user = u;
                        $location.path('/user');
                        $scope.$apply();
                    },
                    function(err) {
                        console.log(err);
                        console.log(typeof err);
                        err = JSON.parse(err);
                        console.log(err[0]);
                        $scope.errorMessage = err[0];
                        $scope.$apply();
                    }
                );

            }, function(e){
                console.log(e);
            });

    };

}]);
