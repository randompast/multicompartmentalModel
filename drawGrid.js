module.exports = function(canvas, ctx){
  ctx.fillStyle = "rgba(0,0,0,0.2)"
    //100ms
    for(var i = 0; i < canvas.width/100; i++){
      ctx.fillRect(i*100, 0, 1, canvas.height)
    }
    //100mV
    for(var i = 0; i < canvas.height/100; i++){
      ctx.fillRect(0, i*100 + 3*canvas.height/4 - 100*Math.floor(3*canvas.height/400), canvas.width, 1)
    }
    ctx.fillStyle = "rgba(0,0,0,0.05)"
    for(var i = 0; i < canvas.width/10; i++){
      ctx.fillRect(i*10, 0, 1, canvas.height)
    }
    for(var i = 0; i < canvas.height/10; i++){
      ctx.fillRect(0, i*10 + 3*canvas.height/4 - 10*Math.floor(3*canvas.height/40), canvas.width, 1)
    }
}
