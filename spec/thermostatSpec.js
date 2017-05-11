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
    thermostat.powerSavingOff();
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

  it('can turn on powersaving mode', function() {
    thermostat.powerSavingOff();
    thermostat.powerSavingOn();
    expect(thermostat.powerSaving).toBe(true);
  });

  it('finds a max temp of 25C when in PSM', function() {
    for (i = 20; i < 26; i++) {
      thermostat.up();
    }
    expect(thermostat.temperature).toEqual(25);
  });

  it('resets temperature to 20', function() {
    thermostat.up();
    thermostat.resetTemp();
    expect(thermostat.temperature).toEqual(20);
  });


  describe("displays", function() {

    it('low energy usage', function() {
      for (i = 0; i < 5; i++) {
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });

    it('medium energy usage', function() {
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });
    it('displays high energy usage', function() {
      for (i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });







});
