angular.module('drupalSpa').controller('MainController', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location){

    $rootScope.user = null;

    drupal.systemConnect(
        function(result) {
            console.log(result);

            if (result.user.uid != 0) {
                $rootScope.user = result.user;
                $location.path('/user');
            }
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
                $scope.$apply();
                $location.path('/login');
            },
            function(err) {
                console.log(err);
            }
        );

    };

}]);
