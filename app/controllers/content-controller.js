angular.module('drupalSpa').controller('ContentController', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location){

    $rootScope.drupal.getResource('node', {},
        function(results){
            $rootScope.content = results;
            console.log(results);
        },
        function(err){

        }
    );

}]);
