// Part II: require

module.exports = {


	luminosity : function(r, g, b){
		
		var result = 0.2126*r + 0.7152*g + 0.0722*b;
		return result;
		
	},

	darken : function(r, g, b){

		r = (r * 0.8);
		g = (g * 0.8);
		b = (b * 0.8);

		var result = r + ' ' + g + ' ' + b;
		return result;
	}


}