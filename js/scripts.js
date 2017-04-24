var convert = function () {
	var gallons = parseFloat(prompt("How many gallons do you have?"));
  return gallons * 3.79 ;
}

var result = convert();

alert('You have ' + result + ' liters.');
