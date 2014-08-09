var app = angular.module('drupalSpa', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/login', {
                templateUrl: 'app/templates/login.html',
                controller: 'LoginController'
            }).
            when('/user', {
                templateUrl: 'app/templates/user.html',
                controller: 'UserController'
            }).
            otherwise({
                redirectTo: '/login'
            });
    }])

    .run(function(){

        drupal.setRestPath('http://beigerecords.com/joe-test/', 'js_api');

    });

