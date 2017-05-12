$(document).ready(function() {
  alert("The Bo$$man welcomes you");
  var thermostat = new Thermostat();

  function updateTemperature() {
    $("#temperature").text(thermostat.temperature);
    $("#temperature").attr('class', thermostat.energyUsage());
  }

  $("#temp-up").click(function() {
    thermostat.up();
    updateTemperature();
  });

  $("#temp-down").click(function() {
    thermostat.down();
    updateTemperature();
  });

  $("#temp-reset").click(function() {
    thermostat.resetTemp();
    updateTemperature();
  });

  $("#powersave-on").click(function( ) {
      thermostat.powerSavingOn();
      $("#power-saving-status").text("on");
      updateTemperature();
    });

  $("#powersave-off").click(function( ) {
      thermostat.powerSavingOff();
      $("#power-saving-status").text("off");
    });


});
