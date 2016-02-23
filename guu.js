module.exports = (rL, rarr, Larr, i, j) =>
  rarr[i] * Math.pow(rarr[j],2) / ( rL * Larr[i] *
    ( Larr[i] * Math.pow(rarr[j],2) + Larr[j] * Math.pow(rarr[i],2) ))
