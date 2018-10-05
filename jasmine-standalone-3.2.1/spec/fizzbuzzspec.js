describe ("FizzBuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  it('checks if number is divisible by 3', function() {
    expect(fizzbuzz.three(3)).toBe(true);
  });

  it('checks if number is divisbile by 5', function() {
    expect(fizzbuzz.five(5)).toBe(true);
  });

  it('checks if number is divisbile by 15', function() {
    expect(fizzbuzz.fifteen(15)).toBe(true);
  });

  it('returns "Fizz" if number is divisible by 3', function() {
    expect(fizzbuzz.gimme(3)).toEqual("Fizz")
  });

  it('returns "Buzz" if number is divisible by 5', function() {
    expect(fizzbuzz.gimme(5)).toEqual("Buzz")
  });

  it('returns "Fizzbuzz" if number is divisible by 15', function() {
    expect(fizzbuzz.gimme(15)).toEqual("FizzBuzz")
  });

  it('returns "number" if number is not divisble by 3, 5 or 15', function() {
    expect(fizzbuzz.gimme(2)).toEqual(2)
  });


});
