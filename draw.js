var drawLine = require("./drawLine.js")
module.exports = function(canvas, ctx, posArr, colors, connections, rSoma, rDendrite, isel, jsel){
  var somaSize = rSoma/2
  var denSize = rDendrite*15
//Draw Soma
  ctx.fillStyle = colors[0]
  ctx.beginPath()
  ctx.arc(posArr[0][0]+denSize/2, posArr[0][1]+denSize/2, somaSize*2, 0, Math.PI*2)
  ctx.fill()

  ctx.strokeStyle = "black"
  ctx.beginPath()
  ctx.arc(posArr[isel][0]+denSize/2, posArr[isel][1]+denSize/2, denSize, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(posArr[jsel][0]+denSize/2, posArr[jsel][1]+denSize/2, denSize, 0, Math.PI*2)
  ctx.stroke()

  for (var i = 0; i < posArr.length; i++){
    ctx.fillStyle = colors[i]
    ctx.strokeStyle = colors[i]
    connections[i].forEach(j =>
      drawLine(canvas, ctx, posArr[i], posArr[j], denSize)
    )
    ctx.fillRect(posArr[i][0], posArr[i][1], denSize, denSize)
  }
}
