$(document).ready(function() {
  alert("The Bo$$man welcomes you");
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);
});
