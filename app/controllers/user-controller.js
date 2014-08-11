angular.module('drupalSpa').controller('UserController', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location){

    if (!$scope.user) {
        $location.path('/login');
        $scope.$apply();
    }

}]);
