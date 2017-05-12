$(document).ready(function() {
  alert("The Bo$$man welcomes you");
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  $("#temp-up").click(function() {
    thermostat.up();
    $("#temperature").text(thermostat.temperature);
  });

  $("#temp-down").click(function() {
    thermostat.down();
    $("#temperature").text(thermostat.temperature);
  });

  $("#temp-reset").click(function() {
    thermostat.resetTemp();
    $("#temperature").text(thermostat.temperature);
  });

  $("#powersave-on").click(function( ) {
      thermostat.powerSavingOn();
      $("#power-saving-status").text("on");
      $("#temperature").text(thermostat.temperature);
    });

  $("#powersave-off").click(function( ) {
      thermostat.powerSavingOff();
      $("#power-saving-status").text("off");
    });

});
