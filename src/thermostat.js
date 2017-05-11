function Thermostat() {
    this.temperature = 20;
    this.minTemperature = 10;
    this.maxTemperature = 32;
}


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
