// 'use strict'

describe("A Thermostat", function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });


  it('has a default temperature', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('can be turned up', function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it('can be turned down', function() {
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it('has a minimum temperature of 10', function() {
    for (var i = 0; i < 11; i++){
    thermostat.down();
  }
    expect(thermostat.temperature).toEqual(10);
  });

  it('finds a maximum temperature of 32', function() {
    for (var i = 20; i < 33; i++) {
      thermostat.up();
    }
    expect(thermostat.temperature).toEqual(32);
  });

  it('has a power-saving button', function() {
    expect(thermostat.powerSaving).toBe(true);
  });

  it('can turn off powersaving mode', function() {
    thermostat.powerSavingOff();
    expect(thermostat.powerSaving).toBe(false);
  });

});
