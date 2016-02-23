module.exports = function(a, atmp){
  for (var key in a){
    if(a[key] != atmp[key]){
      return true
    }
  }
  return false
}
