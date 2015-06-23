// $('document').ready(function { 
//////////////////////////////////////////////////////////////////////////////////////////////
function cartesianLayout() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	ctx.canvas.width  = window.innerWidth;//window
	ctx.canvas.height = window.innerHeight;//window
		ctx.translate(canvas.width/2, canvas.height/2);//DO PERCENTAGES FOR BALL
		ctx.beginPath(); ctx.lineTo(1000,0); ctx.lineTo(-1000,0); ctx.stroke(); ctx.closePath();
		ctx.beginPath(); ctx.lineTo(0,400); ctx.lineTo(0,-200); ctx.stroke(); ctx.closePath();
		ctx.beginPath(); ctx.lineTo(200,-100); ctx.lineTo(-400,200); ctx.stroke(); ctx.closePath();
	}

//////////////////////////////////////////////////////////////////////////////////////////////
function testFunctions(data, start, stop, multiX, multiY, dropDataPoints, multiTime) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var int = 0;
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
		ctx.translate(canvas.width/2, canvas.height/2);//DO PERCENTAGES FOR BALL
		ctx.scale(1,1);
		// ctx.beginPath();
		// ctx.lineTo(200,0); ctx.lineTo(-100,0); ctx.stroke(); ctx.closePath(); ctx.beginPath();
		// ctx.lineTo(0,200); ctx.lineTo(0,-100); ctx.stroke(); ctx.closePath(); ctx.beginPath();
		for (var x=start, ii=0; x<stop; x=x + dropDataPoints, ii=ii+1) {
			setTimeout(function () {
				ctx.beginPath();
				ctx.lineTo(2000,0); ctx.lineTo(-100,0); ctx.stroke(); ctx.closePath(); ctx.beginPath();
				ctx.lineTo(0,2000); ctx.lineTo(0,-100); ctx.stroke(); ctx.closePath(); ctx.beginPath();
				ctx.beginPath();
				ctx.fillStyle=("black");
				ctx.arc(data[start][1]*multiX, 0,12,12, Math.PI, true);
				ctx.arc(0, data[start][2]*multiY,12,12, Math.PI, true);
				ctx.fill(); ctx.closePath();
				start += dropDataPoints;
				int += dropDataPoints;
				if (data[start][1] <= 0) {
					ctx.rotate(data[start][1]/-100);
				} else {
					ctx.rotate(data[start][1]/100);
				}
			}, ii*data[ii][0]);

		}
	}
	$('#test-functions').click(function() {
		testFunctions(dataCanyonDown, 1000, 10000, 100, 100, 1);
	});

//////////////////////////////////////////////////////////////////////////////////////////////
function testCarModel(data, start, stop, multiZ, dropDataPoints) {
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
			ctx.lineWidth = 1;
			ctx.beginPath();
			ctx.strokeStyle=("black");
			ctx.lineTo(data[start][1]*multiZ, 0);
			// ctx.stroke(); ctx.closePath();
			ctx.lineTo(0, data[start][2]*multiZ);
			ctx.stroke(); ctx.closePath();
			// ctx.lineTo(data[start][3]*multiZ, data[start][3]*(multiZ/2));
			// ctx.stroke(); ctx.closePath();

			ctx.strokeStyle=("white");
			ctx.beginPath();
			ctx.lineTo(data[start-10][1]*multiZ, 0);
			// ctx.stroke(); ctx.closePath();
			ctx.lineTo(0, data[start-10][2]*multiZ);
			ctx.stroke(); ctx.closePath();

			start += dropDataPoints;
			int += dropDataPoints;
		}, ii*data[ii][0]);
	}
}
$('#car-model').on('click', function() {
	// testCarModel(dataCanyonDown, 101, 15000, 1000, 5);
	testCarModel(data5MileUp, 101, 15000, 100, 1);
});

//////////////////////////////////////////////////////////////////////////////////////////////
function gBallTest(data, start, stop, multiZ, dropDataPoints) {
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
			ctx.beginPath();
			ctx.strokeStyle=("black");
			ctx.lineTo(data[start][1]*multiZ, data[start][2]*multiZ);
			ctx.stroke(); ctx.closePath();
			start += dropDataPoints;
			int += dropDataPoints;
		}, ii*data[ii][0]);
		setTimeout(function () {
			ctx.beginPath();
			ctx.strokeStyle=("white");
			ctx.lineTo(data[start][1]*multiZ, data[start][2]*multiZ);
			ctx.stroke(); ctx.closePath();
			start += dropDataPoints;
			int += dropDataPoints;
		}, (ii+100)*data[ii][0]);
	}
}
$('#g-ball-test').on('click', function() {
	testCarModel(dataCanyonDown, 101, 15000, 1000, 5);
	// testCarModel(dataSpin3, 101, 2900, 100, 1);
});

//////////////////////////////////////////////////////////////////////////////////////////////
function gBallV2(data, start, stop, multiX, multiY, dropDataPoints, multiTime) {
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
			ctx.beginPath();
			ctx.fillStyle=("white");
			ctx.arc(data[start][1]*multiX, data[start][2]*multiY,12,12, Math.PI, true);
			ctx.fill(); ctx.closePath();
			start += dropDataPoints;
			int += dropDataPoints;
		}, ii*data[ii][0]);
		setTimeout(function () {
			ctx.beginPath();
			ctx.fillStyle=("black");
			ctx.arc(data[start][1]*multiX, data[start][2]*multiY,10,10, Math.PI, true);
			ctx.fill(); ctx.closePath();
			int += dropDataPoints;
		}, (ii+10)*data[ii][0]);
	}
}
$('#g-ball-v-2').on('click', function() {
	gBallV2(dataSpin3, 0100, 18000, 200, 200, 1, 1);
});

//////////////////////////////////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////////////////////////////////////
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
$('#forceXyTime').on('click', function() {
	forceXyTime(dataSpin3, 0, 2500, 1000, 1000, 3);
});

////////////////////////////////////////////////////////////////////////////////////////
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
$('#forceXyTimeX').on('click', function() {
	forceXyTimeX(dataSpin3, 0, 2500, 100, 100, 5);
});

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
$('#forceXyzTimeXyz').on('click', function() {
	forceXyzTimeXyz(dataSpin3, 900, 2900, 500, 500, 500, 1, 1);
});

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

/////////////////////////////////////////////////////////////////////////////////////////////
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
$('#forceXyzAdjustableTimeXyz').on('click', function() {
	forceXyzAdjustableTimeXyz(dataSpin3, 0, 1000, 1500, 1500, 1500, 1, 1);
});


// });