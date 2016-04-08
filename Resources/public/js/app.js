'use strict';

var frontendApp = angular.module('frontendApp', ['ngRoute']);


frontendApp.config(['$routeProvider','$locationProvider', '$controllerProvider', '$interpolateProvider',
    function($routeProvider, $locationProvider, $controllerProvider, $interpolateProvider) {

        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');

        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });

        // $routeProvider.
        // when('/', {
        //     templateUrl: '/bundles/nevilfrontend/js/views/index.html'
        // }).
        // when('/lobby', {
        //     templateUrl: '/bundles/nevilfrontend/js/views/lobby.html'
        // });

    }]
);


// frontendApp.run(function(){});