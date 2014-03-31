'use strict';


// Declare app level module which depends on filters, and services
angular.module('lillyBoxes', [
  'ngRoute',
  'lillyBoxes.filters',
  'lillyBoxes.services',
  'lillyBoxes.controllers',
  'lillyBoxes.directives'
])
.config(['$routeProvider', function($routeProvider) {
  // $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'InstaController'});
  // $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  // $routeProvider.otherwise({redirectTo: '/view1'});
}]);
