module.exports = function(canvas, ctx, arr, color, scale, thickness){
  ctx.beginPath()
  ctx.strokeStyle = color
  ctx.moveTo(0, 3*canvas.height/4 - scale * arr[0])
  ctx.lineWidth = thickness
  for(var i = 1; i < arr.length; i++){
    ctx.lineTo(i, 3*canvas.height/4 -  scale * arr[i])
  }
  ctx.stroke()
}
