module.exports = function(canvas, ctx){
  ctx.fillStyle = "rgba(0,0,0,0.2)"
    //100ms
    for(var i = 0; i < canvas.width/100; i++){
      ctx.fillRect(i*100, 0, 1, canvas.height)
    }
    //100mV
    for(var i = 0; i < canvas.height/100; i++){
      ctx.fillRect(0, i*100, canvas.width, 1)
    }
}
