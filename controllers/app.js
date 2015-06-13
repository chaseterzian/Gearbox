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
// require("../data/data5MileDownFullSet.js");
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
//////////////////////////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////////////
// ctx.bezierCurveTo(88,96,87,99,87,101);
// ctx.quadraticCurveTo(20,250,250,620.50);
//TASK - IMPORT DATA CONVERSION
//HTML IMPOT METHOD

function movementXyz(data, start, stop, multiX, multiY, multiZ, dropDataPoints, redline) {
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
				ctx.rotate(data[start][1]/1);
				// ctx.lineWidth = 2;
				// ctx.beginPath(); ctx.lineTo(1000,0); ctx.lineTo(-1000,0); ctx.stroke(); ctx.closePath();//grid
				// ctx.beginPath(); ctx.lineTo(0,400); ctx.lineTo(0,-200); ctx.stroke(); ctx.closePath();

				if (data[start][3] >= 1.2) {//BUMP
					ctx.fillStyle=("red");
					document.getElementById("text-div-bump").innerHTML =
					"- That was a " + data[start][3] + " hit, consider checking your car for damage";
				}
				if (data[start][3] <= 0) {//AIRBORNE - BRAKS ON CIRCLE GRAPHIC
					ctx.fillStyle=("red");
					document.getElementById("text-div-airborne").innerHTML =
					"- You are now airborne, goodnight";
				}

				if (data[start][1] >= redline) {//HARD LEFT
					ctx.fillStyle=("red");
					document.getElementById("text-div-hard-left").innerHTML =
						"- Very hard left turn. At " +
						data[start][1] +
						" times the force of gravity, you are risking loss of control: Time/DataPoint - " +
						data[start][0] + "sec/" + int;
						$('#text-div-good-driver').hide();
				}
				if (data[start][1] < -redline) {//HARD RIGHT
					ctx.fillStyle=("red");
					document.getElementById("text-div-hard-right").innerHTML =
						"- Very hard right turn. At " +
						data[start][1] +
						" times the force of gravity, you are risking loss of control: Time/DataPoint - " +
						data[start][0] + "sec/" + int;
						$('#text-div7').hide();
				}

				if (data[start][2] <= -redline) {//BRAKING
					ctx.fillStyle=("red");
					document.getElementById("text-div9").innerHTML =
						"- There was quite a heavy braking event at " +
						data[start][2] +
						" times the force of gravity: Time/DataPoint - " +
						data[start][0] + "sec/" + int;
				}
				if (data[start][2] > redline) {//ACCELERATION
					ctx.fillStyle=("red");
					document.getElementById("text-div21").innerHTML =
						"- There was quite a heavy acceleration event at " +
						data[start][2] +
						" times the force of gravity: Time/DataPoint - " +
						data[start][0] + "sec/" + int;
				}

				if (data[start][2] < -redline && data[start][1] > redline || data[start][2] < -redline && data[start][1] < -redline) {//HEAVY BRAKING
					ctx.fillStyle=("red");
					document.getElementById("text-div10").innerHTML =
						"***WARNING - USE MORE CAUTION: Heavy braking combined with hard cornering can easily cause you to lose control: Time/DataPoint - " +
						data[start][0] + "sec/" + int;
				}
				if (data[start][2] > redline && data[start][1] >= redline || data[start][2] > redline && data[start][1] < -redline) {//HEAVY ACCELERATION
					ctx.fillStyle=("red");
					document.getElementById("text-div22").innerHTML =
						"***WARNING - USE MORE CAUTION: Heavy acceleration combined with hard cornering can easily cause you to lose control: Time/DataPoint - " +
					data[start][0] + "sec/" + int;
				}

				ctx.fillStyle=("black");
				setTimeout(function() {
				  document.getElementById("text-div-good-driver").innerHTML = "- So far, driver is doing well. No swerving, heavy braking/acceleration or aggressive turning has been detected.";
				}, 3000);

				if (data[start][2] > 1) {//CRASH AUTO CONTACT HELP************
					document.getElementById("text-div-crash").innerHTML =
					"***ACCIDENT WARNING: It seems that you may have been in an accident. If you press 'OK' you can ignore this message, otherwise your emergency contact will be notified by SMS";
				}

				if (data[start][1] >= redline || data[start][1] < -redline) { ctx.fillStyle=("red"); }
				if (data[start][2] >= redline || data[start][2] < -redline) { ctx.fillStyle=("red"); }
				else {ctx.fillStyle=("black");}
				ctx.beginPath(); ctx.arc(0, 0, data[start][3]*multiZ*8, data[start][3]*multiZ*8, Math.PI, true); ctx.fill();//LARGE Z-CIRCLE
				ctx.fillStyle=("white");
				ctx.beginPath(); ctx.arc(0, 0, (data[start][3]*multiZ*8)-1, (data[start][3]*multiZ*8)-1, Math.PI, true); ctx.fill();//white

				if (data[start][1] >= redline || data[start][1] < -redline) { ctx.fillStyle=("red"); }
				if (data[start][2] >= redline || data[start][2] < -redline) { ctx.fillStyle=("red"); }
				else {ctx.fillStyle=("black");}
	// if (data[start][3] < 0) {
				ctx.beginPath(); ctx.arc(0, 0, data[start][3]*multiZ, data[start][3]*multiZ, Math.PI, true); ctx.fill();//Z-CIRCLE
				ctx.fillStyle=("white");
				ctx.beginPath(); ctx.arc(0, 0, (data[start][3]*multiZ)-2, (data[start][3]*multiZ)-2, Math.PI, true); ctx.fill();//white
	// } else {
	// }
				if (data[start][1] >= redline || data[start][1] < -redline) { ctx.fillStyle=("red"); }
				if (data[start][2] >= redline || data[start][2] < -redline) { ctx.fillStyle=("red"); }
				else {ctx.fillStyle=("black");}
				ctx.beginPath(); ctx.arc(data[start][1]*multiX, 0,10,10, Math.PI, true); ctx.fill();//G BALL X
				ctx.beginPath(); ctx.arc(0, data[start][2]*multiY,10,10, Math.PI, true); ctx.fill();//G BALL Y
				ctx.lineWidth = 1;

				if (data[start][1] >= redline || data[start][1] < -redline) { ctx.strokeStyle=("red"); }
				if (data[start][2] >= redline || data[start][2] < -redline) { ctx.strokeStyle=("red"); }
				else {ctx.strokeStyle=("black");}
				ctx.lineWidth = 2;
				ctx.beginPath(); ctx.lineTo(data[start][2]*multiY,-200); ctx.lineTo(-data[start][2]*multiY,-200);//EXPANDING Y
				ctx.stroke(); ctx.closePath();

				if (data[start][1] <= 0) {
				ctx.beginPath(); ctx.lineTo(-400, data[start][1]*multiX); ctx.lineTo(-400, -data[start][1]*multiX);//EXPANDING XL
				ctx.stroke(); ctx.closePath();
			}	else {
				ctx.beginPath(); ctx.lineTo(400, -data[start][1]*multiX); ctx.lineTo(400, data[start][1]*multiX);//EXPANDING XR
				ctx.stroke(); ctx.closePath();
			}

				ctx.lineWidth = 2;
				ctx.strokeStyle = "black";
				ctx.beginPath(); ctx.lineTo(1000,0); ctx.lineTo(-1000,0); ctx.stroke(); ctx.closePath();//grid
				ctx.beginPath(); ctx.lineTo(0,400); ctx.lineTo(0,-200); ctx.stroke(); ctx.closePath();

				start += dropDataPoints;
				int += dropDataPoints;
				timer += 8;

				if (data[start][1] > .05) { document.getElementById("text-div14").innerHTML = "Turning Left"; }
				else if (data[start][1] < -.05) { document.getElementById("text-div14").innerHTML = "Turning Right"; }
				else { document.getElementById("text-div14").innerHTML = "Driving Straight: "; }

				document.getElementById("text-div15").innerHTML = " and "

				if (-data[start][2] > redline) { document.getElementById("text-div16").innerHTML = "Braking Hard"; }//Y IS FLIPPED
				else if (-data[start][2] < -.3) { document.getElementById("text-div16").innerHTML = "Accelerating Quickly"; }//Y IS FLIPPED
				else if (-data[start][2] < -.05) { document.getElementById("text-div16").innerHTML = "Accelerating"; }//Y IS FLIPPED
				else if (-data[start][2] > .05) { document.getElementById("text-div16").innerHTML = "Braking"; }//Y IS FLIPPED
				else { document.getElementById("text-div16").innerHTML = "Coasting"; }

				if (data[start][3] > 1.1) {
					document.getElementById("text-div17").innerHTML = "- Consider turning your music down, at this voulme you may not be able to hear the horn of another car";
				} else {
				}

				//if DB level too loud - "consider turning down the stereo, st this volume you may not hear the horn of another car"
				document.getElementById("text-div1").innerHTML = "Time: " + data[start][0];
				document.getElementById("text-div2").innerHTML = "X:    " + data[start][1];
				document.getElementById("text-div3").innerHTML = "Y:    " + data[start][2];
				document.getElementById("text-div4").innerHTML = "Z:    " + data[start][3];
				document.getElementById("text-div5").innerHTML = "Data Points: " + int;
				document.getElementById("text-div17").innerHTML = "In Car Noise Level: " + Math.round(data[start][3]*100)/4; + "Db";
				document.getElementById("text-div6").innerHTML = highestAllAxesWithTime(data);//MAX AT TIME
		}, 2000+(ii+data[ii][0]*880) );//weird scope behavior inside setTimeout 'time' argument ii*data[ii][0]+10
	}

}
$('#movement-xyz').on('click', function() {
	// accelXy2pts(data5MileDown, 9000, 15000, 300, 300, 20, 1, .5);
	// accelXy2pts(dataAccelAndBrake, 101, 2900, 300, 300, 20, 1, .5);
	movementXyz(dataStandDrive, 0101, 15000, 300, 300, 20, 1, .7);//VIDEO ON DESKTOP
	// accelXy2pts(data5MileDownFullSet, 0101, 15000, 300, 300, 20, 1, .7);//IPAD?
	// accelXy2pts(dataUnknown, 0101, 15000, 300, 300, 20, 1, .7);//IPAD?
	document.getElementById("text-div6").innerHTML = "Max: " + highestAllAxesWithTime(data);

});
//////////////////////////////////
/////////////////////////////////////
//////////////////////////////////
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
				ctx.rotate(data[start][0]/5);
				// ctx.lineWidth = 2;
				// ctx.beginPath(); ctx.lineTo(1000,0); ctx.lineTo(-1000,0); ctx.stroke(); ctx.closePath();//grid
				// ctx.beginPath(); ctx.lineTo(0,400); ctx.lineTo(0,-200); ctx.stroke(); ctx.closePath();

				if (data[start][3] >= 1.2) {//BUMP
					ctx.fillStyle=("red");
					document.getElementById("text-div-bump").innerHTML =
					"- That was a " + data[start][3] + " hit, consider checking your car for damage";
				}
				if (data[start][3] <= 0) {//AIRBORNE - BRAKS ON CIRCLE GRAPHIC
					ctx.fillStyle=("red");
					document.getElementById("text-div-airborne").innerHTML =
					"- You are now airborne, goodnight";
				}

				if (data[start][1] >= redline) {//HARD LEFT
					ctx.fillStyle=("red");
					document.getElementById("text-div-hard-left").innerHTML =
						"- Very hard left turn. At " +
						data[start][1] +
						" times the force of gravity, you are risking loss of control: Time/DataPoint - " +
						data[start][0] + "sec/" + int;
						$('#text-div-good-driver').hide();
				}
				if (data[start][1] < -redline) {//HARD RIGHT
					ctx.fillStyle=("red");
					document.getElementById("text-div-hard-right").innerHTML =
						"- Very hard right turn. At " +
						data[start][1] +
						" times the force of gravity, you are risking loss of control: Time/DataPoint - " +
						data[start][0] + "sec/" + int;
						$('#text-div7').hide();
				}

				if (data[start][2] <= -redline) {//BRAKING
					ctx.fillStyle=("red");
					document.getElementById("text-div9").innerHTML =
						"- There was quite a heavy braking event at " +
						data[start][2] +
						" times the force of gravity: Time/DataPoint - " +
						data[start][0] + "sec/" + int;
				}
				if (data[start][2] > redline) {//ACCELERATION
					ctx.fillStyle=("red");
					document.getElementById("text-div21").innerHTML =
						"- There was quite a heavy acceleration event at " +
						data[start][2] +
						" times the force of gravity: Time/DataPoint - " +
						data[start][0] + "sec/" + int;
				}

				if (data[start][2] < -redline && data[start][1] > redline || data[start][2] < -redline && data[start][1] < -redline) {//HEAVY BRAKING
					ctx.fillStyle=("red");
					document.getElementById("text-div10").innerHTML =
						"***WARNING - USE MORE CAUTION: Heavy braking combined with hard cornering can easily cause you to lose control: Time/DataPoint - " +
						data[start][0] + "sec/" + int;
				}
				if (data[start][2] > redline && data[start][1] >= redline || data[start][2] > redline && data[start][1] < -redline) {//HEAVY ACCELERATION
					ctx.fillStyle=("red");
					document.getElementById("text-div22").innerHTML =
						"***WARNING - USE MORE CAUTION: Heavy acceleration combined with hard cornering can easily cause you to lose control: Time/DataPoint - " +
					data[start][0] + "sec/" + int;
				}

				ctx.fillStyle=("black");
				setTimeout(function() {
				  document.getElementById("text-div-good-driver").innerHTML = "- So far, driver is doing well. No swerving, heavy braking/acceleration or aggressive turning has been detected.";
				}, 3000);

				if (data[start][2] > 1) {//CRASH AUTO CONTACT HELP************
					document.getElementById("text-div-crash").innerHTML =
					"***ACCIDENT WARNING: It seems that you may have been in an accident. If you press 'OK' you can ignore this message, otherwise your emergency contact will be notified by SMS";
				}

	// 			if (data[start][1] >= redline || data[start][1] < -redline) { ctx.fillStyle=("red"); }
	// 			if (data[start][2] >= redline || data[start][2] < -redline) { ctx.fillStyle=("red"); }
	// 			else {ctx.fillStyle=("black");}
	// 			ctx.beginPath(); ctx.arc(0, 0, data[start][3]*multiZ*8, data[start][3]*multiZ*8, Math.PI, true); ctx.fill();//LARGE Z-CIRCLE
	// 			ctx.fillStyle=("white");
	// 			ctx.beginPath(); ctx.arc(0, 0, (data[start][3]*multiZ*8)-1, (data[start][3]*multiZ*8)-1, Math.PI, true); ctx.fill();//white

	// 			if (data[start][1] >= redline || data[start][1] < -redline) { ctx.fillStyle=("red"); }
	// 			if (data[start][2] >= redline || data[start][2] < -redline) { ctx.fillStyle=("red"); }
	// 			else {ctx.fillStyle=("black");}
	// // if (data[start][3] < 0) {
	// 			ctx.beginPath(); ctx.arc(0, 0, data[start][3]*multiZ, data[start][3]*multiZ, Math.PI, true); ctx.fill();//Z-CIRCLE
	// 			ctx.fillStyle=("white");
	// 			ctx.beginPath(); ctx.arc(0, 0, (data[start][3]*multiZ)-2, (data[start][3]*multiZ)-2, Math.PI, true); ctx.fill();//white
	// // } else {
	// // }
				if (data[start][1] >= redline || data[start][1] < -redline) { ctx.fillStyle=("red"); }
				if (data[start][2] >= redline || data[start][2] < -redline) { ctx.fillStyle=("red"); }
				else {ctx.fillStyle=("black");}
				ctx.beginPath(); ctx.arc(data[start][1]*multiX, 0,10,10, Math.PI, true); ctx.fill();//G BALL X
				ctx.beginPath(); ctx.arc(0, data[start][2]*multiY,10,10, Math.PI, true); ctx.fill();//G BALL Y
				ctx.lineWidth = 1;

				if (data[start][1] >= redline || data[start][1] < -redline) { ctx.strokeStyle=("red"); }
				if (data[start][2] >= redline || data[start][2] < -redline) { ctx.strokeStyle=("red"); }
				else {ctx.strokeStyle=("black");}
				ctx.lineWidth = 2;
				ctx.beginPath(); ctx.lineTo(data[start][2]*multiY,-200); ctx.lineTo(-data[start][2]*multiY,-200);//EXPANDING Y
				ctx.stroke(); ctx.closePath();

				if (data[start][1] <= 0) {
				ctx.beginPath(); ctx.lineTo(-400, data[start][1]*multiX); ctx.lineTo(-400, -data[start][1]*multiX);//EXPANDING XL
				ctx.stroke(); ctx.closePath();
			}	else {
				ctx.beginPath(); ctx.lineTo(400, -data[start][1]*multiX); ctx.lineTo(400, data[start][1]*multiX);//EXPANDING XR
				ctx.stroke(); ctx.closePath();
			}

				ctx.lineWidth = 2;
				ctx.strokeStyle = "black";
				ctx.beginPath(); ctx.lineTo(1000,0); ctx.lineTo(-1000,0); ctx.stroke(); ctx.closePath();//grid
				ctx.beginPath(); ctx.lineTo(0,400); ctx.lineTo(0,-200); ctx.stroke(); ctx.closePath();

				start += dropDataPoints;
				int += dropDataPoints;
				timer += 8;

				if (data[start][1] > .05) { document.getElementById("text-div14").innerHTML = "Turning Left"; }
				else if (data[start][1] < -.05) { document.getElementById("text-div14").innerHTML = "Turning Right"; }
				else { document.getElementById("text-div14").innerHTML = "Driving Straight: "; }

				document.getElementById("text-div15").innerHTML = " and "

				if (-data[start][2] > redline) { document.getElementById("text-div16").innerHTML = "Braking Hard"; }//Y IS FLIPPED
				else if (-data[start][2] < -.3) { document.getElementById("text-div16").innerHTML = "Accelerating Quickly"; }//Y IS FLIPPED
				else if (-data[start][2] < -.05) { document.getElementById("text-div16").innerHTML = "Accelerating"; }//Y IS FLIPPED
				else if (-data[start][2] > .05) { document.getElementById("text-div16").innerHTML = "Braking"; }//Y IS FLIPPED
				else { document.getElementById("text-div16").innerHTML = "Coasting"; }

				if (data[start][3] > 1.1) {
					document.getElementById("text-div17").innerHTML = "- Consider turning your music down, at this voulme you may not be able to hear the horn of another car";
				} else {
				}

				//if DB level too loud - "consider turning down the stereo, st this volume you may not hear the horn of another car"
				document.getElementById("text-div1").innerHTML = "Time: " + data[start][32] + ":" + data[start][33] + ":" + data[start][34] + ":" + data[start][35];
				document.getElementById("text-div2").innerHTML = "X:    " + data[start][1];
				document.getElementById("text-div3").innerHTML = "Y:    " + data[start][2];
				document.getElementById("text-div4").innerHTML = "Z:    " + data[start][3];
				document.getElementById("text-div5").innerHTML = "Data Points: " + int;
				document.getElementById("text-div17").innerHTML = "In Car Noise Level: " + Math.round(data[start][3]*100)/4; + "Db";
				document.getElementById("text-div6").innerHTML = highestAllAxesWithTime(data);//MAX AT TIME
		}, ((data[ii][34]*1000)+data[ii][35])*3 );
	}

}
$('#movement-xyz-full').on('click', function() {
	// accelXy2pts(data5MileDown, 9000, 15000, 300, 300, 20, 1, .5);
	// accelXy2pts(dataAccelAndBrake, 101, 2900, 300, 300, 20, 1, .5);
	// accelXy2pts(dataStandDrive, 0101, 15000, 300, 300, 20, 1, .7);//VIDEO ON DESKTOP
	movementXyzFull(data5MileDownFullSet, 0101, 15000, 1, 1, 1, 1, 1*9.81);//IPAD?
	// accelXy2pts(dataUnknown, 0101, 15000, 300, 300, 20, 1, .7);//IPAD?
	document.getElementById("text-div6").innerHTML = "Max: " + highestAllAxesWithTime(data);

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
	movementXy1Point(data5MileDownFullSet, 0101, 15000, 300, 300, 20, 1, 10);//IPAD?
	// accelXy1pt(dataCanyonDown, 9000, 15000, 300, 300, 1, 1);
	// accelXy1pt(dataStandDrive, 0101, 15000, 300, 300, 20, 1, .7);//VIDEO ON DESKTOP
});

//////////////////////////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////////////////////
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
			ctx.lineWidth = 1;
			ctx.beginPath();
			ctx.strokeStyle=("black");
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
	testZ(dataCanyonDown, 101, 15000, 1000, 10);
});

//////////////////////////////////////////////////////////////////////////////////////////////
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


});
