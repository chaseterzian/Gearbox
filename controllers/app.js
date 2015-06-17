$(document).ready(function() {


	g = 9.81;

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
// $('document').on('load', function() {
// 	$('video').hide();
// });
//////////////////////////////////////////////////////////////////////////////////////////////
function highestG(data) {//consoleZ max
	var highG = 0;
	for (var i=0; i<data.length; i++) {
		if (highG < data[i][3]) { highG = data[i][3]; }
	}
	return highG;
}

var highestAllAxesWithTime = function(data) {//consoleXYZ with time
	var dataXYZ = [['X',0,0],['Y',0,0],['Z',0,0]];
	for (var i=0; i<data.length; i++) {
		if (dataXYZ[0][2] < data[i][1]) { dataXYZ[0][2] = data[i][1]; dataXYZ[0][1] = data[i][0]; }
		if (dataXYZ[1][2] < data[i][2]) { dataXYZ[1][2] = data[i][2]; dataXYZ[1][1] = data[i][0]; }
		if (dataXYZ[2][2] < data[i][3]) { dataXYZ[2][2] = data[i][3]; dataXYZ[2][1] = data[i][0]; }
	}
	return "Max: " + dataXYZ[0] + " /// " + dataXYZ[1] + " /// " + dataXYZ[2] + " /// ";
}

//////////////////////////////////////////////////////////////////////////////////////

function locationAndRouteModel(data, start, stop, multiX, multiY, multiZ, dropDataPoints, redline) {
	// var canvas = document.getElementById('canvas-wheel');
	// var ctx = canvas.getContext('2d');
	// var int = 0;
	var arrStartLeft = [];
	var arrLatForStart = [];

	for (var x=start; x<stop; x=x+dropDataPoints) { 
		if (data[start][22] !== undefined && data[start][22] !== NaN && arrLatForStart.length === 0) { 
			arrStartLeft.push(data[start][22]);
			arrStartLeft = arrStartLeft.join().split('.');
			arrLatForStart.push(parseFloat(arrStartLeft[0]));
		}
		start += dropDataPoints;
	}

		console.log(arrLatForStart);
console.log("start outside of function above");
}
		// for (var x=start, ii=0; x<stop; x=x + dropDataPoints, ii=ii+1) {
		// 	setTimeout(function () {
		// 		var arrLat = [];
		// 		var arrLatLeft = [];
		// 		var arrLatRight = [];
		// 		var arrLong = [];
		// 		var arrLongLeft = [];
		// 		var arrLongRight = [];

		// 		arrLat.push(data[start][22]);
		// 		arrLat = arrLat.join().split('.');
		// 		arrLatLeft.push(parseFloat(arrLat[0]));
		// 		arrLatRight.push(parseFloat("." + arrLat[1]));

		// 		var xCoordinate = ( (arrLatLeft - arrStartLeft) + (arrLatRight*100) );
// console.log(xCoordinate);
// console.log(arrStartLeft);





// ctx.canvas.width  = window.innerWidth;
// 	  		ctx.canvas.height = 800;//window.innerHeight;
// 	  		ctx.scale(1,1);
// 	  		ctx.translate(canvas.width/2, canvas.height/2);
// 	  		console.log(data[start][22]);
// 				// console.log(data[start][23]);
// 				ctx.beginPath(); 
// 				ctx.lineTo(data[start][22]-data[0][22],200); 
// 				ctx.lineTo(data[start][22],400); 
// 				ctx.stroke(); 
// 				ctx.closePath();

			// 	start += dropDataPoints;
			// 	int += dropDataPoints;
			// }, data[ii][31]*dropDataPoints);
// }
$('#location-route-model').on('click', function() {
	locationAndRouteModel(dataDownFlagstaff1, 0, 18000, 60, 60, 2, 1, .3*g);
});

//////////////////////////////////////////////////////////////////////////////////////

function steeringWheelModel(data, start, stop, multiX, multiY, multiZ, dropDataPoints, redline) {
	var canvas = document.getElementById('canvas-wheel');
	var ctx = canvas.getContext('2d');
	var int = 0;

	for (var x=start, ii=0; x<stop; x=x + dropDataPoints, ii=ii+1) {
		setTimeout(function () {

			ctx.canvas.width  = window.innerWidth;
	  		ctx.canvas.height = 800;//window.innerHeight;
	  		ctx.scale(1,1);
	  		ctx.translate(canvas.width/2, canvas.height/2);
	  		ctx.rotate((Math.PI/180)*(data[start][0]*25));
	  		ctx.strokeStyle="black";
	  		ctx.lineWidth = 10;
				ctx.beginPath(); ctx.arc(0, 0, 300, 300, Math.PI, true); ctx.stroke();//WHELL
				ctx.lineWidth = 10;
				ctx.beginPath(); ctx.lineTo(-300,0); ctx.lineTo(300,0); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(-295,-3); ctx.lineTo(295,-3); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(-2,-145); ctx.lineTo(2,145); ctx.stroke(); ctx.closePath();
				start += dropDataPoints;
				int += dropDataPoints;
			}, 2000+data[ii][31]*dropDataPoints);
	}
}
$('#wheel').on('click', function() {
	steeringWheelModel(dataDownFlagstaff1, 0, 18000, 60, 60, 2, 10, .3*g);
});

////////////////////////////////////////////////////////////////////

function orientation(data, start, stop, multiX, multiY, multiZ, dropDataPoints, redline) { 
	var canvas = document.getElementById('canvas-compas');
	var ctx = canvas.getContext('2d');
	var int = 0;

	for (var x=start, ii=0; x<stop; x=x + dropDataPoints, ii=ii+1) {
		setTimeout(function () {
			ctx.canvas.width  = window.innerWidth;
	  		ctx.canvas.height = 800;//window.innerHeight;
	  		ctx.scale(1,1);
	  		ctx.translate(canvas.width/2, canvas.height/2);
	  		ctx.rotate((Math.PI/180)*data[start][29]);
	  		ctx.strokeStyle="black";
	  		ctx.lineWidth = 10;
				ctx.beginPath(); ctx.arc(0, 0, 300, 300, Math.PI, true); ctx.stroke();//COMPASS
				ctx.lineWidth = 10;
				ctx.beginPath(); ctx.lineTo(0,-300); ctx.lineTo(0,150); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(-75,75); ctx.lineTo(0,-300); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(75,75); ctx.lineTo(0,-300); ctx.stroke(); ctx.closePath();
				start += dropDataPoints;
				int += dropDataPoints;
				document.getElementById("orientation-in-degrees").innerHTML = 'Orientation: ' + data[start][29];
			}, 2000+data[ii][31]*dropDataPoints);

	}
}
$('#orientation').on('click', function() {
	console.log("insied testnewcanvas jquery");
	orientation(dataDownFlagstaff1, 0, 18000, 60, 60, 2, 1, .3*g);
});

///////////////////////////////////////////////////////////////////////

function movementXyzFull(data, start, stop, multiX, multiY, multiZ, dropDataPoints, redline) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var int = 0;
	var timer = 0;
	for (var x=start, ii=0; x<stop; x=x + dropDataPoints, ii=ii+1) {

		setTimeout(function () {
			ctx.canvas.width  = window.innerWidth;
	  		ctx.canvas.height = 800;//window.innerHeight;
	  		ctx.scale(1,1);
				ctx.translate(canvas.width/2, canvas.height/2);//DO PERCENTAGES FOR BALL
				ctx.rotate(-data[start][0]/10);
				// ctx.lineWidth = 2;
				// ctx.beginPath(); ctx.lineTo(1000,0); ctx.lineTo(-1000,0); ctx.stroke(); ctx.closePath();//grid
				// ctx.beginPath(); ctx.lineTo(0,400); ctx.lineTo(0,-200); ctx.stroke(); ctx.closePath();

				function warningMessages() { 
				if (data[start][2] >= 2*g) {//BUMP
					ctx.fillStyle=("red");
					document.getElementById("text-div-bump").innerHTML =
					"- The car went over a large bump (" + data[start][2]/g + "X gravity)";
					$('#text-div-good-driver').hide();
				}
				if (data[start][2] <= 0*g) {//AIRBORNE - BRAKS ON CIRCLE GRAPHIC
					ctx.fillStyle=("red");
					document.getElementById("text-div-airborne").innerHTML =
					"- You are now airborne, goodnight";
					$('#text-div-good-driver').hide();
				}

				if (-data[start][0] >= redline) {//HARD LEFT
					ctx.fillStyle=("red");
					document.getElementById("text-div-hard-left").innerHTML =
					"- Very hard left turn. At " +
					data[start][0] +
					" times the force of gravity, you are risking loss of control: Time/DataPoint - " +
					data[start][0] + "sec/" + int;
					$('#text-div-good-driver').hide();
				}
				if (-data[start][0] < -redline) {//HARD RIGHT
					ctx.fillStyle=("red");
					document.getElementById("text-div-hard-right").innerHTML =
					"- Very hard right turn. At " +
					data[start][0] +
					" times the force of gravity, you are risking loss of control: Time/DataPoint - " +
					data[start][0] + "sec/" + int;
					$('#text-div7').hide();
					$('#text-div-good-driver').hide();
				}

				if (data[start][1] <= -redline) {//BRAKING
					ctx.fillStyle=("red");
					document.getElementById("text-div9").innerHTML =
					"- There was quite a heavy braking event at " +
					data[start][1] +
					" times the force of gravity: Time/DataPoint - " +
					data[start][0] + "sec/" + int;
					$('#text-div-good-driver').hide();
				}
				if (data[start][1] > redline) {//ACCELERATION
					ctx.fillStyle=("red");
					document.getElementById("text-div21").innerHTML =
					"- There was quite a heavy acceleration event at " +
					data[start][1] +
					" times the force of gravity: Time/DataPoint - " +
					data[start][0] + "sec/" + int;
					$('#text-div-good-driver').hide();
				}

				if (data[start][1] < -redline && data[start][0] > redline || data[start][1] < -redline && data[start][0] < -redline) {//HEAVY BRAKING
					ctx.fillStyle=("red");
					document.getElementById("text-div10").innerHTML =
					"***WARNING - USE MORE CAUTION: Heavy braking combined with hard cornering can easily cause you to lose control: (" +
						data[start][1] + "X gravity forward, and " + data[start][0] + "X gravity to the side, while moving at " + data[start][27] + "MPH.";
						$('#text-div-good-driver').hide();
					}
				if (data[start][1] > redline && data[start][0] >= redline || data[start][1] > redline && data[start][0] < -redline) {//HEAVY ACCELERATION
					ctx.fillStyle=("red");
					document.getElementById("text-div22").innerHTML =
					"***WARNING - USE MORE CAUTION: Heavy acceleration combined with hard cornering can easily cause you to lose control: " +
					data[start][1] + "X gravity backward, and " + data[start][0] + "X gravity to the side, while moving at " + data[start][27] + "MPH."
					$('#text-div-good-driver').hide();
				}

				if (data[start][1] > 1*g) {//CRASH AUTO CONTACT HELP************
					document.getElementById("text-div-crash").innerHTML =
					"***ACCIDENT WARNING: It seems that you may have been in an accident. If you press 'OK' you can ignore this message, otherwise your emergency contact will be notified by SMS";
					$('#text-div-good-driver').hide();
				}

				if (data[start][21] > 60) {//SOUND
					document.getElementById("noise-data").innerHTML = "- With the stereo this high, you may not hear the horns of other cars";
				}

				ctx.fillStyle=("black");
				setTimeout(function() {
					document.getElementById("text-div-good-driver").innerHTML = "- So far, driver is doing well. No swerving, heavy braking/acceleration or aggressive turning has been detected.";
				}, 3000);

			}
			warningMessages();

			function carMovementAndPositionVisuals() { 
				ctx.lineWidth = 3;
				if (data[start][0] >= redline || data[start][0] < -redline) { ctx.strokeStyle=("red"); }
				if (data[start][1] >= redline || data[start][1] < -redline) { ctx.strokeStyle=("red"); }
				else {ctx.strokeStyle=("black");}
				if (data[start][2] > 1) { 
					ctx.beginPath(); ctx.arc(0, 0, 1+data[start][2]*multiZ*8, 1+data[start][2]*multiZ*8, Math.PI, true); ctx.stroke();//LARGE Z-CIRCLE
				}

				if (data[start][0] >= redline || data[start][0] < -redline) { ctx.fillStyle=("red"); }
				if (data[start][1] >= redline || data[start][1] < -redline) { ctx.fillStyle=("red"); }
				else {ctx.strokeStyle=("black");}
				if (data[start][2] > 1) {
					ctx.beginPath(); ctx.arc(0, 0, 1+data[start][2]*multiZ, 1+data[start][2]*multiZ, Math.PI, true); ctx.stroke();//Z-CIRCLE
				}

				if (data[start][0] >= redline || data[start][0] < -redline) { ctx.fillStyle=("red"); }
				if (data[start][1] >= redline || data[start][1] < -redline) { ctx.fillStyle=("red"); }
				else {ctx.fillStyle=("black");}
				ctx.beginPath(); ctx.arc(-data[start][0]*multiX, 0,14,14, Math.PI, true); ctx.fill();//G BALL X
				ctx.beginPath(); ctx.arc(0, data[start][1]*multiY,14,14, Math.PI, true); ctx.fill();//G BALL Y
				ctx.lineWidth = 1;

				if (data[start][0] >= redline || data[start][0] < -redline) { ctx.strokeStyle=("red"); }
				if (data[start][1] >= redline || data[start][1] < -redline) { ctx.strokeStyle=("red"); }
				else {ctx.strokeStyle=("black");}
				ctx.lineWidth = 2;
				ctx.beginPath(); ctx.lineTo(data[start][1]*multiY,-200); ctx.lineTo(-data[start][1]*multiY,-200);//EXPANDING Y
				ctx.stroke(); ctx.closePath();

				if (data[start][0] >= 0) {
				ctx.beginPath(); ctx.lineTo(-400, data[start][0]*multiX); ctx.lineTo(-400, -data[start][0]*multiX);//EXPANDING XL
				ctx.stroke(); ctx.closePath();
			}	else {
				ctx.beginPath(); ctx.lineTo(400, -data[start][0]*multiX); ctx.lineTo(400, data[start][0]*multiX);//EXPANDING XR
				ctx.stroke(); ctx.closePath();
			}

			ctx.lineWidth = 2;
			ctx.strokeStyle = "black";
				ctx.beginPath(); ctx.lineTo(1000,0); ctx.lineTo(-1000,0); ctx.stroke(); ctx.closePath();//GRID
				ctx.beginPath(); ctx.lineTo(0,400); ctx.lineTo(0,-200); ctx.stroke(); ctx.closePath();

				start += dropDataPoints;
				int += dropDataPoints;
				timer += 8;
			}
			carMovementAndPositionVisuals();

			function carMovementInWords() { 
				if (data[start][0] > .07*g) { document.getElementById("text-div14").innerHTML = "Turning Right"; }
				else if (data[start][0] < -.07*g) { document.getElementById("text-div14").innerHTML = "Turning Left"; }
				else { document.getElementById("text-div14").innerHTML = "Driving Straight: "; }

				document.getElementById("text-div15").innerHTML = " and "

				if (-data[start][1] > redline) { document.getElementById("text-div16").innerHTML = "Braking Hard"; }//Y IS FLIPPED
				else if (-data[start][1] < -.3*g) { document.getElementById("text-div16").innerHTML = "Accelerating Quickly"; }//Y IS FLIPPED
				else if (-data[start][1] < -.07*g) { document.getElementById("text-div16").innerHTML = "Accelerating"; }//Y IS FLIPPED
				else if (-data[start][1] > .07*g) { document.getElementById("text-div16").innerHTML = "Braking"; }//Y IS FLIPPED
				else { document.getElementById("text-div16").innerHTML = "Coasting"; }
			}
			carMovementInWords();
			
			function  dataRealtimePrintOuts() {
				document.getElementById("text-div1").innerHTML = "Time: " + data[start][33] + ":" + data[start][34] + ":" + data[start][35] + ":" + data[start][36];
				document.getElementById("text-div2").innerHTML = "X:    " + data[start][0];
				document.getElementById("text-div3").innerHTML = "Y:    " + data[start][1];
				document.getElementById("text-div4").innerHTML = "Z:    " + data[start][2];
				document.getElementById("text-div5").innerHTML = "Data Points: " + int;
				document.getElementById("noise-data").innerHTML = "Sound in dB: ";
				document.getElementById("noise-data2").innerHTML = (data[start][21]-80);
				document.getElementById("text-div6").innerHTML = highestAllAxesWithTime(data);//MAX FORCE OF ALL DATA AT TIME
				document.getElementById("speed").innerHTML = "Speed in MPH: " + data[start][27];
				document.getElementById("altitude").innerHTML = "Altitude in ft: " + data[start][24];
			}
			dataRealtimePrintOuts();
		}, 2000+data[ii][31]*dropDataPoints);//MS
}

}
$('#movement-xyz-full').on('click', function() {
	movementXyzFull(dataDownFlagstaff1, 0, 18000, 60, 60, 2, 1, .2*g);
	orientation(dataDownFlagstaff1, 0, 18000, 60, 60, 2, 1, .3*g);
	steeringWheelModel(dataDownFlagstaff1, 0, 18000, 60, 60, 2, 1, .3*g);
	$('video').show();
	// movementXyzFull(dataStandDriveFull2, 0, 4000, 20, 20, 2, 1, .6*g);
	// movementXyzFull(data5MileDownFullSet, 0, 18000, 100, 100, 2, 1, .4*g);//IPAD?
	// document.getElementById("text-div6").innerHTML = "Max: " + highestAllAxesWithTime(data);
});
////////////////////////////////////
/////////////////////////////////////
////////////////////////////////////


function movementXy1Point(data, start, stop, multiX, multiY, dropDataPoints, redline) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var int = 0;
	for (var x=start, ii=0; x<stop; x=x + dropDataPoints, ii=ii+1) {
		setTimeout(function () {
			ctx.canvas.width  = window.innerWidth;
			ctx.canvas.height = window.innerHeight;
			ctx.scale(1,1);
				ctx.translate(canvas.width/2, canvas.height/2);//DO PERCENTAGES FOR BALL
				ctx.rotate(data[start][0]/1);
				ctx.lineTo(2000,0); ctx.lineTo(-1000,0); ctx.stroke(); ctx.closePath(); ctx.beginPath();
				ctx.lineTo(0,200); ctx.lineTo(0,-100); ctx.stroke(); ctx.closePath();
				// ctx.arc(0,0,10,10, Math.PI, true);
				// ctx.fill();
				ctx.beginPath();
				if (data[start][0] >= redline || data[start][0] < -redline) { ctx.fillStyle=("red"); }
				if (data[start][1] >= redline || data[start][1] < -redline) { ctx.fillStyle=("red"); }
				else { ctx.fillStyle=("black") }
					ctx.arc(data[start][0]*multiX, data[start][1]*multiY,10,10, Math.PI, true);
				ctx.fill();

				start += dropDataPoints;
				int += dropDataPoints;

				document.getElementById("text-div1").innerHTML = "Time: " + data[start][32] + ":" + data[start][33] + ":" + data[start][34] + ":" + data[start][35];
				document.getElementById("text-div2").innerHTML = "X:    " + data[start][0];
				document.getElementById("text-div3").innerHTML = "Y:    " + data[start][1];
				document.getElementById("text-div4").innerHTML = "Z:    " + data[start][2];
				document.getElementById("text-div5").innerHTML = "Data Points: " + int;
				// document.getElementById("text-div6").innerHTML = "Max: " + highestAllAxesWithTime(data);
			}, ii*data[ii][0]*880);
}
}
$('#movement-xy-1point').on('click', function() {
	movementXy1Point(data5MileDownFullSet, 0101, 15000, 500, 400, 20, 1, 10);//IPAD?
	// accelXy1pt(dataCanyonDown, 9000, 15000, 300, 300, 1, 1);
	// accelXy1pt(dataStandDrive, 0101, 15000, 300, 300, 20, 1, .7);//VIDEO ON DESKTOP
});



});
