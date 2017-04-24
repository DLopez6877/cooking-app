var convertGallons = function() {
	var gallons = parseFloat(prompt("How many gallons do you have?"));
  return gallons * 3.79;
}


alert('You have ' + convertGallons() + ' liters.');

var convertLiters = function() {
	var liters = parseFloat(prompt("How many Liters do you have?"));
  return liters / 3.79;
}


alert("You have " + resultLiters() + " gallons");
