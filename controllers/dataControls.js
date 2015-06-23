$(document).ready(function() {
// require("./app.js");
// require("../data/initSpin1.js");
// require("../data/initSpin2.js");
// require("../data/initSpin3.js");
// require("../data/initRunIndoor.js");
// require("../data/initSwing.js");
// require("../data/secAccelAndLeft.js");
// require("../data/secAccelBrake.js");
// require("../data/secCanyonDown.js");
// require("../data/secCanyonUp.js");
// require("../data/secFiveMileDown.js");
// require("../data/secFiveMileUp.js");
// require("../data/secToClass.js");
$(window).load(function() {
	$('reportcontent').hide();
});
	$("form").on("submit", function() {//DOES NOT WORK YET
		// debugger;
	});
	$('#freeze-button').on('click', function() {
		alert("DATA FREEZE, IT'S COLD IN HERE");
	});
	$('#reset-button').on('click', function() {
		location.reload();
	});
	$('#cartesian-button').on('click', function() {
		cartesianLayout();
	});
	$('html').css('display', 'none');
	$('html').fadeIn(2000);
	$('.hide-then-show').hide('.hide-then-show');
	$('#testing-area').on('click', function() {
		$('#testing-area').css("background-color", "red");
	});
	// $('#test-functions-button').on('click', function() {
	// 	graphicsFunctionOne(data5MileDown, 101, 15000, 5000, 1);
	// });
	$('#test-functions').on('click', function() {
		graphicsFunctionOne(data5MileDown, 101, 15000, 5000, 1);
	});
	$('#report-button').on('click', function() {
		$('datacontent').toggle('hide');
		$('reportcontent').toggle('show');
	});
	$('#data-page').on('click', function() {
		$('datacontent').toggle('show');
		$('reportcontent').toggle('hide');
	});
	$('#nothing').on('click', function() {
		// $('body').css('background-image', 'url(/')
		$('body').removeClass('bg-image');
	});
	















});