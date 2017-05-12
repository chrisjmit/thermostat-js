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

  $("#current-city").change(function() {
    var city = $("#current-city").val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=cedbfe32fd4e692f3f6a0229a2fb212a&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp);
    });
  });


});
