
// Part I: Luminosity

	var red = process.argv[2];
	var green = process.argv[3];
	var blue = process.argv[4];

	var luminosity = function(r, g, b){
		
		var result = 0.2126*r + 0.7152*g + 0.0722*b;
		return result;
		
	}

	var luminosityResult = luminosity(red, green, blue);
	console.log( luminosityResult );


	var lightness = function(luminosity){

		if ( luminosityResult > 155 ) {
			return 'light'
		}
		else {
			return 'dark'
		}
	}

	console.log(  lightness( luminosityResult )  );


// Part II: require
