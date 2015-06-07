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

	// $('#test-functions').click(function() {
	//   testFunctions(dataSpin3, 0, 2500, 100, 100, 10);
	// });
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


	$('#forceZTime').on('click', function() {
	  forceZTime(dataSpin3, 0000, 2500, 10, 100, 10);
	});


	$('#forceXyTime').on('click', function() {
  forceXyTime(dataSpin3, 0, 2500, 1000, 1000, 3);
  });
	// $('#forceXyTimeX').on('click', function() {
	//   forceXyTimeX(dataSpin3, 0, 2500, 100, 100, 5);
	// });
  $('#forceXyzTimeXyz').on('click', function() {
    forceXyzTimeXyz(dataSpin3, 900, 2900, 500, 500, 500, 1, 1);
  });
	// $('#forceXyzAdjustableTimeXyz').on('click', function() {
	//   forceXyzAdjustableTimeXyz(dataSpin3, 0, 1000, 1500, 1500, 1500, 1, 1);
	// });



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
// console.log(highestG(data));
// console.log(highestAllAxesWithTime(data));

////////////////////////APP//////////////////////////////////////////////////////////////
////////////////////////APP//////////////////////////////////////////////////////////////
// ctx.bezierCurveTo(88,96,87,99,87,101);
// ctx.quadraticCurveTo(20,250,250,620.50);

function cartesianLayout() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	ctx.canvas.width  = window.innerWidth;//window
	ctx.canvas.height = window.innerHeight;//window
		ctx.translate(canvas.width/2, canvas.height/2);//DO PERCENTAGES FOR BALL
		ctx.scale(1,-1);
		ctx.lineTo(2000,0);
		ctx.lineTo(-1000,0);
		ctx.stroke();
		ctx.closePath();
		ctx.lineTo(0,2000);
		ctx.lineTo(0,-1000);
		ctx.stroke();
		ctx.closePath();
}



function testFunctions(data, start, stop, multiX, multiY, dropDataPoints) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var int = 0;
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	ctx.translate(canvas.width/2, canvas.height/2);//DO PERCENTAGES FOR BALL
	ctx.scale(1,1);
	ctx.beginPath();
	ctx.lineTo(200,0); ctx.lineTo(-100,0); ctx.stroke(); ctx.closePath(); ctx.beginPath();
	ctx.lineTo(0,200); ctx.lineTo(0,-100); ctx.stroke(); ctx.closePath(); ctx.beginPath();
	for (var x=start, ii=0; x<stop; x=x + dropDataPoints, ii=ii+1) {
		setTimeout(function () {
			ctx.lineWidth = 5;
			ctx.lineTo(data[start][1]*multiX, data[start][2]*multiY);
			ctx.stroke();
			start += dropDataPoints;
			int += dropDataPoints;
		}, ii*data[ii][0]);
	}
}
$('#test-functions').click(function() {
testFunctions(dataSpin3, 0, 2500, 100, 100, 10);
});


// ctx.bezierCurveTo(88,96,87,99,87,101);
// ctx.quadraticCurveTo(20,250,250,620.50);
function testZ(data, start, stop, multiZ, dropDataPoints) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var int = 0;
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	ctx.translate(canvas.width/2, canvas.height/2);//DO PERCENTAGES FOR BALL
	ctx.scale(1,1);
	ctx.beginPath();
	ctx.lineTo(200,0); ctx.lineTo(-100,0); ctx.stroke(); ctx.closePath(); ctx.beginPath();
	ctx.lineTo(0,200); ctx.lineTo(0,-100); ctx.stroke(); ctx.closePath(); ctx.beginPath();
	for (var x=start, ii=0; x<stop; x=x + dropDataPoints, ii=ii+1) {
		setTimeout(function () {
			ctx.lineWidth = .1;
			ctx.lineTo(data[start][1]*multiZ, 0);
			// ctx.stroke(); ctx.closePath();
			ctx.lineTo(0, data[start][2]*multiZ);
			ctx.stroke(); ctx.closePath();
			// ctx.lineTo(data[start][3]*multiZ, data[start][3]*(multiZ/2));
			// ctx.stroke(); ctx.closePath();
			start += dropDataPoints;
			int += dropDataPoints;
		}, ii*data[ii][0]);
	}
}
$('#test-z').on('click', function() {
	testZ(dataCanyonDown, 0, 15000, 1000, 10);
});



function forceXTime(data, start, stop, multiX, multiY, dropDataPoints, multiTime) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var int = 0;
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	ctx.translate(canvas.width/2, canvas.height/2);//DO PERCENTAGES FOR BALL
	ctx.scale(1,1);
	ctx.beginPath();
	ctx.lineTo(200,0); ctx.lineTo(-100,0); ctx.stroke(); ctx.closePath(); ctx.beginPath();
	ctx.lineTo(0,200); ctx.lineTo(0,-100); ctx.stroke(); ctx.closePath(); ctx.beginPath();
		for (var x=start, ii=0; x<stop; x=x + dropDataPoints, ii=ii+1) {
			setTimeout(function () {
				ctx.lineWidth = 10;
				ctx.lineTo(data[start][1]*multiX, data[start][2]*multiY);
				ctx.stroke();

				start += dropDataPoints;
				int += dropDataPoints;
			}, ii*data[ii][0]);
		}
}
$('#forceXTime').on('click', function() {
	forceXTime(dataSpin3, 0000, 2500, 100, 100, 4, 1);
});



function forceYTime(data, start, stop, multiX, multiY, dropDataPoints) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var int = 0;
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	ctx.translate(canvas.width/2, canvas.height/2);//DO PERCENTAGES FOR BALL
	ctx.scale(1,-1);
	ctx.beginPath();
	ctx.lineTo(200,0); ctx.lineTo(-100,0); ctx.stroke(); ctx.closePath(); ctx.beginPath();
	ctx.lineTo(0,200); ctx.lineTo(0,-100); ctx.stroke(); ctx.closePath(); ctx.beginPath();
	for (var y=start, ii=0; y<stop; y=y + dropDataPoints, ii=ii+1) {
		setTimeout(function () {
			ctx.lineWidth = 1;
			ctx.lineTo(data[start][2]*multiY, int);
			ctx.stroke();
			start += dropDataPoints;
			int += dropDataPoints;
		}, ii*data[ii][0]);
	}
}
$('#forceYTime').on('click', function() {
	forceYTime(dataSpin3, 0000, 2500, 100, 100, 4);
});


function forceZTime(data, start, stop, multiX, multiY, dropDataPoints) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var int = 0;
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	ctx.translate(canvas.width/2, canvas.height/2);//DO PERCENTAGES FOR BALL
	ctx.scale(1,1);
	ctx.beginPath();
	ctx.lineTo(200,0); ctx.lineTo(-100,0); ctx.stroke(); ctx.closePath(); ctx.beginPath();
	ctx.lineTo(0,200); ctx.lineTo(0,-100); ctx.stroke(); ctx.closePath(); ctx.beginPath();
	for (var i=start, ii=0; i<stop; i=i + dropDataPoints, ii=ii+1) {
		setTimeout(function () {
			ctx.lineTo(int, (data[start][3]*multiY));
			ctx.stroke();
			ctx.lineWidth = 5;
			start += dropDataPoints;
			int += dropDataPoints;
		}, ii*data[ii][0]);
	}
}



function forceXTimeRedline(data, start, stop, multiX, multiY, dropDataPoints, redlineG) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var int = 0;
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	ctx.translate(canvas.width/2, canvas.height/2);//DO PERCENTAGES FOR BALL
	ctx.scale(1,-1);
	ctx.beginPath();
	ctx.lineTo(200,0); ctx.lineTo(-100,0); ctx.stroke(); ctx.closePath(); ctx.beginPath();
	ctx.lineTo(0,200); ctx.lineTo(0,-100); ctx.stroke(); ctx.closePath(); ctx.beginPath();
		for (var x=start, ii=0; x<stop; x=x + dropDataPoints, ii=ii+1) {
			setTimeout(function () {
				ctx.lineTo(int/5, data[start][1]*multiX);
				// ctx.lineTo(int, (data[start][2]*multiY)+2000);
				// ctx.lineTo(int, (data[start][3]*multiY)+2000);
				ctx.lineWidth = 15;
				if (data[start][1] > redlineG) { ctx.strokeStyle="#FF0000"; }
				else { ctx.strokeStyle=("black"); }
				ctx.stroke();

				start += dropDataPoints;
				int += dropDataPoints;
			}, ii*data[ii][0]);
		}
}
$('#forceXTimeRedline').on('click', function() {
	forceXTimeRedline(dataSpin3, 0000, 2500, 100, 100, 2, 2);//Redline
});
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
function forceXy(data, start, stop, multiX, multiY, dropDataPoints) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var int = 0;
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	ctx.translate(canvas.width/2, canvas.height/2);//DO PERCENTAGES FOR BALL
	ctx.scale(1,1);
	ctx.beginPath();
	ctx.lineTo(200,0); ctx.lineTo(-100,0); ctx.stroke(); ctx.closePath(); ctx.beginPath();
	ctx.lineTo(0,200); ctx.lineTo(0,-100); ctx.stroke(); ctx.closePath(); ctx.beginPath();
	for (var i=start; i<stop; i=i + dropDataPoints) {
		ctx.lineTo(data[i][1]*multiX, data[i][2]*multiY);
		ctx.stroke();
		ctx.lineWidth = 1;
	}
}
$('#forceXy').on('click', function() {
	forceXy(dataSpin3, 0, 2900, 500, 500, 1);
});


function forceXyTime(data, start, stop, multiX, multiY, dropDataPoints) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var int = 0;
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	ctx.translate(canvas.width/2, canvas.height/2);//DO PERCENTAGES FOR BALL
	ctx.scale(1,1);
	ctx.beginPath();
	ctx.lineTo(200,0); ctx.lineTo(-100,0); ctx.stroke(); ctx.closePath(); ctx.beginPath();
	ctx.lineTo(0,200); ctx.lineTo(0,-100); ctx.stroke(); ctx.closePath(); ctx.beginPath();
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
	var int = 0;
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	ctx.translate(canvas.width/2, canvas.height/2);//DO PERCENTAGES FOR BALL
	ctx.scale(1,1);
	ctx.beginPath();
	ctx.lineTo(200,0); ctx.lineTo(-100,0); ctx.stroke(); ctx.closePath(); ctx.beginPath();
	ctx.lineTo(0,200); ctx.lineTo(0,-100); ctx.stroke(); ctx.closePath(); ctx.beginPath();
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
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	ctx.translate(canvas.width/2, canvas.height/2);//DO PERCENTAGES FOR BALL
	ctx.scale(1,-1);
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
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	ctx.translate(canvas.width/2, canvas.height/2);//DO PERCENTAGES FOR BALL
	ctx.scale(1,-1);
	var time = 0;
		for (var i=start; i < stop; i=i+dropDataPoints) {
			ctx.lineTo(time*multiTime, (data[i][1]*multiX));
			ctx.strokeStyle="white";
			ctx.stroke();
			ctx.lineWidth = 5;
			time++;
		}
		time = 0;
		for (var i=start; i < stop; i=i+dropDataPoints) {
			ctx.lineTo(time*multiTime, (data[i][2]*-multiY));
			ctx.strokeStyle="white";
			ctx.stroke();
			ctx.lineWidth = 5;
			time++;
		}
		time = 0;
		for (var i=start; i < stop; i=i+dropDataPoints) {
			ctx.lineTo(time*multiTime, (data[i][3]*multiZ));
			ctx.strokeStyle="white";
			ctx.stroke();
			ctx.lineWidth = 5;
			time++;
		}
}

});
