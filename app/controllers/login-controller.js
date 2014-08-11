angular.module('drupalSpa').controller('LoginController', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location){

    $scope.login = function() {

        drupal.login($scope.username, $scope.password,
            function(u) {
                $rootScope.user = u;
                $location.path('/user');
                $scope.$apply();
            },
            function(err) {
                err = JSON.parse(err);
                $scope.errorMessage = err[0];
                $scope.$apply();
            }
        );


    };

}]);
