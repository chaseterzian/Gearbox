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

$('#test-functions').click(function() {
	testFunctions(dataSpin3, 0, 2500, 100, 100, 10);
});
$('#freeze').on('click', function() {
	confirm('DATA FREEZE, OK TO CONTINUE- EXPERIMENTAL');
	location.reload()
});
$('#reset').on('click', function() {
	location.reload();
});
$('#cartesian').on('click', function() {
	cartesianLayout();
});
$('#forceXTime').on('click', function() {
	forceXTime(dataSpin3, 0000, 2500, 100, 100, 4, 1);
});
$('#forceYTime').on('click', function() {
	forceYTime(dataSpin3, 0000, 2500, 100, 100, 4);
});
$('#forceZTime').on('click', function() {
	forceZTime(dataSpin3, 0000, 2500, 10, 100, 10);
});
$('#forceXTimeRedline').on('click', function() {
   forceXTimeRedline(dataSpin3, 0000, 2500, 100, 100, 4, 2);//logicForRedline
});
$('#forceXy').on('click', function() {
	forceXy(dataSpin3, 0, 10000, 1000, 1000, 1);
});
$('#forceXyTime').on('click', function() {
	forceXyTime(dataSpin3, 0, 2500, 1000, 1000, 3);
});
// $('#forceXyTimeX').on('click', function() {
//   forceXyTimeX(dataSpin3, 0, 2500, 100, 100, 5);
// });
//   //3in1, dataXyzOnTheY
$('#forceXyzTimeXyz').on('click', function() {
	forceXyzTimeXyz(dataSpin3, 900, 2900, 500, 500, 500, 1, 1);
});
//   $('#forceXyzAdjustableTimeXyz').on('click', function() {
//     forceXyzAdjustableTimeXyz(dataSpin3, 0, 1000, 1500, 1500, 1500, 1, 1);
//   });
// });

});
