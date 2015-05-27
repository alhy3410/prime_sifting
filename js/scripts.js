var sieve = function(number) {
  var numberArray = [];
  for (var index = 2; index <= number; index +=1) {
    numberArray.push(index);
  }

  var nonPrimeArray = [];

  numberArray.forEach(function(prime) {
    var multiplier = 2;
    while ((prime * multiplier) <= number) {
      var numToRemove = prime * multiplier;
      multiplier += 1;
      nonPrimeArray.push(numToRemove);



    }
    nonPrimeArray.forEach(function(numToRemove) {
      var position = numberArray.indexOf(numToRemove);
      
      if (position > -1) {
        numberArray.splice(position, 1);
      }
    });
  });
  return numberArray;
};
