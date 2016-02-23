module.exports = function(v, j, arr){
  // var arr = new Array(Arr.length)
  // for (var i = 0; i < arr.length; i++){
  //   arr[i] = Arr[i].splice()
  // }
  for (var i = 0; i < v.length; i++){
    v.length === arr.length ?
    arr[i][j] = arr[i][j] + v[i]
    : arr[j][i] = arr[j][i] + v[i]
  }
  return arr
}
//maybe don't modify original array
// var arr = [[1,2,3],[1,4,2]]
// console.log(addvM([1,2], 1, arr))
// console.log(arr)
