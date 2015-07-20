// Bonus II

var request = require('request');
var _ = require('underscore');

request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function (error, response, body) {
  
  if (!error && response.statusCode == 200) {
    
    var validColors = JSON.parse(body);
   // console.log(validColors);
    var colorName = process.argv[2].toLowerCase;


    var getRgbValues = function(colorName){

    	var colorKey = _.find(validColors, function(obj){
    		obj.name.toLowerCase() === colorName.toLowerCase()
    	console.log(colorKey);
    	return _.values(colorKey)
    }
    		
    };

    console.log(getRgbValues(colorName));
  }

});
