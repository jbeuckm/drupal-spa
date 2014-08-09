angular.module('drupalSpa').controller('UserController', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location){

    console.log($scope);
    $scope.logout = function() {


        drupal.logout(
            function(u) {
                console.log(u);
                $rootScope.user = null;
                $location.path('/login');
            },
            function(err) {
                console.log(err);
            }
        );

    };

}]);
