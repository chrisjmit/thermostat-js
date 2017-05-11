// 'use strict'

function Thermostat() {
    this.temperature = 20;
    this.minTemperature = 10;
    this.maxTemperature = 32;
    this.powerSaving = true;
}

Thermostat.prototype.currentTemperature = function () {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.temperature === this.maxTemperature){
    return this.temperature;
  }
  return this.temperature += 1 ;
};

Thermostat.prototype.down = function() {
  if (this.temperature === this.minTemperature){
    return this.temperature;
  }
  return this.temperature -= 1 ;
};

Thermostat.prototype.powerSavingOff = function () {
  this.powerSaving = false;
};

Thermostat.prototype.powerSavingOn = function () {
  this.powerSaving = true;
};
