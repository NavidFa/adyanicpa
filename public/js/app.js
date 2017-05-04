'use strict';
var app = angular.module("adyanicpa", ['ngRoute','ngAnimate'])
app.config(function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'homepage'
        })
        .when('/About/', {
            templateUrl: 'partials/about.html',
            controller: 'homepage'
        })
        .when('/Contact/', {
            templateUrl: 'partials/contact.html',
            controller: 'homepage'
        })
        .when('/Services/', {
            templateUrl: 'partials/services.html',
            controller: 'homepage'
        })

})
