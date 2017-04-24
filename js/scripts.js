var convertGallons = function() {
	var gallons = parseFloat(prompt("How many gallons do you have?"));
  return gallons * 3.79;
}

var resultGallons = convertGallons();

alert('You have ' + resultGallons + ' liters.');

var convertLiters = function() {
	var liters = parseFloat(prompt("How many Liters do you have?"));
  return liters / 3.79;
}

var resultLiters = convertLiters();

alert("You have " + resultLiters + " gallons");
