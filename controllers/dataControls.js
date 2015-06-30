$(document).ready(function() {


	$(window).load(function() {
		$('reportcontent').hide();
		$('carmodeltop').hide();
		$('carmodelback').hide();
		$('wheelmodel').hide();
		$('#run-program-button').hide();
	});
	// $("form").on("submit", function() {//DOES NOT WORK YET
	// 	// debugger;
	// });
	$('#freeze-button').on('click', function() {
		alert("DATA FREEZE, IT'S COLD IN HERE");
		$('video').each(this.pause());
	});
	$('#reset-button').on('click', function() {
		location.reload();
	});
	$('#reset-button2').on('click', function() {
		location.reload();
	});
	$('#reset-button3').on('click', function() {
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
	$('#show-all-data-button').on('click', function() {
		$('.button-panel-right').css('text-align', 'right');
		// $('#upload-button').css('position', 'bottom');
		$('.home').toggle('hide');
	});
	$('#parameter-input-fields').css('text-align', 'right');


});