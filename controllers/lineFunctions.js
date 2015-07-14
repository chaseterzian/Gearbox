// $('document').ready(function { 
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function highestG(data) {//consoleZ max
	var highG = 0;
	for (var i=0; i<data.length; i++) {
		if (highG < data[i][3]) { highG = data[i][3]; }
	}
	return highG;
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function highestG(data) {//consoleZ max
	var highG = 0;
	for (var i=0; i<data.length; i++) {
		if (highG < data[i][3]) { highG = data[i][3]; }
	}
	return highG;
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