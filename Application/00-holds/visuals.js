z// function carModelFromBack2(data, start, stop, multiX, multiY, multiZ, dropDataPoints, redlineX, redlineY, redlineZ) {
// 	var canvas = document.getElementById('car-model-back2');
// 	var ctx = canvas.getContext('2d');
// 	var int = 0;
// 	var timer = 0;
// 	for (var x=start, ii=0; x<stop; x=x + dropDataPoints, ii=ii+1) {
// 		setTimeout(function () {
// 			var dataStable = 1;
// 			var countForStable = 0;
// 			var incForStable = 1;
// 			while (incForStable <= 50) { 
// 				dataStable = dataStable + data[start+incForStable][0];
// 				incForStable++;

// 			} 
// 			dataStable = dataStable/50;

// 			ctx.canvas.width  = window.innerWidth/2;
// 			ctx.canvas.height = window.innerHeight;
// 			ctx.scale(1,1);
// 			ctx.translate(canvas.width/2, canvas.height/2);//DO PERCENTAGES FOR BALL
// 			ctx.rotate(-dataStable/10);

// 	//BODY
// 	ctx.lineWidth = 5;
// 	ctx.beginPath(); ctx.lineTo(-180, 0); ctx.lineTo(180, 0); ctx.stroke(); ctx.closePath();//REAR BUMPER LINE
// 	ctx.beginPath(); ctx.lineTo(-195, -25); ctx.lineTo(-195, -140); ctx.stroke(); ctx.closePath();//L SIDE
// 	ctx.beginPath(); ctx.lineTo(195, -25); ctx.lineTo(195, -140); ctx.stroke(); ctx.closePath();//R SIDE
// 	ctx.beginPath(); ctx.lineTo(-195, -25); ctx.lineTo(-180, 0); ctx.stroke(); ctx.closePath();//L BOTTOM CONNECT
// 	ctx.beginPath(); ctx.lineTo(195, -25); ctx.lineTo(180, 0); ctx.stroke(); ctx.closePath();//R BOTTOM CONNECT
// 	ctx.beginPath(); ctx.lineTo(-195, -140); ctx.lineTo(-165, -250); ctx.stroke(); ctx.closePath();//L SIDE UP
// 	ctx.beginPath(); ctx.lineTo(195, -140); ctx.lineTo(165, -250); ctx.stroke(); ctx.closePath();//R SIDE UP
// 	ctx.beginPath(); ctx.lineTo(-165, -250); ctx.lineTo(-150, -260); ctx.stroke(); ctx.closePath();//L SIDE ROOF CONNECT
// 	ctx.beginPath(); ctx.lineTo(165, -250); ctx.lineTo(150, -260); ctx.stroke(); ctx.closePath();//R SIDE ROOF CONNECT
// 	ctx.beginPath(); ctx.lineTo(-150, -260); ctx.lineTo(150, -260); ctx.stroke(); ctx.closePath();//ROOF
// 	//WINDOW
// 	ctx.lineWidth = 2;
// 	ctx.beginPath(); ctx.lineTo(-170, -150); ctx.lineTo(170, -150); ctx.stroke(); ctx.closePath();//BOTTOM
// 	ctx.beginPath(); ctx.lineTo(-170, -150); ctx.lineTo(-140, -245); ctx.stroke(); ctx.closePath();//L
// 	ctx.beginPath(); ctx.lineTo(170, -150); ctx.lineTo(140, -245); ctx.stroke(); ctx.closePath();//R
// 	ctx.beginPath(); ctx.lineTo(-140, -245); ctx.lineTo(140, -245); ctx.stroke(); ctx.closePath();//TOP
// 	//LIGHTS
// 	ctx.lineWidth = 2;
// 	if (data[start][1] >= redlineY || data[start][1] < -redlineY) { ctx.strokeStyle=("red"); }
// 	else {ctx.strokeStyle=("black");}
// 	ctx.beginPath(); ctx.lineTo(-195, -100); ctx.lineTo(-100, -100); ctx.stroke(); ctx.closePath();//BOTTOM L
// 	ctx.beginPath(); ctx.lineTo(195, -100); ctx.lineTo(100, -100); ctx.stroke(); ctx.closePath();//BOTTOM R
// 	ctx.beginPath(); ctx.lineTo(-100, -100); ctx.lineTo(-100, -140); ctx.stroke(); ctx.closePath();//L
// 	ctx.beginPath(); ctx.lineTo(100, -100); ctx.lineTo(100, -140); ctx.stroke(); ctx.closePath();//R
// 	ctx.beginPath(); ctx.lineTo(-160, -100); ctx.lineTo(-170, -140); ctx.stroke(); ctx.closePath();//L FAR
// 	ctx.beginPath(); ctx.lineTo(160, -100); ctx.lineTo(170, -140); ctx.stroke(); ctx.closePath();//R FAR
// 	ctx.beginPath(); ctx.arc(-120,-120,12,12, Math.PI, true); ctx.fill(); ctx.closePath();
// 	ctx.beginPath(); ctx.arc(-150,-120,12,12, Math.PI, true); ctx.fill(); ctx.closePath();
// 	ctx.beginPath(); ctx.arc(120,-120,12,12, Math.PI, true); ctx.fill(); ctx.closePath();
// 	ctx.beginPath(); ctx.arc(150,-120,12,12, Math.PI, true); ctx.fill(); ctx.closePath();
// 	//BUMPER
// 	ctx.strokeStyle=("black");
// 	ctx.lineWidth = 3;
// 	ctx.beginPath(); ctx.lineTo(-195, -140); ctx.lineTo(195, -140); ctx.stroke(); ctx.closePath();//HATCH LINE
// 	ctx.beginPath(); ctx.lineTo(-195, -30); ctx.lineTo(-55, -30); ctx.stroke(); ctx.closePath();//BUMPER LINE
// 	ctx.beginPath(); ctx.lineTo(195, -30); ctx.lineTo(55, -30); ctx.stroke(); ctx.closePath();//BUMPER LINE
// 	ctx.beginPath(); ctx.lineTo(-55, -30); ctx.lineTo(-40, -0); ctx.stroke(); ctx.closePath();//LICENCE PLATE R
// 	ctx.beginPath(); ctx.lineTo(55, -30); ctx.lineTo(	40, -0); ctx.stroke(); ctx.closePath();//LICENCE PLATE R
// 	ctx.beginPath(); ctx.lineTo(-50, -20); ctx.lineTo(50, -20); ctx.stroke(); ctx.closePath();//SWEET BUMPER EFFECTS
// 	//PLATE
// 	ctx.lineWidth = 2;
// 	ctx.beginPath(); ctx.lineTo(-60, -70); ctx.lineTo(60, -70); ctx.stroke(); ctx.closePath();//
// 	ctx.beginPath(); ctx.lineTo(-60, -50); ctx.lineTo(60, -50); ctx.stroke(); ctx.closePath();//
// 	ctx.beginPath(); ctx.lineTo(-60, -70); ctx.lineTo(-60, -50); ctx.stroke(); ctx.closePath();//
// 	ctx.beginPath(); ctx.lineTo(60, -70); ctx.lineTo(60, -50); ctx.stroke(); ctx.closePath();//
// 	//WHEELS
// 	ctx.lineWidth = 5;
// 	ctx.beginPath(); ctx.lineTo(-180, 0); ctx.lineTo(-180, 20); ctx.stroke(); ctx.closePath();//L
// 	ctx.beginPath(); ctx.lineTo(-120, 0); ctx.lineTo(-120, 20); ctx.stroke(); ctx.closePath();//L
// 	ctx.beginPath(); ctx.lineTo(180, 0); ctx.lineTo(180, 20); ctx.stroke(); ctx.closePath();//R
// 	ctx.beginPath(); ctx.lineTo(120, 0); ctx.lineTo(120, 20); ctx.stroke(); ctx.closePath();//R
// 	ctx.beginPath(); ctx.arc(-150,20,30,0, Math.PI); ctx.stroke(); ctx.closePath();//L WHEEL
// 	ctx.beginPath(); ctx.arc(150,20,30,0, Math.PI); ctx.stroke(); ctx.closePath();//R WHEEL
// 		//TREADS
// 		ctx.lineWidth = 3;	
// 	ctx.beginPath(); ctx.lineTo(-170, 0); ctx.lineTo(-170, 40); ctx.stroke(); ctx.closePath();//L
// 	ctx.beginPath(); ctx.lineTo(-165, 0); ctx.lineTo(-165, 43); ctx.stroke(); ctx.closePath();//L
// 	ctx.beginPath(); ctx.lineTo(-160, 0); ctx.lineTo(-160, 45); ctx.stroke(); ctx.closePath();//L
// 	ctx.beginPath(); ctx.lineTo(-155, 0); ctx.lineTo(-155, 47); ctx.stroke(); ctx.closePath();//L
// 	ctx.beginPath(); ctx.lineTo(-145, 0); ctx.lineTo(-145, 47); ctx.stroke(); ctx.closePath();//L
// 	ctx.beginPath(); ctx.lineTo(-140, 0); ctx.lineTo(-140, 45); ctx.stroke(); ctx.closePath();//L
// 	ctx.beginPath(); ctx.lineTo(-135, 0); ctx.lineTo(-135, 43); ctx.stroke(); ctx.closePath();//L
// 	ctx.beginPath(); ctx.lineTo(-130, 0); ctx.lineTo(-130, 40); ctx.stroke(); ctx.closePath();//L

// 	ctx.beginPath(); ctx.lineTo(170, 0); ctx.lineTo(170, 40); ctx.stroke(); ctx.closePath();//L
// 	ctx.beginPath(); ctx.lineTo(165, 0); ctx.lineTo(165, 43); ctx.stroke(); ctx.closePath();//L
// 	ctx.beginPath(); ctx.lineTo(160, 0); ctx.lineTo(160, 45); ctx.stroke(); ctx.closePath();//L
// 	ctx.beginPath(); ctx.lineTo(155, 0); ctx.lineTo(155, 47); ctx.stroke(); ctx.closePath();//L
// 	ctx.beginPath(); ctx.lineTo(145, 0); ctx.lineTo(145, 47); ctx.stroke(); ctx.closePath();//L
// 	ctx.beginPath(); ctx.lineTo(140, 0); ctx.lineTo(140, 45); ctx.stroke(); ctx.closePath();//L
// 	ctx.beginPath(); ctx.lineTo(135, 0); ctx.lineTo(135, 43); ctx.stroke(); ctx.closePath();//L
// 	ctx.beginPath(); ctx.lineTo(130, 0); ctx.lineTo(130, 40); ctx.stroke(); ctx.closePath();//L

// 		ROAD LINES
// 				ctx.lineWidth = 5;
// 					if (start%2 === 0) { 
// 						console.log(start);
// 						ctx.beginPath(); ctx.lineTo(-330,100); ctx.lineTo(-270,0); ctx.stroke(); ctx.closePath();
// 						ctx.beginPath(); ctx.lineTo(-250,-50); ctx.lineTo(-220,-150); ctx.stroke(); ctx.closePath();
// 						ctx.beginPath(); ctx.lineTo(-200,-200); ctx.lineTo(-185,-250); ctx.stroke(); ctx.closePath();
// 						ctx.beginPath(); ctx.lineTo(-170,-300); ctx.lineTo(-160,-340); ctx.stroke(); ctx.closePath();

// 						ctx.beginPath(); ctx.lineTo(330,100); ctx.lineTo(270,0); ctx.stroke(); ctx.closePath();
// 						ctx.beginPath(); ctx.lineTo(250,-50); ctx.lineTo(220,-150); ctx.stroke(); ctx.closePath();
// 						ctx.beginPath(); ctx.lineTo(200,-200); ctx.lineTo(185,-250); ctx.stroke(); ctx.closePath();
// 						ctx.beginPath(); ctx.lineTo(170,-300); ctx.lineTo(160,-340); ctx.stroke(); ctx.closePath();
// 				}

// 				start += dropDataPoints;
// 				int += dropDataPoints;
// 				timer += 8;

// 			}, 1000+data[ii][31]*dropDataPoints);

// }
// }
		

		var speedInMphWindow = document.getElementById("speed-in-mph-window")//SO I DONT QUERY THE DOM 100 TIMES PER SECOND

		function liveDataPrintOut() { 
			speedInMphEl.innerHTML = "Speed in MPH: " + data[start][27];
			document.getElementById("highest-all-axes-window").innerHTML = highestAllAxesWithTime(data);//MAX FORCE OF ALL DATA AT TIME
			document.getElementById("time-window").innerHTML = "Time: " + data[start][33] + ":" + data[start][34] + ":" + data[start][35] + ":" + data[start][36];
			document.getElementById("sound-level-window").innerHTML = "dB Level: " + (data[start][21]-80);
			document.getElementById("altitude-window").innerHTML = "Altitude in ft: " + data[start][24];
			document.getElementById("x-axis-window").innerHTML = "X:    " + dataStableX;
			document.getElementById("y-axis-window").innerHTML = "Y:    " + dataStableY;
			document.getElementById("z-axis-window").innerHTML = "Z:    " + dataStableZ;
			document.getElementById("data-points-window").innerHTML = "Data Points: " + int;

//////////////////////////////////////////////////////////////			
function carTopView() { 
	ctx.strokeStyle = 'black';
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
	ctx.beginPath(); ctx.lineTo(-150, 310); ctx.lineTo(150, 310); ctx.stroke(); ctx.closePath();//BUMPER FULL LINE
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
	ctx.beginPath(); ctx.arc(-140,-50,33,33,Math.PI, true); ctx.stroke(); ctx.closePath();//FRONT LEFT TIRE 
	// ctx.beginPath(); ctx.arc(-140,-50,32,32,Math.PI, true); ctx.fillStyle = 'blue'; ctx.fill(); ctx.closePath();//FRONT LEFT TIRE 
	ctx.beginPath(); ctx.arc(-140,-50,30,30,Math.PI, true); ctx.stroke(); ctx.closePath();//FRONT LEFT TIRE 
	ctx.beginPath(); ctx.arc(140,-50,33,33,Math.PI, true); ctx.stroke(); ctx.closePath();//FRONT RIGHT TIRE 
	// ctx.beginPath(); ctx.arc(140,-50,32,32,Math.PI, true); ctx.fillStyle = 'blue'; ctx.fill(); ctx.closePath();//FRONT RIGHT TIRE 
	ctx.beginPath(); ctx.arc(140,-50,30,30,Math.PI, true); ctx.stroke(); ctx.closePath();//FRONT RIGHT TIRE 
	ctx.beginPath(); ctx.arc(-140,275,33,33,Math.PI, true); ctx.stroke(); ctx.closePath();//REAR LEFT TIRE 
	// ctx.beginPath(); ctx.arc(-140,275,32,32,Math.PI, true); ctx.fillStyle = 'blue'; ctx.fill(); ctx.closePath();//REAR LEFT TIRE 
	ctx.beginPath(); ctx.arc(-140,275,30,30,Math.PI, true); ctx.stroke(); ctx.closePath();//REAR LEFT TIRE 
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
}
carTopView();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

			function roadVisualForXyzModel() { 
				ctx.lineWidth = 5;
				if (data[start][27] < 1.0) { 
					ctx.beginPath(); ctx.lineTo(-400,-250); ctx.lineTo(-400,-350); ctx.stroke(); ctx.closePath();//ROAD LINES STOPPED
					ctx.beginPath(); ctx.lineTo(-400,-50); ctx.lineTo(-400,-150); ctx.stroke(); ctx.closePath();
					ctx.beginPath(); ctx.lineTo(-400,50); ctx.lineTo(-400,150); ctx.stroke(); ctx.closePath();
					ctx.beginPath(); ctx.lineTo(-400,50); ctx.lineTo(-400,150); ctx.stroke(); ctx.closePath();
					ctx.beginPath(); ctx.lineTo(-400,250); ctx.lineTo(-400,350); ctx.stroke(); ctx.closePath();

					ctx.beginPath(); ctx.lineTo(400,-250); ctx.lineTo(400,-350); ctx.stroke(); ctx.closePath();
					ctx.beginPath(); ctx.lineTo(400,-50); ctx.lineTo(400,-150); ctx.stroke(); ctx.closePath();
					ctx.beginPath(); ctx.lineTo(400,50); ctx.lineTo(400,150); ctx.stroke(); ctx.closePath();
					ctx.beginPath(); ctx.lineTo(400,50); ctx.lineTo(400,150); ctx.stroke(); ctx.closePath();
					ctx.beginPath(); ctx.lineTo(400,250); ctx.lineTo(400,350); ctx.stroke(); ctx.closePath();
				} else { 
					if (start%2 === 0) { 
						ctx.beginPath(); ctx.lineTo(-400,-150); ctx.lineTo(-400,-250); ctx.stroke(); ctx.closePath();//ROAD LINES 3
						ctx.beginPath(); ctx.lineTo(-400,50); ctx.lineTo(-400,-50); ctx.stroke(); ctx.closePath();
						ctx.beginPath(); ctx.lineTo(-400,150); ctx.lineTo(-400,250); ctx.stroke(); ctx.closePath();

						ctx.beginPath(); ctx.lineTo(400,-150); ctx.lineTo(400,-250); ctx.stroke(); ctx.closePath();
						ctx.beginPath(); ctx.lineTo(400,50); ctx.lineTo(400,-50); ctx.stroke(); ctx.closePath();
						ctx.beginPath(); ctx.lineTo(400,150); ctx.lineTo(400,250); ctx.stroke(); ctx.closePath();
					} else { 
						ctx.beginPath(); ctx.lineTo(-400,-250); ctx.lineTo(-400,-350); ctx.stroke(); ctx.closePath();//ROAD LINES 5
						ctx.beginPath(); ctx.lineTo(-400,-50); ctx.lineTo(-400,-150); ctx.stroke(); ctx.closePath();
						ctx.beginPath(); ctx.lineTo(-400,50); ctx.lineTo(-400,150); ctx.stroke(); ctx.closePath();
						ctx.beginPath(); ctx.lineTo(-400,50); ctx.lineTo(-400,150); ctx.stroke(); ctx.closePath();
						ctx.beginPath(); ctx.lineTo(-400,250); ctx.lineTo(-400,350); ctx.stroke(); ctx.closePath();

						ctx.beginPath(); ctx.lineTo(400,-250); ctx.lineTo(400,-350); ctx.stroke(); ctx.closePath();
						ctx.beginPath(); ctx.lineTo(400,-50); ctx.lineTo(400,-150); ctx.stroke(); ctx.closePath();
						ctx.beginPath(); ctx.lineTo(400,50); ctx.lineTo(400,150); ctx.stroke(); ctx.closePath();
						ctx.beginPath(); ctx.lineTo(400,50); ctx.lineTo(400,150); ctx.stroke(); ctx.closePath();
						ctx.beginPath(); ctx.lineTo(400,250); ctx.lineTo(400,350); ctx.stroke(); ctx.closePath();
					}
				}
			}
			roadVisualForXyzModel();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

			function gridForXyzModel() { 
			var xPoints = [600,-600,600,-600,600,-600,600,-600,600,-600,-6,-6,-3,-3,0,0,3,3,6,6];
			var yPoints = [-6,-6,-3,-3,0,0,3,3,6,6,400,-300,400,-300,400,-300,400,-300,400,-300];
			ctx.lineWidth = 5;
			ctx.lineWidth = 1;
			ctx.strokeStyle = "black";
			for (var i=0; i<xPoints.length; i=i+2) { 
				ctx.beginPath(); ctx.lineTo(xPoints[i],yPoints[i]); ctx.lineTo(xPoints[i+1],yPoints[i+1]); ctx.stroke(); ctx.closePath();
			}
				// ctx.beginPath(); ctx.lineTo(600,-6); ctx.lineTo(-600,-6); ctx.stroke(); ctx.closePath();//GRID
				// ctx.beginPath(); ctx.lineTo(600,-3); ctx.lineTo(-600,-3); ctx.stroke(); ctx.closePath();
				// ctx.beginPath(); ctx.lineTo(600,0); ctx.lineTo(-600,0); ctx.stroke(); ctx.closePath();
				// ctx.beginPath(); ctx.lineTo(600,3); ctx.lineTo(-600,3); ctx.stroke(); ctx.closePath();
				// ctx.beginPath(); ctx.lineTo(600,6); ctx.lineTo(-600,6); ctx.stroke(); ctx.closePath();
				// ctx.beginPath(); ctx.lineTo(-6,400); ctx.lineTo(-6,-300); ctx.stroke(); ctx.closePath();
				// ctx.beginPath(); ctx.lineTo(-3,400); ctx.lineTo(-3,-300); ctx.stroke(); ctx.closePath();
				// ctx.beginPath(); ctx.lineTo(0,400); ctx.lineTo(0,-300); ctx.stroke(); ctx.closePath();
				// ctx.beginPath(); ctx.lineTo(3,400); ctx.lineTo(3,-300); ctx.stroke(); ctx.closePath();
				// ctx.beginPath(); ctx.lineTo(6,400); ctx.lineTo(6,-300); ctx.stroke(); ctx.closePath();
			}
			gridForXyzModel();