<!-- GET request to API -->
var GET_pages_init = function() {
  var url = "http://api.football-data.org/v1/soccerseasons/399/teams";
  $.ajaxSetup({ 
cache: false,
headers: { 'X-Auth-Token': 'f7f2051260a8417b8eae9fb4de617af3' }
 });
  $.getJSON( url, function() { } )
	.done(function( data ) {
	  player = data;
	  window.location.hash = '#/list_pages'; //redirect to the view that shows the list of players
	})
	.fail(function() {
	  console.log( "error" );
	})
	.always(function() {
	  console.log( "complete" );
	});							
}











