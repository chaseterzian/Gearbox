$(document).ready(function() {


	function testingGraphics() {
		var canvas = document.getElementById('canvas-testing');
		var ctx = canvas.getContext('2d');
		var int = 0;

		for (var i=0; i<1000; i=i+1) {
			setTimeout(function () {
				ctx.canvas.width  = window.innerWidth;
				ctx.canvas.height = window.innerHeight;
				ctx.scale(1,1);
				ctx.translate(canvas.width/2, canvas.height/2);
	  			// ctx.rotate();
					ctx.beginPath(); ctx.arc(0, 0, i, i, Math.PI, true); ctx.stroke(); ctx.closePath();//WHELL
					ctx.beginPath(); ctx.lineTo(-300,i); ctx.lineTo(300,i); ctx.stroke(); ctx.closePath();
					// ctx.beginPath(); ctx.lineTo(0,-300); ctx.lineTo(0,300); ctx.stroke(); ctx.closePath();
					console.log(i);
				}, i*100);
		}

	}
	$(document).on('ready', function() {
		// testingGraphics();
	});

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




});