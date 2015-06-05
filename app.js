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
////////////////////////CL///////////////////////////////////////////////////////////////
////////////////////////CL///////////////////////////////////////////////////////////////
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
////////////////////////APP//////////////////////////////////////////////////////////////
////////////////////////APP//////////////////////////////////////////////////////////////
function forceXTime(data, start, stop, multiX, multiY, dropDataPoints) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var int = 0;
		for (var x=start, ii=0; x<stop; x=x + dropDataPoints, ii=ii+1) {
			setTimeout(function () {
				ctx.lineTo(int, (data[start][1]*-multiX)+1800);
				ctx.lineWidth = 5;
				ctx.stroke();
				start += dropDataPoints;
				int += dropDataPoints;
			}, ii*data[ii][0]);
		}
}

function forceYTime(data, start, stop, multiX, multiY, dropDataPoints) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var int = 0;
	for (var y=start, ii=0; y<stop; y=y + dropDataPoints, ii=ii+1) {
		setTimeout(function () {
			ctx.lineTo(int, (data[start][2]*multiY)+1800);
			ctx.stroke();
			ctx.lineWidth = 10;
			start += dropDataPoints;
			int += dropDataPoints;
		}, ii*data[ii][0]);
	}
}

function forceZTime(data, start, stop, multiX, multiY, dropDataPoints) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var int = 0;
	for (var i=start, ii=0; i<stop; i=i + dropDataPoints, ii=ii+1) {
		setTimeout(function () {
			ctx.lineTo(int, (data[start][3]*multiY)+1800);
			ctx.stroke();
			ctx.lineWidth = 10;
			start += dropDataPoints;
			int += dropDataPoints;
		}, ii*data[ii][0]);
	}
}

function forceXTimeRedline(data, start, stop, multiX, multiY, dropDataPoints, redlineG) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var int = 0;
		for (var x=start, ii=0; x<stop; x=x + dropDataPoints, ii=ii+1) {
			setTimeout(function () {
				ctx.lineTo(int, (data[start][1]*-multiX)+1500);
				// ctx.lineTo(int, (data[start][2]*multiY)+2000);
				// ctx.lineTo(int, (data[start][3]*multiY)+2000);
				if (data[start][1] > redlineG) {
					ctx.lineWidth = 15;
					ctx.strokeStyle="#FF0000";
					ctx.stroke();
				} else {
					ctx.lineWidth = 15;
					ctx.strokeStyle="rgba(0,0,0,1, .2)";
					ctx.stroke();
				}
				start += dropDataPoints;
				int += dropDataPoints;
			}, ii*data[ii][0]);
		}
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

function forceXyTime(data, start, stop, multiX, multiY, dropDataPoints) {
		var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');
		var tOut = 0;
		for (var i=start; i<stop; i=i + dropDataPoints) {
			setTimeout(function () {
				ctx.lineTo(data[i][1]*multiX, data[i][2]*multiY);
				ctx.stroke();
				ctx.lineWidth = 1;
				console.log(data[i][0]*300);
			}, 10*tOut);
			tOut = tOut + 1;
		}
}

function forceXyTimeX(data, start, stop, multiX, multiY, dropDataPoints) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	for (var i=start; i<stop; i=i + dropDataPoints) {
		ctx.lineTo((data[i][1]*multiX) + i, (data[i][2]*multiY));
		ctx.stroke();
		ctx.lineWidth = 1;
	}
}
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
function forceXyzTimeXyz(data, start, stop, multiX, multiY, multiZ, multiTime, dropDataPoints) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var time = 0;

	for (var i=start; i<stop; i=i + dropDataPoints) {
		ctx.lineTo(time*multiTime, data[i][1]*multiX);//xPosition
		ctx.stroke();
		ctx.lineWidth = 5;
		time++;
	}
	time=0;
	for (var i=start; i<stop; i=i + dropDataPoints) {
		ctx.lineTo(time*3, (data[i][2]*multiY)+500);//yPosition
		ctx.stroke();
		ctx.lineWidth = 5;
		time++;
	}
	time=0;
	for (var i=start; i<stop; i=i + dropDataPoints) {
		ctx.lineTo(time*3, (data[i][3]*multiZ)+1000);
		ctx.stroke();
		ctx.lineWidth = 5;
		time++;
	}
}

// function forceXyzTimeXyz(data, start, stop, multiX, multiY, multiZ, multiTime, dropDataPoints) {
// 	var canvas = document.getElementById('canvas');
// 	var ctx = canvas.getContext('2d');
// 	var time = 0;
//
// 	for (var i=start, ii=0; i<stop; i=i + dropDataPoints, ii=ii+1) {
// 		setTimeout(function() {
// 		ctx.lineTo(time*multiTime, data[i][1]*multiX);//xPosition
// 		ctx.stroke();
// 		console.log("");
// 		ctx.lineWidth = 5;
// 		time++;
// 	}, ii*data[ii][0]);
// 	}
// 	time=0;
// 	for (var i=start, ii=0; i<stop; i=i + dropDataPoints, ii=ii+1) {
// 		setTimeout(function() {
// 		ctx.lineTo(time*3, (data[i][2]*multiY)+500);//yPosition
// 		ctx.stroke();
// 		ctx.lineWidth = 5;
// 		time++;
// 	}, ii*data[ii][0]);
// 	}
// 	time=0;
// 	for (var i=start, ii=0; i<stop; i=i + dropDataPoints, ii=ii+1) {
// 		setTimeout(function() {
// 		ctx.lineTo(time*3, (data[i][3]*multiZ)+1000);
// 		ctx.stroke();
// 		ctx.lineWidth = 5;
// 		time++;
// 	}, ii*data[ii][0]);
// 	}
// }


function forceXyzAdjustableTimeXyz(data, start, stop, multiX, multiY, multiZ, multiTime, dropDataPoints) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var time = 0;
		for (var i=start; i < stop; i=i+dropDataPoints) {
			ctx.lineTo(time*multiTime, (data[i][1]*multiX));
			ctx.stroke();
			ctx.lineWidth = 5;
			time++;
		}
		time = 0;
		for (var i=start; i < stop; i=i+dropDataPoints) {
			ctx.lineTo(time*multiTime, (data[i][2]*multiY));
			ctx.stroke();
			ctx.lineWidth = 5;
			time++;
		}
		time = 0;
		for (var i=start; i < stop; i=i+dropDataPoints) {
			ctx.lineTo(time*multiTime, (data[i][3]*multiZ));
			ctx.stroke();
			ctx.lineWidth = 5;
			time++;
		}
}

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
