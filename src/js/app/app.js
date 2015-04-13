
var app = angular.module('vinyl', ['ngRoute','ngResource'])


// TODO implement it

.config(function($routeProvider, $locationProvider) {
 
  $routeProvider
  	.when('/', {
  	  controller: 'MainController',
  	  templateUrl: '/js/app/modules/main/main.html'
  	})
    // start searching for an artist
    .when('/app/search',{
      controller: 'ArtistController',
      templateUrl: '/js/app/modules/app/search/artist.html'
    });


  $locationProvider.html5Mode('true');

}); // end config
