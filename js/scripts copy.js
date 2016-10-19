var gramConversion = .03527396195

var conversion = function(grams) {
	return grams * gramConversion;
};

$(document).ready(function() {
$("form#grams").submit(function(event) {
var grams = parseInt($(number1).val());
var result = conversion(grams, gramConversion);
$("#output1").text(result);
event.preventDefault();
  });

});
