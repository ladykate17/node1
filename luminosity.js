
// Part I.1: Luminosity - luminosity.js

	var red = process.argv[2];
	var green = process.argv[3];
	var blue = process.argv[4];

	var luminosity = function(r, g, b){
		
		var result = 0.2126*r + 0.7152*g + 0.0722*b;
		return result;
		
	}

