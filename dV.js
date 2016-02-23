var guu = require("./guu.js")
var guuI = require("./guuI.js")
var A = require("./A.js")

module.exports = (dt, Vrest, rm, Ie, Cm,   Varr, rL, rarr, Larr, i, conn) =>
  dt * (
    - (Varr[i] - Vrest)/rm
    + Ie/A(rarr, Larr, i)
    + conn.map( j => guuI(Varr, rL, rarr, Larr, i, j) )
      .reduce( (a, b) => a + b, 0)
  )/Cm
