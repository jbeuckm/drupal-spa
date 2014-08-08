angular.module('drupalSpa').controller('LoginController', ['$scope', function($scope){

    $scope.login = function() {

        drupal.systemConnect(
            function(resp){
                console.log(resp);

                drupal.login($scope.username, $scope.password,
                    function(u) {
                        console.log(u);
                    },
                    function(err) {
                        console.log(err);
                    }
                );
            }, function(e){
                console.log(e);
            });

    };

}]);