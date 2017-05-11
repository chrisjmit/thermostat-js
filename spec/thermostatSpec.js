describe("thermostat exists", function(){
  thermostat = new Thermostat();

  it('exists as an object', function() {
    expect(thermostat.temperature).toEqual(20);
  });

});
