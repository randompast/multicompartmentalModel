var dV = require("./dV.js")
module.exports = function(dt, Vrest, rm, Ie, j, Cm, conns,   Varr, rL, rarr, Larr){
  var DV = []
  var Varr = Varr.slice()
  for (var i = 0; i < Varr.length; i++){
    DV[i] = dV(dt, Vrest, rm, Ie[j][i], Cm,  Varr, rL, rarr, Larr, i, conns[i])
  }

  return Varr.map( (v, i) => v + DV[i])
}
