$(document).ready(function() {


	g = 9.81;

//////////////////////////////////////////////////////////////////////////////////////////////
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
					document.getElementById("sound-in-db").innerHTML = "- With the stereo this high, you may not hear the horns of other cars";
				}

				ctx.fillStyle=("black");
				setTimeout(function() {
					document.getElementById("text-div-good-driver").innerHTML = "- So far, driver is doing well. No swerving, heavy braking/acceleration or aggressive turning has been detected.";
				}, 3000);

			}
			warningMessages();

			function carMovementAndPositionVisuals() { 
				
				ctx.lineWidth = 1;				
				ctx.beginPath(); ctx.arc(0, 0, 600, 600, Math.PI, true); ctx.stroke(); ctx.closePath();//LARGE Z-CIRCLE
				ctx.beginPath(); ctx.arc(0, 0, 603, 603, Math.PI, true); ctx.stroke(); ctx.closePath();//LARGE Z-CIRCLE
				ctx.beginPath(); ctx.arc(0, 0, 606, 606, Math.PI, true); ctx.stroke(); ctx.closePath();//LARGE Z-CIRCLE
				ctx.beginPath(); ctx.arc(0, 0, 609, 609, Math.PI, true); ctx.stroke(); ctx.closePath();//LARGE Z-CIRCLE
				ctx.beginPath(); ctx.arc(0, 0, 611, 611, Math.PI, true); ctx.stroke(); ctx.closePath();//LARGE Z-CIRCLE

				ctx.lineWidth = 1;
				if (data[start][0] >= redline || data[start][0] < -redline) { ctx.strokeStyle=("red"); }
				if (data[start][1] >= redline || data[start][1] < -redline) { ctx.strokeStyle=("red"); }
				else {ctx.strokeStyle=("black");}
				if (data[start][2] > 1) { 
					ctx.beginPath(); ctx.arc(0, 0, 1+data[start][2]*multiZ*8, 5+data[start][2]*multiZ*8, Math.PI, true); ctx.stroke();//LARGE Z-CIRCLE
					ctx.beginPath(); ctx.arc(0, 0, 6+data[start][2]*multiZ*8, 6+data[start][2]*multiZ*8, Math.PI, true); ctx.stroke();//LARGE Z-CIRCLE
					ctx.beginPath(); ctx.arc(0, 0, 11+data[start][2]*multiZ*8, 11+data[start][2]*multiZ*8, Math.PI, true); ctx.stroke();//LARGE Z-CIRCLE
				}

				if (data[start][0] >= redline || data[start][0] < -redline) { ctx.fillStyle=("red"); }
				if (data[start][1] >= redline || data[start][1] < -redline) { ctx.fillStyle=("red"); }
				else {ctx.strokeStyle=("black");}
				if (data[start][2] > 1) {
					ctx.beginPath(); ctx.arc(0, 0, 1+data[start][2]*multiZ, 1+data[start][2]*multiZ, Math.PI, true); ctx.stroke();//Z-CIRCLE
					// ctx.beginPath(); ctx.arc(0, 0, 6+data[start][2]*multiZ, 6+data[start][2]*multiZ, Math.PI, true); ctx.stroke();//Z-CIRCLE
				}

				if (data[start][0] >= redline || data[start][0] < -redline) { ctx.fillStyle=("red"); }
				if (data[start][1] >= redline || data[start][1] < -redline) { ctx.fillStyle=("red"); }
				else {ctx.fillStyle=("black");}
				ctx.beginPath(); ctx.arc(-data[start][0]*multiX, 0,20,20, Math.PI, true); ctx.fill();//G BALL X
				ctx.beginPath(); ctx.arc(-data[start][0]*multiX, 0,25,25, Math.PI, true); ctx.stroke();//G BALL X
				ctx.beginPath(); ctx.arc(0, data[start][1]*multiY,20,20, Math.PI, true); ctx.fill();//G BALL Y
				ctx.beginPath(); ctx.arc(0, data[start][1]*multiY,25,25, Math.PI, true); ctx.stroke();//G BALL Y
				ctx.lineWidth = 1;

				if (data[start][0] >= redline || data[start][0] < -redline) { ctx.strokeStyle=("red"); }
				if (data[start][1] >= redline || data[start][1] < -redline) { ctx.strokeStyle=("red"); }
				else {ctx.strokeStyle=("black");}
				ctx.lineWidth = 1;
				ctx.beginPath(); ctx.lineTo(data[start][1]*multiY,-300); ctx.lineTo(-data[start][1]*multiY,-300); ctx.stroke(); ctx.closePath();//EXPANDING Y
				ctx.beginPath(); ctx.lineTo(data[start][1]*multiY,-297); ctx.lineTo(-data[start][1]*multiY,-297); ctx.stroke(); ctx.closePath();//EXPANDING Y
				ctx.beginPath(); ctx.lineTo(data[start][1]*multiY,-294); ctx.lineTo(-data[start][1]*multiY,-294); ctx.stroke(); ctx.closePath();//EXPANDING Y
				ctx.beginPath(); ctx.lineTo(data[start][1]*multiY,-291); ctx.lineTo(-data[start][1]*multiY,-291); ctx.stroke(); ctx.closePath();//EXPANDING Y
				ctx.beginPath(); ctx.lineTo(data[start][1]*multiY,-288); ctx.lineTo(-data[start][1]*multiY,-288); ctx.stroke(); ctx.closePath();//EXPANDING Y

				if (data[start][0] >= 0) {
				ctx.beginPath(); ctx.lineTo(-410, data[start][0]*multiX); ctx.lineTo(-410, -data[start][0]*multiX);//EXPANDING XL NON FUNCTIONAL
				ctx.beginPath(); ctx.lineTo(-400, data[start][0]*multiX); ctx.lineTo(-400, -data[start][0]*multiX);//EXPANDING XL
				ctx.stroke(); ctx.closePath();
			}	else {
				ctx.beginPath(); ctx.lineTo(400, -data[start][0]*multiX); ctx.lineTo(400, data[start][0]*multiX);//EXPANDING XR
				ctx.beginPath(); ctx.lineTo(410, -data[start][0]*multiX); ctx.lineTo(410, data[start][0]*multiX);//EXPANDING XR
				ctx.stroke(); ctx.closePath();
			}

			ctx.lineWidth = 1;
			ctx.strokeStyle = "black";
				ctx.beginPath(); ctx.lineTo(600,-6); ctx.lineTo(-600,-6); ctx.stroke(); ctx.closePath();//GRID
				ctx.beginPath(); ctx.lineTo(600,-3); ctx.lineTo(-600,-3); ctx.stroke(); ctx.closePath();//GRID
				ctx.beginPath(); ctx.lineTo(600,0); ctx.lineTo(-600,0); ctx.stroke(); ctx.closePath();//GRID
				ctx.beginPath(); ctx.lineTo(600,3); ctx.lineTo(-600,3); ctx.stroke(); ctx.closePath();//GRID
				ctx.beginPath(); ctx.lineTo(600,6); ctx.lineTo(-600,6); ctx.stroke(); ctx.closePath();//GRID



				ctx.beginPath(); ctx.lineTo(-6,400); ctx.lineTo(-6,-300); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(-3,400); ctx.lineTo(-3,-300); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(0,400); ctx.lineTo(0,-300); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(3,400); ctx.lineTo(3,-300); ctx.stroke(); ctx.closePath();
				ctx.beginPath(); ctx.lineTo(6,400); ctx.lineTo(6,-300); ctx.stroke(); ctx.closePath();


	// ctx.beginPath(); ctx.lineTo(-150, 350); ctx.lineTo(-150, -100); ctx.stroke(); ctx.closePath(); 
	// ctx.beginPath(); ctx.lineTo(150, 350); ctx.lineTo(150, -100); ctx.stroke(); ctx.closePath(); 
	// ctx.beginPath(); ctx.lineTo(-150, 350); ctx.lineTo(150, 350); ctx.stroke(); ctx.closePath(); 

	start += dropDataPoints;
	int += dropDataPoints;
	timer += 8;
}
carMovementAndPositionVisuals();

function carMovementInWords() { 
	if (data[start][0] > .07*g) { document.getElementById("left-right-straight").innerHTML = "Turning Right"; }
	else if (data[start][0] < -.07*g) { document.getElementById("left-right-straight").innerHTML = "Turning Left"; }
	else { document.getElementById("left-right-straight").innerHTML = "Driving Straight"; }

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
				document.getElementById("speed").innerHTML = "Speed in MPH: " + data[start][27];
				document.getElementById("text-div5").innerHTML = "Data Points: " + int;
				document.getElementById("sound-in-db").innerHTML = "dB Level:";
				document.getElementById("noise-data2").innerHTML = (data[start][21]-80);
				// document.getElementById("text-div6").innerHTML = highestAllAxesWithTime(data);//MAX FORCE OF ALL DATA AT TIME
				document.getElementById("altitude").innerHTML = "Altitude in ft: " + data[start][24];
			}
			dataRealtimePrintOuts();
		}, data[ii][31]*dropDataPoints);//MS
}

}
$('#show-all-data-button').on('click', function() {
	movementXyzFull(dataDownFlagstaff1, 0, 18000, 60, 60, 2, 1, 0*g);
	orientation(dataDownFlagstaff1, 0, 18000, 60, 60, 2, 1, .3*g);
	steeringWheelModel(dataDownFlagstaff1, 0, 18000, 60, 60, 2, 2, .3*g);
	$('.hide-this').toggle('hide');
	$('.hide-then-show').show('.hide-then-show');
});

////////////////////////////////////////////////////////////////////////
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
function carModel() {
	var canvas = document.getElementById('canvas-testing');
	var ctx = canvas.getContext('2d');
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = 800;//window.innerHeight;
	ctx.scale(1,1);
	ctx.translate(canvas.width/2, canvas.height/2);

		ctx.lineWidth = 5;
	//BODY
	ctx.beginPath(); ctx.lineTo(-100, -200); ctx.lineTo(100, -200); ctx.stroke(); ctx.closePath();//FRONT BUMPER
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


	//WHEELS
	ctx.lineWidth = 3;
		//FL
	ctx.beginPath(); ctx.arc(-140,-50,33,33,Math.PI, true); ctx.stroke(); ctx.closePath();//FRONT LEFT TIRE 
	ctx.beginPath(); ctx.arc(-140,-50,32,32,Math.PI, true); ctx.fillStyle = 'white'; ctx.fill(); ctx.closePath();//FRONT LEFT TIRE 
	ctx.beginPath(); ctx.arc(-140,-50,30,30,Math.PI, true); ctx.stroke(); ctx.closePath();//FRONT LEFT TIRE 
		//FR
	ctx.beginPath(); ctx.arc(140,-50,33,33,Math.PI, true); ctx.stroke(); ctx.closePath();//FRONT RIGHT TIRE 
	ctx.beginPath(); ctx.arc(140,-50,32,32,Math.PI, true); ctx.fillStyle = 'white'; ctx.fill(); ctx.closePath();//FRONT RIGHT TIRE 
	ctx.beginPath(); ctx.arc(140,-50,30,30,Math.PI, true); ctx.stroke(); ctx.closePath();//FRONT RIGHT TIRE 
		//RL
	ctx.beginPath(); ctx.arc(-140,275,33,33,Math.PI, true); ctx.stroke(); ctx.closePath();//REAR LEFT TIRE 
	ctx.beginPath(); ctx.arc(-140,275,32,32,Math.PI, true); ctx.fillStyle = 'white'; ctx.fill(); ctx.closePath();//REAR LEFT TIRE 
	ctx.beginPath(); ctx.arc(-140,275,30,30,Math.PI, true); ctx.stroke(); ctx.closePath();//REAR LEFT TIRE 
		//RR
	ctx.beginPath(); ctx.arc(140,275,33,33,Math.PI, true); ctx.stroke(); ctx.closePath();//REAR RIGHT TIRE 
	ctx.beginPath(); ctx.arc(140,275,32,32,Math.PI, true); ctx.fillStyle = 'white'; ctx.fill(); ctx.closePath();//REAR RIGHT TIRE 
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




}
$(window).load(function() {
	carModel();
});

/////////////////////////////////////////////////////////////////////////////
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
	  		ctx.rotate((Math.PI/180)*(data[start][0]*10));
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
			}, 2000+data[ii][31]*dropDataPoints);
}
}
$('#wheel-function-button').on('click', function() {
	steeringWheelModel(dataDownFlagstaff1, 0, 18000, 30, 30, 2, 1, .3*g);
});

/////////////////////////////////////////////////////////////////////////////////////////////////
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
				start += dropDataPoints;
				int += dropDataPoints;
				document.getElementById("orientation-in-degrees").innerHTML = 'Orientation: ' + data[start][29];
			}, 2000+data[ii][31]*dropDataPoints);

}
}
$('#orientation-function-button').on('click', function() {
	console.log("insied testnewcanvas jquery");
	orientation(dataDownFlagstaff1, 0, 18000, 60, 60, 2, 1, .3*g);
});

//////////////////////////////////////////////////////////////////////////
function graphicsFunctionOne(data, start, stop, multiZ, dropDataPoints) {
	var canvas = document.getElementById('canvas-testing');
	var ctx = canvas.getContext('2d');
	var int = 0;
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	ctx.translate(canvas.width/2, canvas.height/2);//DO PERCENTAGES FOR BALL
	ctx.scale(.2,.2);
	ctx.beginPath();
	ctx.lineTo(200,0); ctx.lineTo(-100,0); ctx.stroke(); ctx.closePath(); ctx.beginPath();
	ctx.lineTo(0,200); ctx.lineTo(0,-100); ctx.stroke(); ctx.closePath(); ctx.beginPath();
	for (var x=start, ii=0; x<stop; x=x + dropDataPoints, ii=ii+1) {
		setTimeout(function () {
			ctx.lineWidth = 1;
			ctx.beginPath();
			ctx.strokeStyle=("black");
			ctx.lineTo(data[start][1]*multiZ*2, 0);
			// ctx.stroke(); ctx.closePath();
			ctx.lineTo(0, data[start][2]*multiZ);
			ctx.stroke(); ctx.closePath();
			// ctx.lineTo(data[start][3]*multiZ, data[start][3]*(multiZ/2));
			// ctx.stroke(); ctx.closePath();

			start += dropDataPoints;
			int += dropDataPoints;
		}, ii*data[ii][0]*dropDataPoints/10);
	}
}

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
	console.log(latStart);
	console.log(longStart);
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
			console.log("after lines");
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
$('#location-route-function-button').on('click', function() {
	locationAndRouteModel(dataDownFlagstaff1, 0, 18000, 60, 60, 2, 1, .3*g);
});

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
$('#movement-xy-1point').on('click', function() {
	movementXy1Point(data5MileDownFullSet, 0101, 15000, 500, 400, 20, 1, 10);//IPAD?
	// accelXy1pt(dataCanyonDown, 9000, 15000, 300, 300, 1, 1);
	// accelXy1pt(dataStandDrive, 0101, 15000, 300, 300, 20, 1, .7);//VIDEO ON DESKTOP
});
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
function forceXyzForReport(data, start, stop, multiX, multiY, multiZ, multiTime, dropDataPoints) {
	var canvas = document.getElementById('canvas-report');
	var ctx = canvas.getContext('2d');
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	ctx.translate(0, canvas.height/2);//DO PERCENTAGES FOR BALL
	ctx.scale(.1,.1);
	var time = 0;
	for (var i=0; i<stop; i=i + dropDataPoints) {
		ctx.lineWidth = 500;
		ctx.beginPath(); ctx.lineTo(-200,0); ctx.lineTo(100,0); ctx.stroke(); ctx.closePath();//GRID
		ctx.beginPath(); ctx.lineTo(0,200); ctx.lineTo(0,-100); ctx.stroke(); ctx.closePath();//GRID
		ctx.beginPath(); 
		ctx.lineTo(time, data[i][0]*multiX); 
		ctx.lineTo(time+1, data[i][0]*multiX); 
		ctx.stroke(); ctx.closePath();//xPosition
		ctx.beginPath(); 
		ctx.lineTo(time, (data[i][1]*multiY)+2500); 
		ctx.lineTo(time+1, (data[i][1]*multiY)+2500); 
		ctx.stroke(); ctx.closePath();//yPosition

		ctx.beginPath(); 
		ctx.lineTo(time, (data[i][2]*multiZ)-1500);  
		ctx.lineTo(time+1, (data[i][2]*multiZ)-1500);  
		ctx.stroke(); ctx.closePath();
		time++;
	}


}
$('#report-button').on('click', function() {
	// forceXyzTimeXyz(dataSpin3, 900, 2900, 500, 500, 500, 1, 1);
	forceXyzForReport(dataDownFlagstaff1, 0, 10000, 200, 200, 200, 1, 1);
});


});
