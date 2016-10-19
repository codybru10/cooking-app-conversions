var gramConversion = .03527396195
var gallonsConversion = 8
var cupsConversion = 250
var tbspConversion = 3

var gramsToOz = function(grams) {
	return grams * gramConversion;
};

var gallonToPint = function(gallons) {
	return gallons / gallonsConversion;
};

var cupsToMl = function(cups) {
	return cups * cupsConversion;
};

var tbspToTsp = function(tbsp) {
  return tbsp * tbspConversion;
};


$(document).ready(function() {

$("form#grams").submit(function(event) {
var grams = parseInt($("#number1").val());
var result = gramsToOz(grams, gramConversion);
$("#output1").text(result);
event.preventDefault();
  });

$("form#gallons").submit(function(event) {
var gallons = parseInt($("#gallons1").val());
var result = gallonToPint(gallons, gallonsConversion);
$("#output2").text(result);
event.preventDefault();
  });

$("form#cups").submit(function(event) {
var cups = parseInt($("#cups1").val());
var result = cupsToMl(cups, cupsConversion);
$("#output3").text(result);
event.preventDefault();
  });

$("form#tbsp").submit(function(event) {
var tbsp = parseInt($("#tbsp1").val());
var result = tbspToTsp(tbsp, tbspConversion);
$("#output4").text(result);
event.preventDefault();
  });

});
