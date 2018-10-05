function FizzBuzz() {

}

FizzBuzz.prototype.three = function(number) {
  return number % 3 === 0;
}

FizzBuzz.prototype.five = function(number) {
  return number % 5 === 0;
}

FizzBuzz.prototype.fifteen = function(number) {
  return number % 15 === 0;
}

FizzBuzz.prototype.gimme = function(number) {
  if (this.fifteen(number)) {
    return "FizzBuzz";
  } else if (this.three(number)) {
    return "Fizz";
  } else if (this.five(number)) {
    return "Buzz";
  } else {
    return number;
  };
};


var fizzBuzz = new FizzBuzz();

for (var i = 1; i <= 100; i++) {
  console.log(fizzBuzz.gimme(i));
}
