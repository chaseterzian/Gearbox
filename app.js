require("../app.js");
require("../data/initSpin1.js");
require("../data/initSpin2.js");
require("../data/initSpin3.js");
require("../data/initRunIndoor.js");
require("../data/initSwing.js");
require("../data/secAccelAndLeft.js");
require("../data/secAccelBrake.js");
require("../data/secCanyonDown.js");
require("../data/secCanyonUp.js");
require("../data/secFiveMileDown.js");
require("../data/secFiveMileUp.js");
require("../data/secToClass.js");
require("../data/secToClass2.js");


function highestG(data) {//consoleZ max
	var highG = 0;
	for (var i=0; i<data.length; i++) {
		if (highG < data[i][3]) { highG = data[i][3]; }
	}
	return highG;
}

function highestAllAxesWithTime(data) {//consoleXYZ with time
	var dataXYZ = [['X',0,0],['Y',0,0],['Z',0,0]];
	for (var i=0; i<data.length; i++) {
		if (dataXYZ[0][2] < data[i][1]) { dataXYZ[0][2] = data[i][1]; dataXYZ[0][1] = data[i][0]; }
		if (dataXYZ[1][2] < data[i][2]) { dataXYZ[1][2] = data[i][2]; dataXYZ[1][1] = data[i][0]; }
		if (dataXYZ[2][2] < data[i][3]) { dataXYZ[2][2] = data[i][3]; dataXYZ[2][1] = data[i][0]; }
	}
	return dataXYZ;
}
console.log(highestG(sData));
console.log(highestAllAxesWithTime(sData));

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
function forceXyzTimeXyz(data, start, stop, multiX, multiY, multiZ, multiTime, dropDataPoints) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var time = 0;
	ctx.beginPath();

	for (var i=start; i<stop; i=i + dropDataPoints) {
		ctx.lineTo(time*multiTime, data[i][1]*multiX);//xPosition
		ctx.stroke();
		ctx.lineWidth = 1;
		time++;
	}
	time=0;
	for (var i=start; i<stop; i=i + dropDataPoints) {
		ctx.lineTo(time*3, (data[i][2]*multiY)+500);//yPosition
		ctx.stroke();
		ctx.lineWidth = 1;
		time++;
	}
	time=0;
	for (var i=start; i<stop; i=i + dropDataPoints) {
		ctx.lineTo(time*3, (data[i][3]*multiZ)+1000);
		ctx.stroke();
		ctx.lineWidth = 1;
		time++;
	}
	ctx.closePath();
}
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
function forceXy(data, start, stop, multiX, multiY, dropDataPoints) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	ctx.beginPath();
	for (var i=start; i<stop; i=i + dropDataPoints) {
		ctx.lineTo(data[i][1]*multiX, data[i][2]*multiY);
		ctx.stroke();
		ctx.lineWidth = 1;
	}
	ctx.closePath();
}
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
function forceXyTimeX(data, start, stop, multiX, multiY, dropDataPoints) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	ctx.beginPath();

	for (var i=start; i<stop; i=i + dropDataPoints) {
		ctx.lineTo((data[i][1]*multiX) + i, (data[i][2]*multiY));
		ctx.stroke();
		ctx.lineWidth = 1;
	}
	ctx.closePath();
}
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
function forceXyzAdjustableTimeXyz(data, start, stop, multiX, multiY, multiZ, multiTime, dropDataPoints) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var time = 0;
	ctx.beginPath();

	for (var i=start; i < stop; i=i+dropDataPoints) {
		ctx.lineTo(time*multiTime, data[i][1]*multiX);
		ctx.stroke();
		ctx.lineWidth = 1;
		time++;
	}
	time = 0;
	for (var i=start; i < stop; i=i+dropDataPoints) {
		ctx.lineTo(time*multiTime, (data[i][2]*-multiY));
		ctx.stroke();
		ctx.lineWidth = 1;
		time++;
	}
	time = 0;
	for (var i=start; i < stop; i=i+dropDataPoints) {
		ctx.lineTo(time*multiTime, (data[i][3]*multiZ));
		ctx.stroke();
		ctx.lineWidth = 1;
		time++;
	}
	ctx.closePath();
}
////////////////////////////////////////////////////////////////////////////////////////
//sameAsAboveForceXy//////////////////////////////////////////////////////////////////////////////////////
// function forceXy(data, start, stop, multiX, multiY, dropDataPoints) {
//   var canvas = document.getElementById('canvas');
//   var ctx = canvas.getContext('2d');
//   var time = 0;
//   ctx.beginPath();
//
//   for (var i=start; i<stop; i=i + dropDataPoints) {
//     ctx.lineTo(data[i][1]*multiX, data[i][2]*multiY);
//     ctx.stroke();
//     ctx.lineWidth = 1;
//     time++;
//   }
//   ctx.closePath();
// }
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
