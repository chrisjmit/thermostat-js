function Thermostat() {
    this.temperature = 20;
    this.minTemperature = 10;
}


Thermostat.prototype.up = function() {
  this.temperature += 1 ;
};

Thermostat.prototype.down = function() {
  if (this.temperature === this.minTemperature){
    return this.temperature;
  }
  return this.temperature -= 1 ;
};
