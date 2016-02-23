//Used for both the soma and the dendrite, it's just a scalar anyway
module.exports = (rarr, Larr, i) =>
  Larr[i] * 2 * Math.PI * rarr[i]
