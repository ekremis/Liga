/* CONTROLLERS */
var LigaControllers = angular.module('LigaControllers', []);

/* HOME_CONTROLLER */ 
LigaControllers.controller('HomeCtrl', function ($scope) {
													 document.getElementById("greeting").innerHTML = 'LIGA';
													 // GET_pages_init();
});

/* PLAYERS LIST CONTROLLER */ 
LigaControllers.controller('ListCtrl', function ($scope, $rootScope) {		

// Sorts results in table
$scope.sort = function(keyname){
    $scope.sortKey = keyname;   			 // set the sortKey to the param passed
    $scope.reverse = !$scope.reverse;        // if true make it false and vice versa
}


// Pass data from REST call to scope variables												 
$scope.players = player; 
$scope.clubName =  $scope.players.teams[0].name
$scope.clubSymbolUrl =  $scope.players.teams[0].crestUrl;

// Get last index of table rows in order to show the total number of players
$scope.getLastIndex = function (index){
  $scope.lastIndex = index + 1; //keeps the total number of rows in table
}

// Values for country filter dropdown menu
$scope.countries = ['Argentina', 'Brazil', 'Colombia', 'Costa Rica', 'Morocco', 'Poland', 'Portugal', 'Romania', 'Spain', 'Turkey'];

// Reset all filter inputs
$scope.reset = function() { $scope.search=''; };

$scope.playersData = 
{"_links":{"self":{"href":"http://api.football-data.org/v1/teams/560/players"},"team":{"href":"http://api.football-data.org/v1/teams/560"}},"count":20,"players":[{"name":"Guilherme","position":"Defensive Midfield","jerseyNumber":20,"dateOfBirth":"1991-04-05","nationality":"Brazil","contractUntil":"2017-06-30","marketValue":"2,000,000 €"},{"name":"Rubén","position":"Keeper","jerseyNumber":25,"dateOfBirth":"1984-06-22","nationality":"Spain","contractUntil":"2018-06-30","marketValue":"1,000,000 €"},{"name":"Germán Lux","position":"Keeper","jerseyNumber":1,"dateOfBirth":"1982-07-06","nationality":"Argentina","contractUntil":"2017-06-30","marketValue":"1,000,000 €"},{"name":"Sidnei","position":"Centre Back","jerseyNumber":12,"dateOfBirth":"1989-08-23","nationality":"Brazil","contractUntil":"2018-06-30","marketValue":"6,000,000 €"},{"name":"Luisinho","position":"Left-Back","jerseyNumber":16,"dateOfBirth":"1985-05-05","nationality":"Portugal","contractUntil":"2018-06-30","marketValue":"1,800,000 €"},{"name":"Laure","position":"Right-Back","jerseyNumber":15,"dateOfBirth":"1985-03-22","nationality":"Spain","contractUntil":"2018-06-30","marketValue":"2,000,000 €"},{"name":"Álex Bergantiños","position":"Defensive Midfield","jerseyNumber":4,"dateOfBirth":"1985-06-07","nationality":"Spain","contractUntil":"2018-06-30","marketValue":"3,000,000 €"},{"name":"Raúl Albentosa","position":"Centre Back","jerseyNumber":6,"dateOfBirth":"1988-09-07","nationality":"Spain","contractUntil":"2020-06-30","marketValue":"3,500,000 €"},{"name":"Pedro Mosquera","position":"Central Midfield","jerseyNumber":5,"dateOfBirth":"1988-04-21","nationality":"Spain","contractUntil":"2021-06-30","marketValue":"6,000,000 €"},{"name":"Fayçal Fajr","position":"Attacking Midfield","jerseyNumber":19,"dateOfBirth":"1988-08-01","nationality":"Morocco","contractUntil":"2018-06-30","marketValue":"4,000,000 €"},{"name":"Alejandro Arribas","position":"Centre Back","jerseyNumber":14,"dateOfBirth":"1989-05-01","nationality":"Spain","contractUntil":"2018-06-30","marketValue":"3,000,000 €"},{"name":"Fernando Navarro","position":"Left-Back","jerseyNumber":3,"dateOfBirth":"1982-06-25","nationality":"Spain","contractUntil":"2017-06-30","marketValue":"1,000,000 €"},{"name":"Carles Gil","position":"Right Wing","jerseyNumber":11,"dateOfBirth":"1992-11-22","nationality":"Spain","contractUntil":"2017-06-30","marketValue":"3,500,000 €"},{"name":"Florin Andone","position":"Centre Forward","jerseyNumber":10,"dateOfBirth":"1993-04-11","nationality":"Romania","contractUntil":"2021-06-30","marketValue":"2,500,000 €"},{"name":"Celso Borges","position":"Central Midfield","jerseyNumber":22,"dateOfBirth":"1988-05-27","nationality":"Costa Rica","contractUntil":"2019-06-30","marketValue":"3,500,000 €"},{"name":"Przemyslaw Tyton","position":"Keeper","jerseyNumber":13,"dateOfBirth":"1987-01-04","nationality":"Poland","contractUntil":"2019-06-30","marketValue":"1,000,000 €"},{"name":"Emre Çolak","position":"Attacking Midfield","jerseyNumber":8,"dateOfBirth":"1991-05-20","nationality":"Turkey","contractUntil":"2019-06-30","marketValue":"3,250,000 €"},{"name":"Bruno Gama","position":"Left Wing","jerseyNumber":21,"dateOfBirth":"1987-11-15","nationality":"Portugal","contractUntil":"2018-06-30","marketValue":"2,000,000 €"},{"name":"Borja Valle","position":"Left Wing","jerseyNumber":17,"dateOfBirth":"1992-07-09","nationality":"Spain","contractUntil":"2019-06-30","marketValue":"800,000 €"},{"name":"Marlos Moreno","position":"Left Wing","jerseyNumber":9,"dateOfBirth":"1996-09-20","nationality":"Colombia","contractUntil":"2017-06-30","marketValue":"650,000 €"}]};

// $scope.urlGET =  $scope.players.teams[0]._links.players.href;
// url2 = $scope.urlGET;
// var GET_players_info = function() {
// $.ajaxSetup ({ 
// cache: false,
// headers: { 'X-Auth-Token': 'f7f2051260a8417b8eae9fb4de617af3' }
//  });
//   $.getJSON( url2, function() { } )
// 	.done(function( data ) {
// 	      playersData = data;
// 	      console.log(data)
// 	      console.log(data.players);
// 	      console.log(data.players[0]);
// 	      console.log(data.players[0].name);
// 	      console.log($scope.playersData);
// 	})
// 	.fail(function() {
// 	  console.log( "error" );
// 	})
// 	.always(function() {
// 	  console.log( "complete" );
// 	});							
// }
// GET_players_info();
// $scope.playersData2 = playersData;
// console.log($scope.playersData2);
});

