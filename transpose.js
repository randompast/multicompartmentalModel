module.exports = function(arr){
  var steps = arr.length
  var count = arr[0].length
  trans = new Array(count)
  for (var i = 0; i < count; i++){
    trans[i] = new Array()
    for (var j = 0; j < steps; j++){
      trans[i][j] = arr[j][i]
    }
  }
  return trans
}
