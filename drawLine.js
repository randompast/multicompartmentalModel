module.exports = function(canvas, ctx, p1, p2, s){
  ctx.beginPath()
  ctx.moveTo(p1[0] + s/2, p1[1] + s/2)
  ctx.lineWidth = 2
  ctx.lineTo(p2[0] + s/2, p2[1] + s/2)
  ctx.stroke()
}
