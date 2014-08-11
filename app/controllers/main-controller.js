angular.module('drupalSpa').controller('MainController', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location){

    drupal.systemConnect(
        function(result) {
            console.log(result);
            $rootScope.user = result.user;
            $location.path('/user');
            $scope.$apply();
        },
        function(err){
            $location.path('/login');
            $scope.$apply();
        }
    );



    $scope.logout = function() {

        drupal.logout(
            function(u) {
                console.log(u);
                $rootScope.user = null;
                $location.path('/login');
                $scope.$apply();
            },
            function(err) {
                console.log(err);
            }
        );

    };

}]);
