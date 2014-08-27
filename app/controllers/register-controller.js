angular.module('drupalSpa').controller('RegisterController', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location){

    $scope.login = function() {

        var user = {
            name: $scope.username,
            mail: $scope.email,
            pass: $scope.password
        };

        $rootScope.drupal.createAccount(user,
            function(u) {
                $rootScope.user = u;
                $location.path('/login');
                $scope.$apply();
            },
            function(err) {
                console.log(err);
                err = JSON.parse(err);
                $scope.errorMessage = err['form_errors'];
                $scope.$apply();
            }
        );


    };

}]);
