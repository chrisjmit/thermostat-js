describe("A Thermostat", function(){

  var thermostat = new Thermostat();

  it('has a default temperature', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('can be turned up', function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

});
