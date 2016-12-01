function index() {}
  function iterativeLog(array) {
    var numbers = [1,2,3]
    numbers.forEach(function(element, index, array){
      console.log(`${index}: ${element}`)
    })
  }
iterativeLog('0: 1');

function iterate(callback) {
  var array = [4,5,6];
  array.forEach(function(array) {
    callback(array);
  })
  return array;
}
function doToArray(array,callback) {
  var array = [7,8,9]
  array.forEach(function(array) {
    callback(array);
  })
}
