'use strict';

/* Controllers */

angular.module('lillyBoxes.controllers', ['lillyBoxes.services', 'lillyBoxes.directives'])
	.controller('InstaController', ['$scope', 'instaGet', function($scope, instaGet) {
		$scope.boxes = [];
		$scope.instaPromise = instaGet.getGrams();
		$scope.instaPromise.then(function(results) {
			results.forEach(function(result) {
				result.type = 'instagram';
				$scope.boxes.push(result);
			});
		});
	}])	



