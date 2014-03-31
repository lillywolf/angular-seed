'use strict';

/* Directives */


angular.module('lillyBoxes.directives', ['lillyBoxes.services'])
   .directive('appVersion', ['version', function(version) {
		return function(scope, element, attrs) {
      		element.text(version);
    	};
  	}])
	.directive('initPackery', ['$rootScope', function($rootScope) {
    	return {
        	restrict: 'A',
        	link: function(scope, element, attrs) {
				if ($rootScope.packery === undefined || $rootScope.packery === null) {
	                console.log('making packery!');
	                $rootScope.packery = new Packery(element[0], {
						itemSelector: '.item', 
						gutter: 10, 
						columnWidth: 220, 
						rowHeight: 250,
						isOriginLeft: false});
	                $rootScope.packery.bindResize();
	            }
        	}
    	};
  	}])
	.directive('lillyPackery', ['$rootScope', function($rootScope) {
    	return {
        	restrict: 'A',
        	link: function(scope, element, attrs) {
				// Wait until boxes have been assigned, otherwise element class won't be assigned yet and Packery can't interpret it
				attrs.$observe('class', function(klass) {
		            $rootScope.packery.appended(element[0]);	
				});
        	}
    	};
  	}])
	.directive('clipRect', ['uiHelper', function(uiHelper) {
		return function(scope, element, attrs) {
			uiHelper.watchClipRect(element[0].id);
		};
	}])
	.directive('drawRightPatterns', ['uiHelper', function(uiHelper) {
		return function(scope, element, attrs) {
			uiHelper.drawSkinnyDiagonals(element[0].id);
		};
	}])
	.directive('drawLeftPatterns', ['uiHelper', function(uiHelper) {
		return function(scope, element, attrs) {
			uiHelper.drawFatDiagonals(element[0].id);
		};
	}])

