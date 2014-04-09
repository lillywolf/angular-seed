'use strict';

/* Services */

angular.module('lillyBoxes.services', [])
	.value('version', '0.1')
	.factory('instaGet', ['$q', '$rootScope', 'instaBoxer', function($q, $rootScope, instaBoxer) {
		var factory = {};	
		factory.getGrams = function() {
			var deferred = $q.defer(); 
			instaBoxer.initInstagrams(function(results) {
				$rootScope.$apply(function() {
					deferred.resolve(results);
				});			
			});	
			return deferred.promise;		
		};
		return factory;
	}])
	.service('uiHelper', UIHelper)
	.service('instaBoxer', InstaBoxer)
