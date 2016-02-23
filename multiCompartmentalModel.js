require("es6-shim")
require("es7-shim")

document.title = "Multicompartmental Model - Chapter 6 (Abbot)"
var fit = require('canvas-fit')
  var canvas = document.body.appendChild(document.createElement('canvas'))
  window.addEventListener('resize', fit(canvas), false)
  ctx = canvas.getContext('2d')
var GUI = require("dat-gui")
var gui = new GUI.gui.GUI()

a = require("./controller.js")
atmp = {}
for (var key in a){
  var mult = 2
  gui.add(a, key, 0, Math.abs(a[key]*mult))
  atmp[key] = a[key]
}
a.count = 20//6//10
a.isel = 11//3//5
a.jsel = 20//5//10

var r = (max) =>  Math.floor(Math.random()*max)
var transpose = require("./transpose.js")
var addvM = require("./addvM.js")
var checkUpdate = require("./checkUpdate.js")
var aUpdate = require("./aUpdate.js")

var guu = require("./guu.js")
var guuI = require("./guuI.js")
var A = require("./A.js")
var dV = require("./dV.js")
var step = require("./step.js")

var drawArr = require("./drawArr.js")
var drawLine = require("./drawLine.js")
var draw = require("./draw.js")

var init = function(a, drawBool, iHardBool, jHardBool){
  var count = Math.max(Math.floor(a.count/3)*3, 6)
  var size = a.size
  var steps = Math.floor(a.steps)
  var spacing = 30
  var isel = Math.round(Math.max(0, Math.min(count-1, a.isel)))
  var jsel = Math.round(Math.max(0, Math.min(count-1, a.jsel)))

  var Varr = new Array(count)
  var rarr = new Array(count)
  var Larr = new Array(count)

  var posArr = new Array(count)
  var colors = new Array(count)
  var connections = new Array(count)

  var times = new Array(steps)
  var Ie = new Array(steps)

  for (var i = 0; i < count; i++){
    Varr[i] = 0
    rarr[i] = a.rDendrite
    Larr[i] = a.lDendrite
    posArr[i] = [i*spacing+100, r(25)+200+i]
    colors[i] = "rgb("+r(256)+", "+r(256)+", "+r(256)+")"
    connections[i] = []
    if (0 <= i - 1) connections[i].push(i-1)
    if (i + 1 < count) connections[i].push(i+1)
  }
  rarr[0] = a.rSoma
  Larr[0] = 1

  var third = Math.floor(count/3)
  connections[third] = [third-1, third+1, third*2]
  connections[third*2-1] = [third*2-1]
  connections[third*2] = [third, third*2+1]

  for(var i = 2*third; i < count; i++){
    posArr[i][0] = posArr[i-third][0]
    posArr[i][1] = posArr[i-third][1] + spacing
  }

  //setCurrents
  for (var i = 0; i < steps; i++){
    Ie[i] = new Array(count)
    for (var j = 0; j < count; j++){
      Ie[i][j] = 0
      if(j === isel
        && a.iBool
        && iHardBool
        && Math.floor(a.dt*(i)/a.ilength)%2 === 0) Ie[i][j] = a.Ie
      if(j === jsel
        && a.jBool
        && jHardBool
        && Math.floor(a.dt*(i + a.jshift)/a.ilength)%2 === 0) Ie[i][j] = a.Ie
    }
  }


  for (var i = 0; i < steps; i++){
    Varr = step(a.dt, a.Vrest, a.rm, Ie, i, a.Cm, connections,   Varr, a.rL, rarr, Larr)
    times[i] = Varr.slice()
  }

  //current
  IeTrans = transpose(Ie)
  t = transpose(times)
  if (drawBool){
        // (canvas, ctx, posArr, colors, connections, rSoma, rDendrite, isel, jsel){
    draw(canvas, ctx, posArr, colors, connections, a.rSoma, a.rDendrite, isel, jsel)

    drawArr(canvas, ctx, IeTrans[isel], "rgba(100,255,150, 0.6)", 10, 5)
    drawArr(canvas, ctx, IeTrans[jsel], "rgb(100,200,200)", 10, 1)
    //voltage for each neuron
    for(var i = 0; i < count; i++){
      drawArr(canvas, ctx, t[i], colors[i], 1, i === 0 ? 5 : 1)
    }
  }

  // drawArr(canvas, ctx, t[0], colors[0], 1, 20)
  return t[0]
}

init(atmp)

function render(){
  if(checkUpdate(a, atmp)){
    atmp = aUpdate(a, atmp)
    ctx.clearRect(0,0, canvas.width, canvas.height)
    var i = init(atmp, false, true, false)
    var j = init(atmp, false, false, true)
    var soma_iPj = i.map( (v,k) => v + j[k])
    drawArr(canvas, ctx, soma_iPj, "rgba(100,200,100, 0.5)", 1, 10)
    var soma_ij = init(atmp, true, true, true)
    drawArr(canvas, ctx, soma_iPj.map( (v,k) => v - soma_ij[k]), "rgba(100,100,200, 0.5)", 1, 10)
  }
  a.steps = canvas.width
  window.requestAnimationFrame(render)
} render()
