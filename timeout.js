$(document).ready(function() {

  function nothing() {
    ctx.beginPath();

    for (i=2000; i < 2200; i++) {
      setTimeout(function () {
        ctx.lineTo(sData[i][1] * 1000, sData[i][2] * 500);
        ctx.stroke();
      }, sData[i][0]*1000);

      console.log(sData[i][0]*300);
    }
    ctx.closePath();
  }

});
