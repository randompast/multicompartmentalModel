var guu = require("./guu.js")
module.exports = (Varr, rL, rarr, Larr, i, j) =>
  guu(rL, rarr, Larr, i, j) * (Varr[j] - Varr[i])
