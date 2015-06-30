g = 9.81;
//////////////////////////////////////////////////////////////////////////////////////////////
function movementXyzFull(data, start, stop, multiX, multiY, multiZ, dropDataPoints, redlineX, redlineY, redlineZ) {
	console.time("timer1");
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var int = 0;
	var timer = 0;
	for (var x=start, ii=0; x<stop; x=x + dropDataPoints, ii=ii+1) {

		setTimeout(function () {
			
			
			var dataStableX = 1;
			var dataStableY = 1;
			var dataStableZ = 1;
			var incForStable = 1;
			function stabilizer() { 
				while (incForStable <= 50) { 
					dataStableX = dataStableX + data[start+incForStable][0];
					dataStableY = dataStableY + data[start+incForStable][1];
					dataStableZ = dataStableZ + data[start+incForStable][2];
					incForStable++;
				} 
				dataStableX = dataStableX/50;
				dataStableY = dataStableY/50;
				dataStableZ = dataStableZ/50;
			}
			stabilizer();

			ctx.canvas.width  = window.innerWidth;
			ctx.canvas.height = window.innerHeight;
			ctx.scale(1,1);
			ctx.translate(canvas.width/2, canvas.height/2);//DO PERCENTAGES FOR BALL
			ctx.rotate(dataStableX/6);

	
	function carMovementAndPositionVisuals() { 
				var dataStableX = 1;
				var dataStableY = 1;
				var dataStableZ = 1;
				var incForStable = 1;
				while (incForStable <= 50) { 
					dataStableX = dataStableX + data[start+incForStable][0];
					dataStableY = dataStableY + data[start+incForStable][1];
					dataStableZ = dataStableZ + data[start+incForStable][2];
					incForStable++;
				} 
				dataStableX = dataStableX/50;
				dataStableY = dataStableY/50;
				dataStableZ = dataStableZ/50;

			function largeCircleForXyzModel() { 
				// ctx.lineWidth = 1;				
				// ctx.beginPath(); ctx.arc(0, 0, 600, 600, Math.PI, true); ctx.stroke(); ctx.closePath();//LARGE CIRCLE
				// ctx.beginPath(); ctx.arc(0, 0, 603, 603, Math.PI, true); ctx.stroke(); ctx.closePath();
				// ctx.beginPath(); ctx.arc(0, 0, 606, 606, Math.PI, true); ctx.stroke(); ctx.closePath();
				// ctx.beginPath(); ctx.arc(0, 0, 609, 609, Math.PI, true); ctx.stroke(); ctx.closePath();
				// ctx.beginPath(); ctx.arc(0, 0, 611, 611, Math.PI, true); ctx.stroke(); ctx.closePath();
			}
			largeCircleForXyzModel();

			function largeZCircleForXyzModel() { 	
				ctx.lineWidth = 1;
				// if (data[start][0] >= redlineX || data[start][0] < -redlineX) { ctx.strokeStyle=("red"); }
				// if (data[start][1] >= redlineY || data[start][1] < -redlineY) { ctx.strokeStyle=("red"); }
				if (data[start][2] >= redlineZ || data[start][2] < -redlineZ) { ctx.strokeStyle=("red"); }
				else {ctx.strokeStyle=("black");}
				if (data[start][2] > 1) { 
					ctx.beginPath(); ctx.arc(0, 0, 1+dataStableZ*multiZ*12, 5+dataStableZ*multiZ*12, Math.PI, true); ctx.stroke();//LARGE Z-CIRCLE
					ctx.beginPath(); ctx.arc(0, 0, 6+dataStableZ*multiZ*12, 6+dataStableZ*multiZ*12, Math.PI, true); ctx.stroke();
					ctx.beginPath(); ctx.arc(0, 0, 11+dataStableZ*multiZ*12, 11+dataStableZ*multiZ*12, Math.PI, true); ctx.stroke();
				}
			}
			largeZCircleForXyzModel();

			function zCircleForXyzModel() { 
				if (data[start][0] >= redlineX || data[start][0] < -redlineX) { ctx.fillStyle=("red"); }
				if (data[start][1] >= redlineY || data[start][1] < -redlineY) { ctx.fillStyle=("red"); }
				else {ctx.strokeStyle=("black");}
				if (data[start][2] > 1) {
					ctx.beginPath(); ctx.arc(0, 0, 1+data[start][2]*multiZ, 1+data[start][2]*multiZ, Math.PI, true); ctx.stroke();//Z-CIRCLE
					// ctx.beginPath(); ctx.arc(0, 0, 6+data[start][2]*multiZ, 6+data[start][2]*multiZ, Math.PI, true); ctx.stroke();
				}
			}
			zCircleForXyzModel();

			function xyGBallsForXyzModel() { 
				if (data[start][0] >= redlineX || data[start][0] < -redlineX) { ctx.fillStyle=("red"); }
				else {ctx.fillStyle=("black");}
					ctx.beginPath(); ctx.arc(-dataStableX*multiX, 0,20,20, Math.PI, true); ctx.fill();//G BALL X
					ctx.beginPath(); ctx.arc(-dataStableX*multiX, 0,25,25, Math.PI, true); ctx.stroke();

					if (data[start][1] >= redlineY || data[start][1] < -redlineY) { ctx.fillStyle=("red"); }
					else {ctx.fillStyle=("black");}
					ctx.beginPath(); ctx.arc(0, dataStableY*multiY,20,20, Math.PI, true); ctx.fill();//G BALL Y
					ctx.beginPath(); ctx.arc(0, dataStableY*multiY,25,25, Math.PI, true); ctx.stroke();
					ctx.lineWidth = 1;
				}
				xyGBallsForXyzModel();

			function expandingYLineForXyzModel() { 		
				// if (data[start][0] >= redline || data[start][0] < -redline) { ctx.strokeStyle=("red"); }
				// if (data[start][1] >= redline || data[start][1] < -redline) { ctx.strokeStyle=("red"); }
				// else {ctx.strokeStyle=("black");}
				// ctx.lineWidth = 1;
				// ctx.beginPath(); ctx.lineTo(data[start][1]*multiY,-300); ctx.lineTo(-data[start][1]*multiY,-300); ctx.stroke(); ctx.closePath();//EXPANDING Y
				// ctx.beginPath(); ctx.lineTo(data[start][1]*multiY,-297); ctx.lineTo(-data[start][1]*multiY,-297); ctx.stroke(); ctx.closePath();//EXPANDING Y
				// ctx.beginPath(); ctx.lineTo(data[start][1]*multiY,-294); ctx.lineTo(-data[start][1]*multiY,-294); ctx.stroke(); ctx.closePath();//EXPANDING Y
				// ctx.beginPath(); ctx.lineTo(data[start][1]*multiY,-291); ctx.lineTo(-data[start][1]*multiY,-291); ctx.stroke(); ctx.closePath();//EXPANDING Y
				// ctx.beginPath(); ctx.lineTo(data[start][1]*multiY,-288); ctx.lineTo(-data[start][1]*multiY,-288); ctx.stroke(); ctx.closePath();//EXPANDING Y
			}
			expandingYLineForXyzModel();

			function expandingXLinesForXyzModel() { 
				if (data[start][0] >= 0) {
					ctx.beginPath(); ctx.lineTo(-410, data[start][0]*multiX); ctx.lineTo(-410, -data[start][0]*multiX);//EXPANDING XL
					ctx.beginPath(); ctx.lineTo(-400, data[start][0]*multiX); ctx.lineTo(-400, -data[start][0]*multiX);
					ctx.stroke(); ctx.closePath();
				}	else {
					ctx.beginPath(); ctx.lineTo(400, -data[start][0]*multiX); ctx.lineTo(400, data[start][0]*multiX);//EXPANDING XR
					ctx.beginPath(); ctx.lineTo(410, -data[start][0]*multiX); ctx.lineTo(410, data[start][0]*multiX);
					ctx.stroke(); ctx.closePath();
				}
			}
			expandingXLinesForXyzModel();

			function gridForXyzModel() { 
				var xPoints = [600,-600,600,-600,600,-600,600,-600,600,-600,-6,-6,-3,-3,0,0,3,3,6,6];
				var yPoints = [-6,-6,-3,-3,0,0,3,3,6,6,400,-300,400,-300,400,-300,400,-300,400,-300];
				// ctx.lineWidth = 5;
				ctx.lineWidth = 1;
				ctx.strokeStyle = "black";
				for (var i=0; i<xPoints.length; i=i+2) { 
					ctx.beginPath(); ctx.lineTo(xPoints[i],yPoints[i]); ctx.lineTo(xPoints[i+1],yPoints[i+1]); ctx.stroke(); ctx.closePath();
				}
			}
			gridForXyzModel();

			function roadVisualForXyzModel() { 
				var xPoints = [-400,-400,-400,-400,-400,-400,-400,-400,-400,-400,400,400,400,400,400,400,400,400,400,400];
				var yPoints = [-250,-350,-50,-150,50,150,50,150,250,350,-250,-350,-50,-150,50,150,50,150,250,350];
				ctx.lineWidth = 5;
				if (data[start][27] < 1.0) { 
					for (var i=0; i<xPoints.length; i=i+2) { 
						ctx.beginPath(); ctx.lineTo(xPoints[i],yPoints[i]); ctx.lineTo(xPoints[i+1],yPoints[i+1]); ctx.stroke(); ctx.closePath();
					}
				} else { 
					if (start%2 === 0) { 
						var xPoints2  = [-400,-400,-400,-400,-400,-400,400,400,400,400,400,400];
						var yPoints2 = [-150,-250,50,-50,150,250,-150,-250,50,-50,150,250];
						for (var i=0; i<xPoints.length; i=i+2) { 
							ctx.beginPath(); ctx.lineTo(xPoints2[i],yPoints2[i]); ctx.lineTo(xPoints2[i+1],yPoints2[i+1]); ctx.stroke(); ctx.closePath();
						}
					} else { 
						var xPoints3  = [-400,-400,-400,-400,-400,-400,-400,-400,-400,-400,400,400,400,400,400,400,400,400,400,400];
						var yPoints3 = [-250,-350,-50,-150,50,150,50,150,250,350,-250,-350,-50,-150,50,150,50,150,250,350];
						for (var i=0; i<xPoints.length; i=i+2) { 
							ctx.beginPath(); ctx.lineTo(xPoints3[i],yPoints3[i]); ctx.lineTo(xPoints3[i+1],yPoints3[i+1]); ctx.stroke(); ctx.closePath();
						}
					}
				}
			}
			roadVisualForXyzModel();


			function carTopView() { 
				ctx.strokeStyle = 'black';
				var pointsX = [-100,100,-100,-35,35,100,-35,-25,35,25,-150,-100,150,100,-150,-150,150,150,-150,-130,
											150,130,-150,150,-130,-35,130,35,-35,35,-35,-35,35,35,-105,-105,105,105,-105,-60,
											105,60,-150,-105,-150,-105,-150,-105,150,105,150,105,150,105,-120,-120,-120,-120,120,120,
											120,120,-60,-60,-30,-30,0,0,30,30,60,60,-115,-60,-100,-50,-100,-100,-65,-65,
									  	-60,-50,115,60,100,50,100,100,65,65,60,50,-100,100,-85,85,-100,-85,100,85,
											-85,85,-100,100,-85,-100,85,100];
				var pointsY = [-200,-200,-200,-200,-200,-200,-200,-190,-200,-190,-100,-200,-100,-200,310,-100,310,-100,310,350,
											310,350,310,310,350,350,350,350,330,330,330,350,330,350,280,-77,280,-77,-77,-180,
											-77,-180,0,30,100,120,200,210,0,30,100,120,200,210,85,100,175,190,85,100,
											175,190,48,155,45,152,40,160,45,152,48,155,290,290,310,310,290,310,290,310,
											290,310,290,290,310,310,290,310,290,310,290,310,-40,-40,30,30,-40,30,-40,30,
											170,170,260,260,170,260,170,260];
				var wheels = [0,30,150,0,  0,-40,150,0,  -140,-50,33,33,  -140,-50,30,30,  140,-50,33,33,  140,-50,30,30, 
										-140,275,33,33,  -140,275,30,30,  140,275,33,33,  140,175,30,30,  
										-140,-50,32,32,  140,-50,32,32,  -140,275,32,32, 140,275,32,32];
					for (var i=0; i<pointsX.length; i=i+2){
						if(i>53 && i<=61) { ctx.lineWidth = 4; }
						if(i>61 && i<=71) { ctx.lineWidth = 1; }
						if(i>71 && i<=91) { ctx.lineWidth = 2; }
						if(i>91 && i<=107) { ctx.lineWidth = 5; }
						ctx.beginPath(); ctx.lineTo(pointsX[i], pointsY[i]); ctx.lineTo(pointsX[i+1], pointsY[i+1]); ctx.stroke(); ctx.closePath();//FRONT BUMPER						
					}
					for (var i=0; i<wheels.length; i=i+4) { 
						ctx.lineWidth = 3;
						if( i<=39) { ctx.beginPath(); ctx.arc(wheels[i], wheels[i+1],wheels[i+2],wheels[i+3], Math.PI, true); ctx.stroke(); ctx.closePath(); }
						if(i>39 && i<55) { ctx.beginPath(); ctx.arc(wheels[i],wheels[i+1],wheels[i+2],wheels[i+3],Math.PI, true); ctx.fillStyle = 'black'; ctx.fill(); ctx.closePath(); }
  				}
			}
			carTopView();
	}
	carMovementAndPositionVisuals();


	function carMovementInWords() { 
		var dataStableX = 1;
		var dataStableY = 1;
		var dataStableZ = 1;
		var incForStable = 1;
			while (incForStable <= 50) { 
				dataStableX = dataStableX + data[start+incForStable][0];
				dataStableY = dataStableY + data[start+incForStable][1];
				dataStableZ = dataStableZ + data[start+incForStable][2];
				incForStable++;
			} 
		dataStableX = dataStableX/50;
		dataStableY = dataStableY/50;
		dataStableZ = dataStableZ/50;

		if(data[start][27] > 0) { 
			if (dataStableX > .07*g) { document.getElementById("left-right-straight-window").innerHTML = "Turning Right"; }
			else if (dataStableX < -.07*g) { document.getElementById("left-right-straight-window").innerHTML = "Turning Left"; }
			else { document.getElementById("left-right-straight-window").innerHTML = "Driving Straight"; }

			document.getElementById("and-window").innerHTML = " And "

			if (-dataStableY > redlineY) { document.getElementById("braking-accelerating-in-words").innerHTML = "Braking Hard"; }//Y IS FLIPPED
			else if (-dataStableY < -.3*g) { document.getElementById("braking-accelerating-in-words").innerHTML = "Accelerating Quickly"; }//Y IS FLIPPED
			else if (-dataStableY < -.07*g) { document.getElementById("braking-accelerating-in-words").innerHTML = "Accelerating"; }//Y IS FLIPPED
			else if (-dataStableY > .07*g) { document.getElementById("braking-accelerating-in-words").innerHTML = "Braking"; }//Y IS FLIPPED
			else { document.getElementById("braking-accelerating-in-words").innerHTML = "Coasting"; }
			} else {
			document.getElementById("left-right-straight-window").innerHTML = "Stopped";
		}
	}
	carMovementInWords();


	function  dataRealtimePrintOuts() {
		function stabilizerForDataRealtimePrintOuts() { 
			var dataStableX = 1;
			var dataStableY = 1;
			var dataStableZ = 1;
			var incForStable = 1;
			while (incForStable <= 50) { 
				dataStableX = dataStableX + data[start+incForStable][0];
				dataStableY = dataStableY + data[start+incForStable][1];
				dataStableZ = dataStableZ + data[start+incForStable][2];
				incForStable++;
			} 
			dataStableX = dataStableX/50;
			dataStableY = dataStableY/50;
			dataStableZ = dataStableZ/50;
		}
		stabilizerForDataRealtimePrintOuts();

		function liveDataPrintOut() { 
		var speedInMphWindowElem = document.getElementById("speed-in-mph-window");//SO I DONT QUERY THE DOM 100 TIMES PER SECOND
		// var highestAllAxesWindowELem = document.getElementById("highest-all-axes-window");
		var timeWindowElem = document.getElementById("time-window");
		var soundLevelWindowElem = document.getElementById("sound-level-window");
		var altitudeWindowElem = document.getElementById("altitude-window");
		var xAxisWindowElem = document.getElementById("x-axis-window");
		var yAxisWindowElem = document.getElementById("y-axis-window");
		var zAxisWindowElem = document.getElementById("z-axis-window");
		var dataPointsWindowElem = document.getElementById("data-points-window");
			document.getElementById("highest-all-axes-window").innerHTML = highestAllAxesWithTime(data);//MAX FORCE OF ALL DATA AT TIME
			speedInMphWindowElem.innerHTML = "Speed in MPH: " + data[start][27];
			timeWindowElem.innerHTML = "Time: " + data[start][33] + ":" + data[start][34] + ":" + data[start][35] + ":" + data[start][36];
			soundLevelWindowElem.innerHTML = "dB Level: " + (data[start][21]-80);
			altitudeWindowElem.innerHTML = "Altitude in ft: " + data[start][24];
			xAxisWindowElem.innerHTML = "X:    " + dataStableX;
			yAxisWindowElem.innerHTML = "Y:    " + dataStableY;
			zAxisWindowElem.innerHTML = "Z:    " + dataStableZ;
			dataPointsWindowElem.innerHTML = "Data Points: " + int;
				}
				liveDataPrintOut();

			}
			dataRealtimePrintOuts();
		
			start += dropDataPoints;
			int += dropDataPoints;
			timer += 8;

		}, 1000+data[ii][31]*dropDataPoints);//MS
	}
	console.timeEnd("timer1");
}
////////////////////////////////////////////////////////////////////////
function warningMessages(data, start, stop, multiX, multiY, multiZ, dropDataPoints, redlineX, redlineY, redlineZ) { 
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var int = 0;
	var timer = 0;
		for (var x=start, ii=0; x<stop; x=x + dropDataPoints, ii=ii+1) {
			setTimeout(function () {

				if (data[start][2] >= 2*g) {//BUMP
					ctx.fillStyle=("red");
					document.getElementById("text-div-bump").innerHTML =
					"- The car went over a large bump (" + data[start][2]/g + "m/s^2 toward the road)";
					$('#text-div-good-driver').hide();
				}
				if (data[start][2] <= 0*g) {//AIRBORNE - BRAKS ON CIRCLE GRAPHIC
					ctx.fillStyle=("red");
					document.getElementById("text-div-airborne").innerHTML =
					"- You are now airborne, goodnight";
					$('#text-div-good-driver').hide();
				}
				if (-data[start][0] >= redlineX) {//HARD LEFT
					ctx.fillStyle=("red");
					document.getElementById("text-div-hard-left").innerHTML =
					"- Hard left turn. (" +
						data[start][0] +
						" m/s^2 - Time-in-ms/DataPoint - " +
						data[start][31] + " sec / " + int;
						$('#text-div-good-driver').hide();
				}
				if (-data[start][0] < -redlineX) {//HARD RIGHT
					ctx.fillStyle=("red");
					document.getElementById("text-div-hard-right").innerHTML =
					"- Hard right turn. (" +
						data[start][0] +
						" m/s^2 - Time-in-ms/DataPoint - " +
						data[start][31] + " sec / " + int;
						$('#text-div7').hide();
						$('#text-div-good-driver').hide();
				}
				if (data[start][1] <= -redlineY) {//BRAKING
					ctx.fillStyle=("red");
					document.getElementById("text-div-heavy-braking").innerHTML =
					"- Heavy braking event (" +
						data[start][1] +
						" m/s^2 - Time-in-ms/DataPoint - " +
						data[start][31] + " sec / " + int;
						$('#text-div-good-driver').hide();
				}
				if (data[start][1] > redlineY) {//ACCELERATION
					ctx.fillStyle=("red");
					document.getElementById("text-div-heavy-acceleration").innerHTML =
					"- Heavy acceleration event (" +
						data[start][1] +
						" m/s^2 - Time-in-ms/DataPoint - " +
						data[start][31] + " sec / " + int;
						$('#text-div-good-driver').hide();
				}
				if (data[start][1] < -redlineY && data[start][0] > redlineX || data[start][1] < -redlineY && data[start][0] < -redlineX) {//HEAVY BRAKING
					ctx.fillStyle=("red");
					document.getElementById("text-div-braking-and-cornering").innerHTML =
					"***WARNING - Heavy braking combined with hard cornering: (" +
						data[start][1] + "m/s^2 forward, and " + data[start][0] + "m/2^2 to the side, while moving at " + data[start][27] + " MPH. ";
						$('#text-div-good-driver').hide();
				}
				if (data[start][1] > redlineY && data[start][0] >= redlineX || data[start][1] > redlineY && data[start][0] < -redlineX) {//HEAVY ACCELERATION
					ctx.fillStyle=("red");
					document.getElementById("text-div-acceleration-and-cornering").innerHTML =
					"***WARNING - Heavy acceleration combined with hard cornering: (" +
						data[start][1] + "m/s^2 backward, and " + data[start][0] + " m/2^2 to the side, while moving at " + data[start][27] + " MPH."
						$('#text-div-good-driver').hide();
				}
				if (data[start][1] > 2*g) {//CRASH AUTO CONTACT HELP************
					document.getElementById("text-div-crash").innerHTML =
					"***ACCIDENT WARNING: It seems that you may have been in an accident. Time: " + int;
					$('#text-div-good-driver').hide();
				}
				if (data[start][21] > 125) {//SOUND
					console.log(data[start][21])
					document.getElementById("sound-warning-message").innerHTML = "- With the stereo this high, you may not hear the horns of other cars";
				}

				start += dropDataPoints;
				int += dropDataPoints;
				timer += 8;

			}, 1000+data[ii][31]*dropDataPoints);//MS

			ctx.fillStyle=("black");
			setTimeout(function() {
					document.getElementById("text-div-good-driver").innerHTML = "- Driver is being careful. No swerving, heavy braking/acceleration or aggressive turning has been detected.";
			}, 4000);

	}
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function highestG(data) {//consoleZ max
	var highG = 0;
	for (var i=0; i<data.length; i++) {
		if (highG < data[i][3]) { highG = data[i][3]; }
	}
	return highG;
}
////////////////////////////////////////////////////////////////////////
var highestAllAxesWithTime = function(data) {//consoleXYZ with time
	var dataXYZ = [['X',0,0],['Y',0,0],['Z',0,0]];
	for (var i=0; i<data.length; i++) {
		if (dataXYZ[0][2] < data[i][1]) { dataXYZ[0][2] = data[i][1]; dataXYZ[0][1] = data[i][0]; }
		if (dataXYZ[1][2] < data[i][2]) { dataXYZ[1][2] = data[i][2]; dataXYZ[1][1] = data[i][0]; }
		if (dataXYZ[2][2] < data[i][3]) { dataXYZ[2][2] = data[i][3]; dataXYZ[2][1] = data[i][0]; }
	}
	return "Max: " + dataXYZ[0] + " /// " + dataXYZ[1] + " /// " + dataXYZ[2] + " /// ";
}
/////////////////////////////////////////////////////////////////////////////
function carModelFromBack(data, start, stop, multiX, multiY, multiZ, dropDataPoints, redlineX, redlineY, redlineZ) {
	var canvas = document.getElementById('car-model-back');
	var ctx = canvas.getContext('2d');
	var int = 0;
	var timer = 0;
	for (var x=start, ii=0; x<stop; x=x + dropDataPoints, ii=ii+1) {
		setTimeout(function () {

			var dataStable = 1;
			var countForStable = 0;
			var incForStable = 1;
			while (incForStable <= 30) { 
				dataStable = dataStable + data[start+incForStable][0];
				incForStable++;
			} 
			dataStable = dataStable/30;

			ctx.canvas.width  = window.innerWidth/2;
			ctx.canvas.height = window.innerHeight/2+100;
			ctx.scale(1,1);
			ctx.translate(canvas.width/2, canvas.height/2);//DO PERCENTAGES FOR BALL
			ctx.rotate(-dataStable/15);

			var pointsX = [-180,180,-195,-195,195,195,-195,-180,195,180,-195,-165,195,165,-165,-150,165,150,-150,150,
								-170,170,-170,-140,170,140,-140,140,-170,-170,-165,-165,-160,-160,-155,-155,-145,-145,-140,-140,
								-135,-135,-130,-130,170,170,165,165,160,160,155,155,145,145,140,140,135,135,130,130,
								-195,195,-195,-55,195,55,-55,-40,55,40,-50,50,-60,60,-60,60,-60,-60,60,60,
								-180,-180,-120,-120,180,180,120,120,-195,-100,195,100,-100,-100,100,100,-160,-170,160,170];
			var pointsY = [100,100,75,-40,75,-40,75,100,75,100,-40,-150,-40,-150,-150,-160,-150,-160,-160,-160,
								-50,-50,-50,-145,-50,-145,-145,-145,100,140,100,143,100,145,100,147,100,147,100,145,
								100,143,100,140,100,140,100,143,100,145,100,147,100,147,100,145,100,143,100,140,
								-40,-40,70,70,70,70,70,100,70,100,80,80,30,30,50,50,30,50,30,50,
								100,120,100,120,100,120,100,120,0,0,0,0,0,-40,0,-40,0,-40,0,-40];
			var circles = [-120,-20,12,12,  -150,-20,12,12,  120,-20,12,12,  150,-20,12,12];

			for(var i=0; i<pointsX.length; i=i+2) {
				if (i <= 19) { ctx.lineWidth = 5; }
				if (i>19 && i<=27) { ctx.lineWidth = 2; }
				if (i>27 && i<=71) { ctx.lineWidth = 3; }
				if (i>71 && i<=79) { ctx.lineWidth = 2; }
				if (i>79 && i<=87) { ctx.lineWidth = 5; }
				if (i>87 && i<=99) { ctx.lineWidth = 2; }
					ctx.beginPath(); ctx.lineTo(pointsX[i], pointsY[i]); ctx.lineTo(pointsX[i+1], pointsY[i+1]); ctx.stroke(); ctx.closePath();
			}

			if (data[start][1] < -redlineY) { ctx.strokeStyle=("red"); ctx.fillStyle=("red"); }
			else {ctx.strokeStyle=("black"); ctx.fillStyle=("black"); }
			for(var i=0; i<circles.length; i=i+4) { 
				ctx.beginPath(); ctx.arc(circles[i],circles[i+1],circles[i+2],circles[i+3], Math.PI, true); ctx.fill(); ctx.closePath();
			}

			if (data[start][1] > redlineY) { ctx.strokeStyle=("red"); } 
			else { ctx.strokeStyle=("black"); }
				ctx.lineWidth = 5;
				ctx.beginPath(); ctx.arc(-150,120,30,0, Math.PI); ctx.stroke(); ctx.closePath();//L WHEEL
				ctx.beginPath(); ctx.arc(150,120,30,0, Math.PI); ctx.stroke(); ctx.closePath();//R WHEEL
					start += dropDataPoints;
					int += dropDataPoints;
					timer += 8;	

		}, 1000+data[ii][31]*dropDataPoints);
	}
}
/////////////////////////////////////////////////////////////////////////////
function steeringWheelModel(data, start, stop, multiX, multiY, multiZ, dropDataPoints, redlineX, redlineY, redlineZ) {
	var canvas = document.getElementById('canvas-wheel');
	var ctx = canvas.getContext('2d');
	var int = 0;

	for (var x=start, ii=0; x<stop; x=x + dropDataPoints, ii=ii+1) {
		setTimeout(function () {
			var dataStable = 1;
			var countForStable = 0;
			var incForStable = 1;
			while (incForStable <= 25) { 
				dataStable = dataStable + data[start+incForStable][0];
				incForStable++;

			} 
			dataStable = dataStable/25;


			ctx.canvas.width  = window.innerWidth;
	  		ctx.canvas.height = 800;//window.innerHeight;
	  		ctx.scale(1,1);
	  		ctx.translate(canvas.width/2, canvas.height/2);
	  		ctx.rotate(dataStable/2);
	  		ctx.strokeStyle="black";
	  		ctx.lineWidth = 3;
					ctx.beginPath(); ctx.arc(0, 0, 325, 325, Math.PI, true); ctx.stroke();//COMPASS
	  		ctx.beginPath(); ctx.arc(0, 0, 320, 320, Math.PI, true); ctx.stroke();//COMPASS
	  		ctx.beginPath(); ctx.arc(0, 0, 315, 315, Math.PI, true); ctx.stroke();//COMPASS
	  		ctx.beginPath(); ctx.arc(0, 0, 310, 310, Math.PI, true); ctx.stroke();//COMPASS
	  		ctx.beginPath(); ctx.arc(0, 0, 305, 305, Math.PI, true); ctx.stroke();//COMPASS
				ctx.beginPath(); ctx.arc(0, 0, 300, 300, Math.PI, true); ctx.stroke();//COMPASS
				ctx.beginPath(); ctx.arc(0, 0, 295, 295, Math.PI, true); ctx.stroke();//COMPASS
				ctx.beginPath(); ctx.arc(0, 0, 290, 290, Math.PI, true); ctx.stroke();//COMPASS
				ctx.beginPath(); ctx.arc(0, 0, 285, 285, Math.PI, true); ctx.stroke();//COMPASS
				ctx.beginPath(); ctx.arc(0, 0, 280, 280, Math.PI, true); ctx.stroke();//COMPASS
				ctx.lineWidth = 3;
				ctx.beginPath(); ctx.lineTo(-295,-40); ctx.lineTo(295,-40); ctx.stroke(); ctx.closePath();//X
				ctx.beginPath(); ctx.lineTo(-295,-30); ctx.lineTo(295,-30); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(-295,-20); ctx.lineTo(295,-20); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(-295,-10); ctx.lineTo(295,-10); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(-295,0); ctx.lineTo(295,0); ctx.stroke(); ctx.closePath();
				
				ctx.beginPath(); ctx.lineTo(20,297); ctx.lineTo(20,0); ctx.stroke(); ctx.closePath();//Y
				ctx.beginPath(); ctx.lineTo(10,297); ctx.lineTo(10,0); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(0,297); ctx.lineTo(0,0); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(-10,297); ctx.lineTo(-10,0); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(-20,297); ctx.lineTo(-20,0); ctx.stroke(); ctx.closePath();

				ctx.beginPath(); ctx.lineTo(-150,0); ctx.lineTo(-20,150); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(-140,0); ctx.lineTo(-20,140); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(-130,0); ctx.lineTo(-20,130); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(-120,0); ctx.lineTo(-20,120); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(-110,0); ctx.lineTo(-20,110); ctx.stroke(); ctx.closePath();

				ctx.beginPath(); ctx.lineTo(150,0); ctx.lineTo(20,150); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(140,0); ctx.lineTo(20,140); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(130,0); ctx.lineTo(20,130); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(120,0); ctx.lineTo(20,120); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(110,0); ctx.lineTo(20,110); ctx.stroke(); ctx.closePath();

				// ctx.beginPath(); ctx.lineTo(-295,-3); ctx.lineTo(295,-3); ctx.stroke(); ctx.closePath();
				start += dropDataPoints;
				int += dropDataPoints;
			}, 1000+data[ii][31]*dropDataPoints);
}
}
/////////////////////////////////////////////////////////////////////////////
function steeringWheelModel2(data, start, stop, multiX, multiY, multiZ, dropDataPoints, redlineX, redlineY, redlineZ) {
	var canvas = document.getElementById('canvas-steering-wheel2');
	var ctx = canvas.getContext('2d');
	var int = 0;

	for (var x=start, ii=0; x<stop; x=x + dropDataPoints, ii=ii+1) {
		setTimeout(function () {
			var dataStable = 1;
			var countForStable = 0;
			var incForStable = 1;
			while (incForStable <= 50) { 
				dataStable = dataStable + data[start+incForStable][0];
				incForStable++;

			} 
			dataStable = dataStable/50;


			ctx.canvas.width  = window.innerWidth;
	  		ctx.canvas.height = 800;//window.innerHeight;
	  		ctx.scale(1,1);
	  		ctx.translate(canvas.width/2, canvas.height/2);
	  		ctx.rotate(dataStable*2);
	  		ctx.strokeStyle="black";
	  		ctx.lineWidth = 3;
					ctx.beginPath(); ctx.arc(0, 0, 325, 325, Math.PI, true); ctx.stroke();//COMPASS
	  		ctx.beginPath(); ctx.arc(0, 0, 320, 320, Math.PI, true); ctx.stroke();//COMPASS
	  		ctx.beginPath(); ctx.arc(0, 0, 315, 315, Math.PI, true); ctx.stroke();//COMPASS
	  		ctx.beginPath(); ctx.arc(0, 0, 310, 310, Math.PI, true); ctx.stroke();//COMPASS
	  		ctx.beginPath(); ctx.arc(0, 0, 305, 305, Math.PI, true); ctx.stroke();//COMPASS
				ctx.beginPath(); ctx.arc(0, 0, 300, 300, Math.PI, true); ctx.stroke();//COMPASS
				ctx.beginPath(); ctx.arc(0, 0, 295, 295, Math.PI, true); ctx.stroke();//COMPASS
				ctx.beginPath(); ctx.arc(0, 0, 290, 290, Math.PI, true); ctx.stroke();//COMPASS
				ctx.beginPath(); ctx.arc(0, 0, 285, 285, Math.PI, true); ctx.stroke();//COMPASS
				ctx.beginPath(); ctx.arc(0, 0, 280, 280, Math.PI, true); ctx.stroke();//COMPASS
				ctx.lineWidth = 3;
				ctx.beginPath(); ctx.lineTo(-295,-40); ctx.lineTo(295,-40); ctx.stroke(); ctx.closePath();//X
				ctx.beginPath(); ctx.lineTo(-295,-30); ctx.lineTo(295,-30); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(-295,-20); ctx.lineTo(295,-20); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(-295,-10); ctx.lineTo(295,-10); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(-295,0); ctx.lineTo(295,0); ctx.stroke(); ctx.closePath();
				
				ctx.beginPath(); ctx.lineTo(20,297); ctx.lineTo(20,0); ctx.stroke(); ctx.closePath();//Y
				ctx.beginPath(); ctx.lineTo(10,297); ctx.lineTo(10,0); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(0,297); ctx.lineTo(0,0); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(-10,297); ctx.lineTo(-10,0); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(-20,297); ctx.lineTo(-20,0); ctx.stroke(); ctx.closePath();

				ctx.beginPath(); ctx.lineTo(-150,0); ctx.lineTo(-20,150); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(-140,0); ctx.lineTo(-20,140); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(-130,0); ctx.lineTo(-20,130); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(-120,0); ctx.lineTo(-20,120); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(-110,0); ctx.lineTo(-20,110); ctx.stroke(); ctx.closePath();

				ctx.beginPath(); ctx.lineTo(150,0); ctx.lineTo(20,150); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(140,0); ctx.lineTo(20,140); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(130,0); ctx.lineTo(20,130); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(120,0); ctx.lineTo(20,120); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(110,0); ctx.lineTo(20,110); ctx.stroke(); ctx.closePath();

				// ctx.beginPath(); ctx.lineTo(-295,-3); ctx.lineTo(295,-3); ctx.stroke(); ctx.closePath();
				start += dropDataPoints;
				int += dropDataPoints;
			}, 1000+data[ii][31]*dropDataPoints);
}
}
/////////////////////////////////////////////////////////////////////////////////////////////////
function orientation(data, start, stop, multiX, multiY, multiZ, dropDataPoints, redlineX, redlineY, redlineZ) { 
	var canvas = document.getElementById('canvas-compas');
	var ctx = canvas.getContext('2d');
	var int = 0;
	var direction = 'N';

	for (var x=start, ii=0; x<stop; x=x + dropDataPoints, ii=ii+1) {
		setTimeout(function () {
			ctx.canvas.width  = window.innerWidth;
	  		ctx.canvas.height = 800;//window.innerHeight;
	  		ctx.scale(1,1);
	  		ctx.translate(canvas.width/2, canvas.height/2);
	  		ctx.rotate((Math.PI/180)*data[start][29]);
	  		ctx.strokeStyle="black";
	  		ctx.lineWidth = 1;
	  		ctx.beginPath(); ctx.arc(0, 0, 325, 325, Math.PI, true); ctx.stroke();//COMPASS
	  		ctx.beginPath(); ctx.arc(0, 0, 320, 320, Math.PI, true); ctx.stroke();//COMPASS
	  		ctx.beginPath(); ctx.arc(0, 0, 315, 315, Math.PI, true); ctx.stroke();//COMPASS
	  		ctx.beginPath(); ctx.arc(0, 0, 310, 310, Math.PI, true); ctx.stroke();//COMPASS
	  		ctx.beginPath(); ctx.arc(0, 0, 305, 305, Math.PI, true); ctx.stroke();//COMPASS
				ctx.beginPath(); ctx.arc(0, 0, 300, 300, Math.PI, true); ctx.stroke();//COMPASS
				ctx.beginPath(); ctx.arc(0, 0, 295, 295, Math.PI, true); ctx.stroke();//COMPASS
				ctx.beginPath(); ctx.arc(0, 0, 290, 290, Math.PI, true); ctx.stroke();//COMPASS
				ctx.beginPath(); ctx.arc(0, 0, 285, 285, Math.PI, true); ctx.stroke();//COMPASS
				ctx.beginPath(); ctx.arc(0, 0, 280, 280, Math.PI, true); ctx.stroke();//COMPASS

				ctx.lineWidth = 1;
				ctx.beginPath(); ctx.lineTo(-70,375); ctx.lineTo(0,-300); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(70,375); ctx.lineTo(0,-300); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(-60,375); ctx.lineTo(0,-300); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(60,375); ctx.lineTo(0,-300); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(-50,375); ctx.lineTo(0,-300); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(50,375); ctx.lineTo(0,-300); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(-40,375); ctx.lineTo(0,-300); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(40,375); ctx.lineTo(0,-300); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(-30,375); ctx.lineTo(0,-300); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(30,375); ctx.lineTo(0,-300); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(-20,375); ctx.lineTo(0,-300); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(20,375); ctx.lineTo(0,-300); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(-10,375); ctx.lineTo(0,-300); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(10,375); ctx.lineTo(0,-300); ctx.stroke(); ctx.closePath();
				
				ctx.beginPath(); ctx.lineTo(-400,0); ctx.lineTo(-100,0); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(-400,0); ctx.lineTo(-100,25); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(-400,0); ctx.lineTo(-100,15); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(-400,0); ctx.lineTo(-100,-25); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(-400,0); ctx.lineTo(-100,-15); ctx.stroke(); ctx.closePath();

				ctx.beginPath(); ctx.lineTo(400,0); ctx.lineTo(100,0); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(400,0); ctx.lineTo(100,25); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(400,0); ctx.lineTo(100,15); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(400,0); ctx.lineTo(100,-25); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(400,0); ctx.lineTo(100,-15); ctx.stroke(); ctx.closePath();
				ctx.strokeStyle = 'red';
				ctx.beginPath(); ctx.lineTo(0,-300); ctx.lineTo(0,0); ctx.stroke(); ctx.closePath();
				
				if (data[start][29] >= 337.5 || data[start][29] <= 22.5) { direction = 'N'; } 
				if (data[start][29] > 22.5 && data[start][29] <=67.5 ) { direction = 'NE'; } 
				if (data[start][29] > 67.5 && data[start][29] <=112.5 ) { direction = 'E'; } 
				if (data[start][29] > 112.5 && data[start][29] <=157.5 ) { direction = 'SE'; } 
				if (data[start][29] > 157.5 && data[start][29] <=202.5 ) { direction = 'S'; } 
				if (data[start][29] > 202.5 && data[start][29] <=247.5 ) { direction = 'SW'; } 
				if (data[start][29] > 247.5 && data[start][29] <=292.5 ) { direction = 'W'; } 
				if (data[start][29] > 292.5 && data[start][29] <=337.5 ) { direction = 'NW'; } 

				start += dropDataPoints;
				int += dropDataPoints;
				// document.getElementById("orientation-in-degrees").innerHTML = 'Orientation: ' + data[start][29];
				document.getElementById("heading").innerHTML = 'Direction: ' + direction;
			}, 1000+data[ii][31]*dropDataPoints);
}
}
//////////////////////////////////////////////////////////////////////////
function carModelFromTop(data, start, stop, multiX, multiY, multiZ, dropDataPoints, redline) {
	var canvas = document.getElementById('car-model-top');
	var ctx = canvas.getContext('2d');
	var int = 0;
	var timer = 0;

	for (var x=start, ii=0; x<stop; x=x + dropDataPoints, ii=ii+1) {

		setTimeout(function () {
			ctx.canvas.width  = window.innerWidth/2;
			ctx.canvas.height = window.innerHeight+200;
			ctx.scale(1,1);
				ctx.translate(canvas.width/2, canvas.height/4);//DO PERCENTAGES FOR BALL
				ctx.rotate(-data[start][0]/10);

				ctx.lineWidth = 5;
	//BODY
	ctx.beginPath(); ctx.lineTo(-100, -200); ctx.lineTo(100, -200); ctx.stroke(); ctx.closePath();//FRONT BUMPER
	ctx.beginPath(); ctx.lineTo(-100, -200); ctx.lineTo(-35, -200); ctx.stroke(); ctx.closePath();//FRONT BUMPER
	ctx.beginPath(); ctx.lineTo(35, -200); ctx.lineTo(100, -200); ctx.stroke(); ctx.closePath();//FRONT BUMPER
	ctx.beginPath(); ctx.lineTo(-35, -200); ctx.lineTo(-25, -190); ctx.stroke(); ctx.closePath();//FRONT BUMPER
	ctx.beginPath(); ctx.lineTo(35, -200); ctx.lineTo(25, -190); ctx.stroke(); ctx.closePath();//FRONT BUMPER

	ctx.beginPath(); ctx.arc(0, -40,150,0, Math.PI, true); ctx.stroke(); ctx.closePath();//FRONT HALF CIRCLE
	ctx.beginPath(); ctx.lineTo(-150, -100); ctx.lineTo(-100, -200); ctx.stroke(); ctx.closePath();//FRONT LEFT FENDER 
	ctx.beginPath(); ctx.lineTo(150, -100); ctx.lineTo(100, -200); ctx.stroke(); ctx.closePath();//FRONT RIGHT FENDER 
	ctx.beginPath(); ctx.lineTo(-150, 310); ctx.lineTo(-150, -100); ctx.stroke(); ctx.closePath();//LEFT SIDE
	ctx.beginPath(); ctx.lineTo(150, 310); ctx.lineTo(150, -100); ctx.stroke(); ctx.closePath();//RIGHT SIDE 
	ctx.beginPath(); ctx.lineTo(-150, 310); ctx.lineTo(-130, 350); ctx.stroke(); ctx.closePath();//LEFT SIDE BUMPER CONNECT
	ctx.beginPath(); ctx.lineTo(150, 310); ctx.lineTo(130, 350); ctx.stroke(); ctx.closePath();//RIGHT SIDE BUMPER CONNECT
	ctx.beginPath(); ctx.lineTo(-150, 310); ctx.lineTo(150, 310); ctx.stroke(); ctx.closePath();//BUMPER FULL LINE*************
	ctx.beginPath(); ctx.lineTo(-130, 350); ctx.lineTo(-35, 350); ctx.stroke(); ctx.closePath();//REAR BUMPER L
	ctx.beginPath(); ctx.lineTo(130, 350); ctx.lineTo(35, 350); ctx.stroke(); ctx.closePath();//REAR BUMPER L
	ctx.beginPath(); ctx.lineTo(-35, 330); ctx.lineTo(35, 330); ctx.stroke(); ctx.closePath();//REAR BUMPER PLATE HOLDER
	ctx.beginPath(); ctx.lineTo(-35, 330); ctx.lineTo(-35, 350); ctx.stroke(); ctx.closePath();//REAR PLATE L
	ctx.beginPath(); ctx.lineTo(35, 330); ctx.lineTo(35, 350); ctx.stroke(); ctx.closePath();//REAR PLATE R
	//BODY LINES
	ctx.lineWidth = 1;
		//SIDES
	ctx.beginPath(); ctx.lineTo(-105, 280); ctx.lineTo(-105, -77); ctx.stroke(); ctx.closePath();//LEFT SIDE
	ctx.beginPath(); ctx.lineTo(105, 280); ctx.lineTo(105, -77); ctx.stroke(); ctx.closePath();//RIGHT SIDE
	ctx.beginPath(); ctx.arc(0, 30,150,0, Math.PI, true); ctx.stroke(); ctx.closePath();//FRONT HALF CIRCLE
		//FRONT
	ctx.beginPath(); ctx.lineTo(-105, -77); ctx.lineTo(-60, -180); ctx.stroke(); ctx.closePath();//L SIDE
	ctx.beginPath(); ctx.lineTo(105, -77); ctx.lineTo(60, -180); ctx.stroke(); ctx.closePath();//R SIDE
		//DOORS
	ctx.beginPath(); ctx.lineTo(-150, 0); ctx.lineTo(-105, 30); ctx.stroke(); ctx.closePath();//LEFT DOOR	
	ctx.beginPath(); ctx.lineTo(-150, 100); ctx.lineTo(-105, 120); ctx.stroke(); ctx.closePath();//LEFT DOOR
	ctx.beginPath(); ctx.lineTo(-150, 200); ctx.lineTo(-105, 210); ctx.stroke(); ctx.closePath();//LEFT DOOR
	ctx.beginPath(); ctx.lineTo(150, 0); ctx.lineTo(105, 30); ctx.stroke(); ctx.closePath();//RIGHT DOOR		
	ctx.beginPath(); ctx.lineTo(150, 100); ctx.lineTo(105, 120); ctx.stroke(); ctx.closePath();//RIGHT DOOR
	ctx.beginPath(); ctx.lineTo(150, 200); ctx.lineTo(105, 210); ctx.stroke(); ctx.closePath();//RIGHT DOOR
		//DOOR HANDLES
		ctx.lineWidth = 4;
	ctx.beginPath(); ctx.lineTo(-120, 85); ctx.lineTo(-120, 100); ctx.stroke(); ctx.closePath();//L DOOR HANDLE
	ctx.beginPath(); ctx.lineTo(-120, 175); ctx.lineTo(-120, 190); ctx.stroke(); ctx.closePath();//L DOOR	HANDLE
	ctx.beginPath(); ctx.lineTo(120, 85); ctx.lineTo(120, 100); ctx.stroke(); ctx.closePath();//R DOOR HANDLE
	ctx.beginPath(); ctx.lineTo(120, 175); ctx.lineTo(120, 190); ctx.stroke(); ctx.closePath();//R DOOR	HANDLE
		//ROOF
		ctx.lineWidth = 1;
	ctx.beginPath(); ctx.lineTo(-60,48); ctx.lineTo(-60,155);	ctx.stroke(); ctx.closePath();//TOP
	ctx.beginPath(); ctx.lineTo(-30,45); ctx.lineTo(-30,152);	ctx.stroke(); ctx.closePath();//TOP
	ctx.beginPath(); ctx.lineTo(0,40); ctx.lineTo(0,160);	ctx.stroke(); ctx.closePath();//TOP
	ctx.beginPath(); ctx.lineTo(30,45); ctx.lineTo(30,152);	ctx.stroke(); ctx.closePath();//TOP
	ctx.beginPath(); ctx.lineTo(60,48); ctx.lineTo(60,155);	ctx.stroke(); ctx.closePath();//TOP
		//LIGHTS
		ctx.lineWidth = 2;
	ctx.beginPath(); ctx.lineTo(-120,290); ctx.lineTo(-60,290);	ctx.stroke(); ctx.closePath();//TOP
	ctx.beginPath(); ctx.lineTo(-100,310); ctx.lineTo(-50,310);	ctx.stroke(); ctx.closePath();//BOTTOM
	ctx.beginPath(); ctx.lineTo(-100,290); ctx.lineTo(-100,310);	ctx.stroke(); ctx.closePath();//L
	ctx.beginPath(); ctx.lineTo(-65,290); ctx.lineTo(-65,310);	ctx.stroke(); ctx.closePath();//L
	ctx.beginPath(); ctx.lineTo(-60,290); ctx.lineTo(-50,310);	ctx.stroke(); ctx.closePath();//L

	ctx.beginPath(); ctx.lineTo(120,290); ctx.lineTo(60,290);	ctx.stroke(); ctx.closePath();//TOP
	ctx.beginPath(); ctx.lineTo(100,310); ctx.lineTo(50,310);	ctx.stroke(); ctx.closePath();//BOTTOM
	ctx.beginPath(); ctx.lineTo(100,290); ctx.lineTo(100,310);	ctx.stroke(); ctx.closePath();//R
	ctx.beginPath(); ctx.lineTo(65,290); ctx.lineTo(65,310);	ctx.stroke(); ctx.closePath();//R
	ctx.beginPath(); ctx.lineTo(60,290); ctx.lineTo(50,310);	ctx.stroke(); ctx.closePath();//R
	//WHEELS
	ctx.lineWidth = 3;
		//FL
	ctx.beginPath(); ctx.arc(-140,-50,33,33,Math.PI, true); ctx.stroke(); ctx.closePath();//FRONT LEFT TIRE 
	// ctx.beginPath(); ctx.arc(-140,-50,32,32,Math.PI, true); ctx.fillStyle = 'blue'; ctx.fill(); ctx.closePath();//FRONT LEFT TIRE 
	ctx.beginPath(); ctx.arc(-140,-50,30,30,Math.PI, true); ctx.stroke(); ctx.closePath();//FRONT LEFT TIRE 
		//FR
	ctx.beginPath(); ctx.arc(140,-50,33,33,Math.PI, true); ctx.stroke(); ctx.closePath();//FRONT RIGHT TIRE 
	// ctx.beginPath(); ctx.arc(140,-50,32,32,Math.PI, true); ctx.fillStyle = 'blue'; ctx.fill(); ctx.closePath();//FRONT RIGHT TIRE 
	ctx.beginPath(); ctx.arc(140,-50,30,30,Math.PI, true); ctx.stroke(); ctx.closePath();//FRONT RIGHT TIRE 
		//RL
	ctx.beginPath(); ctx.arc(-140,275,33,33,Math.PI, true); ctx.stroke(); ctx.closePath();//REAR LEFT TIRE 
	// ctx.beginPath(); ctx.arc(-140,275,32,32,Math.PI, true); ctx.fillStyle = 'blue'; ctx.fill(); ctx.closePath();//REAR LEFT TIRE 
	ctx.beginPath(); ctx.arc(-140,275,30,30,Math.PI, true); ctx.stroke(); ctx.closePath();//REAR LEFT TIRE 
		//RR
	ctx.beginPath(); ctx.arc(140,275,33,33,Math.PI, true); ctx.stroke(); ctx.closePath();//REAR RIGHT TIRE 
	// ctx.beginPath(); ctx.arc(140,275,32,32,Math.PI, true); ctx.fillStyle = 'blue'; ctx.fill(); ctx.closePath();//REAR RIGHT TIRE 
	ctx.beginPath(); ctx.arc(140,275,30,30,Math.PI, true); ctx.stroke(); ctx.closePath();//REAR RIGHT TIRE 
	//WINDOWS
	ctx.lineWidth = 5;
		//FRONT
	ctx.beginPath(); ctx.lineTo(-100,-40); ctx.lineTo(100,-40);	ctx.stroke(); ctx.closePath();//BOTTOM
	ctx.beginPath(); ctx.lineTo(-85,30); ctx.lineTo(85,30);	ctx.stroke(); ctx.closePath();//TOP
	ctx.beginPath(); ctx.lineTo(-100,-40); ctx.lineTo(-85,30);	ctx.stroke(); ctx.closePath();//L
	ctx.beginPath(); ctx.lineTo(100,-40); ctx.lineTo(85,30);	ctx.stroke(); ctx.closePath();//R
		//BACK
	ctx.beginPath(); ctx.lineTo(-85,170); ctx.lineTo(85,170);	ctx.stroke(); ctx.closePath();//TOP
	ctx.beginPath(); ctx.lineTo(-100,260); ctx.lineTo(100,260);	ctx.stroke(); ctx.closePath();//BOTTOM
	ctx.beginPath(); ctx.lineTo(-85,170); ctx.lineTo(-100,260);	ctx.stroke(); ctx.closePath();//L
	ctx.beginPath(); ctx.lineTo(85,170); ctx.lineTo(100,260);	ctx.stroke(); ctx.closePath();//R

		start += dropDataPoints;
		int += dropDataPoints;
		timer += 8;
		}, 1000+data[ii][31]*dropDataPoints);
	}
}
//////////////////////////////////////////////////////////////////////////
// function graphicsFunctionOne(data, start, stop, multiZ, dropDataPoints) {
// 	var canvas = document.getElementById('canvas-testing');
// 	var ctx = canvas.getContext('2d');
// 	var int = 0;
// 	ctx.canvas.width  = window.innerWidth;
// 	ctx.canvas.height = window.innerHeight;
// 	ctx.translate(canvas.width/2, canvas.height/2);//DO PERCENTAGES FOR BALL
// 	ctx.scale(.2,.2);
// 	ctx.beginPath();
// 	ctx.lineTo(200,0); ctx.lineTo(-100,0); ctx.stroke(); ctx.closePath(); ctx.beginPath();
// 	ctx.lineTo(0,200); ctx.lineTo(0,-100); ctx.stroke(); ctx.closePath(); ctx.beginPath();
// 	for (var x=start, ii=0; x<stop; x=x + dropDataPoints, ii=ii+1) {
// 		setTimeout(function () {
// 			ctx.lineWidth = 1;
// 			ctx.beginPath();
// 			ctx.strokeStyle=("black");
// 			ctx.lineTo(data[start][1]*multiZ*2, 0);
// 			// ctx.stroke(); ctx.closePath();
// 			ctx.lineTo(0, data[start][2]*multiZ);
// 			ctx.stroke(); ctx.closePath();
// 			// ctx.lineTo(data[start][3]*multiZ, data[start][3]*(multiZ/2));
// 			// ctx.stroke(); ctx.closePath();

// 			start += dropDataPoints;
// 			int += dropDataPoints;
// 		}, ii*data[ii][0]*dropDataPoints/10);
// 	}
// }
////////////////////////////////////////////////////////////////////////////////////////////////////
function latitudeStartingPoint(data, start, stop, multiX, multiY, multiZ, dropDataPoints, redline) { 
	var arrLatStartLeft = [];
	var arrLatForStart = [];
	for (var x=start; x<stop; x=x+dropDataPoints) { 
		if (data[start][22] !== undefined && data[start][22] !== NaN && arrLatForStart.length === 0) { 
			arrLatStartLeft.push(data[start][22]);
			arrLatStartLeft = arrLatStartLeft.join().split('.');
			arrLatForStart.push(parseFloat(arrLatStartLeft[0]));
		}
		start += dropDataPoints;
	}
	return arrLatForStart;
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function longitudeStartingPoint(data, start, stop, multiX, multiY, multiZ, dropDataPoints, redline) { 
	var arrLongForStart = [];
	var arrLongStartLeft = [];
	for (var x=start; x<stop; x=x+dropDataPoints) { 
		// if (data[start][23] !== undefined && data[start][23] !== NaN && arrLongForStart.length === 0) { 
			if (arrLongForStart.length === 0) { 
				arrLongStartLeft.push(data[start][23]);
				arrLongStartLeft = arrLongStartLeft.join().split('.');
			arrLongForStart.push(parseFloat(arrLongStartLeft[0]));//it is not getting to these numbers
		}
		start += dropDataPoints;
	}
	return arrLongForStart;
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function locationAndRouteModel(data, start, stop, multiX, multiY, multiZ, dropDataPoints, redline) {
	var latStart = latitudeStartingPoint(data, start, stop, multiX, multiY, multiZ, dropDataPoints, redline);
	var longStart = longitudeStartingPoint(data, start, stop, multiX, multiY, multiZ, dropDataPoints, redline);
	var canvas = document.getElementById('canvas-location');
	var ctx = canvas.getContext('2d');
	var int = 0;

	for (var x=start, ii=0; x<stop; x=x + dropDataPoints, ii=ii+1) {
		setTimeout(function () {
			ctx.canvas.width  = window.innerWidth;
			ctx.canvas.height = window.innerHeight;
			ctx.scale(.001,.001);
			ctx.translate(canvas.width*500, canvas.height);
			ctx.lineWidth = 500;
	  	// ctx.beginPath(); ctx.lineTo(1000,0); ctx.lineTo(-1000,0); ctx.stroke(); ctx.closePath();//GRID
	  	// ctx.beginPath(); ctx.lineTo(0,4000); ctx.lineTo(0,-200); ctx.stroke(); ctx.closePath();
	 		ctx.beginPath(); ctx.arc(0,0,1000,1000, Math.PI, true); ctx.fill();//G BALL X
			// var arrLat = [];
			// var arrLatLeft = [];
			// var arrLatRight = [];
			// var arrLong = [];
			// var arrLongLeft = [];
			// var arrLongRight = [];

			// arrLat.push(data[start][22]);
			// arrLat = arrLat.join().split('.');
			// arrLatLeft.push(parseFloat(arrLat[0]));
			// arrLatRight.push(parseFloat("." + arrLat[1]));
			// arrLong.push(data[start][23]);
			// arrLong = arrLong.join().split('.');
			// arrLongLeft.push(parseFloat(arrLong[0]));
			// arrLongRight.push(parseFloat("." + arrLong[1]));
			
			// ctx.beginPath(); ctx.lineTo(1000,0); ctx.lineTo(-1000,0); ctx.stroke(); ctx.closePath();
			// ctx.beginPath(); ctx.lineTo(0,1000); ctx.lineTo(0,4000); ctx.stroke(); ctx.closePath();
			// ctx.beginPath(); ctx.lineTo(1000, 5000); ctx.lineTo(-1000,5000); ctx.stroke(); ctx.closePath();
			// ctx.beginPath(); ctx.lineTo(1000,10000); ctx.lineTo(-1000,10000); ctx.stroke(); ctx.closePath();
			// cartesianLayout();
			// console.log("after lines");
			// ctx.beginPath(); 
	  	// ctx.lineTo(arrLatRight*10000,-arrLongRight*10000);//(Y REVERSE
	  		// ctx.fillStyle = 'black';
	  	ctx.beginPath(); ctx.arc(data[start][22]*10000, -data[start][23]*10000,10000,10000, Math.PI, true); ctx.fill();//G BALL X
	    // ctx.lineTo(arrLatRight*10000,-arrLongRight*10000);//(Y REVERSE
	  	// ctx.lineTo(,); 
	  	// ctx.fill(); 
	  	// ctx.closePath();
			// console.log(arrLatRight*1000);
			start += dropDataPoints;
			int += dropDataPoints;
		}, data[ii][31]*dropDataPoints);
	}

}
///////////////////////////////////////////////////////////////////////////////////////
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
			}, ii*data[ii][0]*880);
	}
}
//////////////////////////////////////////////////////////////////////////////////////
function forceXyzForReport(data, start, stop, multiX, multiY, multiZ, dropDataPoints, redlineX, redlineY, redlineZ) {
	var canvas = document.getElementById('canvas-report');
	var ctx = canvas.getContext('2d');
	ctx.canvas.width  = window.innerWidth/2;
	ctx.scale(1,1);
	ctx.translate(canvas.width/2, canvas.height/2);//DO PERCENTAGES FOR BALL
	ctx.scale(.1,.1);
	var time = 0;
	for (var i=0; i<stop; i=i + dropDataPoints) {
		ctx.lineWidth = 500;
		ctx.beginPath(); ctx.lineTo(-200,0); ctx.lineTo(100,0); ctx.stroke(); ctx.closePath();//GRID
		ctx.beginPath(); ctx.lineTo(0,200); ctx.lineTo(0,-100); ctx.stroke(); ctx.closePath();//GRID
		ctx.beginPath(); 
		ctx.lineTo(time, data[i][0]*multiX); 
		ctx.lineTo(time+1, data[i+1][0]*multiX); 
		ctx.stroke(); ctx.closePath();//xPosition
		ctx.beginPath(); 
		ctx.lineTo(time, (data[i][1]*multiY)+2500); 
		ctx.lineTo(time+1, (data[i+1][1]*multiY)+2500); 
		ctx.stroke(); ctx.closePath();//yPosition

		ctx.beginPath(); 
		ctx.lineTo(time, (data[i][2]*multiZ)-1500);  
		ctx.lineTo(time+1, (data[i+1][2]*multiZ)-1500);  
		ctx.stroke(); ctx.closePath();
		time++;
	}
 
}
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {

	$('#test-functions-button').on('click', function() {
		alert('hello');
	});


	$('form').on('submit', function(e) {
		e.preventDefault();
		var parameterData = [dataDownFlagstaff1, 0, 18000, 60, 60, 2, 1, 3, 4, 15, 50];//
		var fileContents = [];
		$('#run-program-button').show();
		
		var startInput=parseInt(document.getElementById('testing-input-start-point').value);
		var endInput=parseInt(document.getElementById('testing-input-end-point').value);
		var multiX=parseInt(document.getElementById('testing-input-multix').value);
		var multiY=parseInt(document.getElementById('testing-input-multiy').value);
		var multiZ=parseInt(document.getElementById('testing-input-multiz').value);
		var dataPoints=parseInt(document.getElementById('testing-input-data-points').value);
		var redlineX=parseInt(document.getElementById('testing-input-redline-x').value);
		var redlineY=parseInt(document.getElementById('testing-input-redline-y').value);
		var redlineZ=parseInt(document.getElementById('testing-input-redline-z').value);
		fileContents.push(document.getElementById('testing-input-file-contents').value);
		if (startInput !== parameterData[1] && startInput > 0) { parameterData[1] = startInput; }
		if (endInput !== parameterData[2] && endInput > 0) { parameterData[2] = endInput; }
		if (multiX !== parameterData[3] && multiX > 0) { parameterData[3] = multiX; }
		if (multiY !== parameterData[4] && multiY > 0) { parameterData[4] = multiY; }
		if (multiZ !== parameterData[5] && multiZ > 0) { parameterData[5] = multiZ; }
		if (dataPoints !== parameterData[6] && dataPoints > 0) { parameterData[6] = dataPoints; }
		if (redlineX !== parameterData[7] && redlineX > 0) { parameterData[7] = redlineX; }
		if (redlineY !== parameterData[8] && redlineY > 0) { parameterData[8] = redlineY; }
		if (redlineZ !== parameterData[9] && redlineZ > 0) { parameterData[9] = redlineZ; }

		document.getElementById("set-parameters-window").innerHTML = "Profile Loaded";
		document.getElementById("parameter-input-submit-button").innerHTML = "Run Program";
		console.log(parameterData);
		console.log(fileContents);
		sessionStorage.setItem("UserChoices", parameterData);
		console.log(sessionStorage);
		console.log(localStorage);

		$('#run-program-button').on('click', function() {
			movementXyzFull(parameterData[0], parameterData[1], 
				parameterData[2], parameterData[3], 
				parameterData[4], parameterData[5], 
				parameterData[6], parameterData[7], 
				parameterData[8], parameterData[9]);	
			orientation(parameterData[0], parameterData[1], 
				parameterData[2], parameterData[3], 
				parameterData[4], parameterData[5], 
				parameterData[6]);				
			steeringWheelModel(parameterData[0], parameterData[1], 
				parameterData[2], parameterData[3], 
				parameterData[4], parameterData[5], 
				parameterData[6], parameterData[7]); 
			carModelFromBack(parameterData[0], parameterData[1], 
				parameterData[2], parameterData[3], 
				parameterData[4], parameterData[5], 
				parameterData[6], parameterData[7], 
				parameterData[8], parameterData[9]);

			$('.hide-this').toggle('hide');
			$('.hide-then-show').show('.hide-then-show');
			$('video').toggle('show');
			setTimeout(function() { 
				$('video').get(0).play()
			}, 1600);
		});
	});
	
	$('#show-all-data-button').on('click', function() {
		movementXyzFull(dataDownFlagstaff1, 0, 18000, 60,60,2, 1, 3,1,15);
		orientation(dataDownFlagstaff1, 0, 18000, 60,60,2, 1);
		steeringWheelModel(dataDownFlagstaff1, 0, 18000, 60, 60, 2, 2);
		carModelFromBack(dataDownFlagstaff1, 0, 18000, 60,60,2, 1, 3,1,15 );
		warningMessages(dataDownFlagstaff1, 0, 18000, 60,60,2, 1, 3,1,15); 
		$('.hide-this').toggle('hide');
		$('.hide-then-show').show('.hide-then-show');
		$('video').toggle('show');
		setTimeout(function() { 
			$('video').get(0).play()
		}, 1700);
	});

	$('#car-model-back-button').on('click', function() {
		$('datacontent').hide()
		$('carmodelback').show();
		carModelFromBack2(dataDownFlagstaff1, 1, 18000, 1, .1*g);
	});

	$('#wheel-function-button').on('click', function() {
		steeringWheelModel2(dataDownFlagstaff1, 0, 18000, 30, 30, 2, 1, .3*g);
		$('datacontent').toggle('hide');
		// $('carmodelback').toggle('hide');
		// $('carmodeltop').toggle('hide');
		$('wheelmodel').toggle('show');
	});

	$('#orientation-function-button').on('click', function() {
		// console.log("insied testnewcanvas jquery");
		orientation(dataDownFlagstaff1, 0, 18000, 60, 60, 2, 1, .3*g);
	});

	$('#car-model-top-button').on('click', function() {
		carModelFromTop(dataDownFlagstaff1, 1000, 18000, 60, 60, 2, 2, .3*g);
		$('datacontent').hide();
		$('carmodeltop').show();
	});

	$('#location-route-function-button').on('click', function() {
		locationAndRouteModel(dataDownFlagstaff1, 0, 18000, 60, 60, 2, 1, .3*g);
	});

	$('#movement-xy-1point').on('click', function() {
		movementXy1Point(data5MileDownFullSet, 0101, 15000, 500, 400, 20, 1, 10);//IPAD?
		// accelXy1pt(dataCanyonDown, 9000, 15000, 300, 300, 1, 1);
		// accelXy1pt(dataStandDrive, 0101, 15000, 300, 300, 20, 1, .7);//VIDEO ON DESKTOP
	});

	$('#report-button').on('click', function() {
		// forceXyzTimeXyz(dataSpin3, 900, 2900, 500, 500, 500, 1, 1);
		forceXyzForReport(dataDownFlagstaff1, 0, 10000, 200, 200, 200, 1, 1);
	});


});
