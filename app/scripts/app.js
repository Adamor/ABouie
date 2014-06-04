'use strict';

  angular.module('abouieApp', ['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          // controller('MainCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    })
    .directive('mainLinks', function(){
      // Runs during compile
      return {
        restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
        templateUrl: 'views/main-links.html',
      };
    })
    ;
