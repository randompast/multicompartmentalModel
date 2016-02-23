module.exports = function(a, atmp){
  for (var key in a){
    atmp[key] = a[key]
  }
  return atmp
}
