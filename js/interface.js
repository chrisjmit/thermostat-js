$(document).ready(function() {
  alert("The Bo$$man welcomes you");
  //
  // $( "powersave-off" ).click(function( ) {
  //       alert( "Powersaving is now off!" );
  //   });
  //
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);
});
