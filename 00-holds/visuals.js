			
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