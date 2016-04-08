'use strict';

var frontendApp = angular.module('frontendApp', ['ngRoute']);


frontendApp.config(['$routeProvider','$locationProvider', '$httpProvider', '$interpolateProvider',
    function($routeProvider, $locationProvider, $httpProvider, $interpolateProvider) {

        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');

        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

        $locationProvider.html5Mode(false);

        $routeProvider.
        when('/', {
            templateUrl: '/bundles/nevilfrontend/js/views/index.html'
        }).
        when('/lobby', {
            templateUrl: '/bundles/nevilfrontend/js/views/lobby.html'
        });
    }]
);


frontendApp.run(function($rootScope){});