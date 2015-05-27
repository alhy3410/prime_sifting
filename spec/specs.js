describe('sieve', function() {
  it("will remove elements that are non Prime Numbers up to 5", function() {
    expect(sieve(5)).to.eql([2,3,5])
  })

  it("will remove elements that are non Prime Numbers up to 15", function() {
    expect(sieve(15)).to.eql([2,3,5,7,11,13])
  })

  it("will remove elements that are non Prime Numbers up to 23", function() {
    expect(sieve(23)).to.eql([2,3,5,7,11,13,17,19,23])
  })
});
