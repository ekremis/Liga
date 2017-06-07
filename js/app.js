var LigaApp = angular.module('LigaApp', ['ngRoute','LigaControllers']);

// routing of MVC Angular Application
LigaApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      when('/list_pages', {
        templateUrl: 'partials/list_players.html',
        controller: 'ListCtrl' // controller for showing the player's list
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);


