var numsRandomOrder = [ 2, 3, 9, 11 , 0, 54 , 5 ,8, 6 ,]
var numsReversed = [9, 8, 7, 6 ,5 ,4 ,3,2,1]


function swap (arr, first ,second) {
  var temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp 
}

function bubbleSort(arr = []) {
  var i,j
  for (var i = 0; i < arr.length;i++) {
    for (var j = 0; j < arr.length - i -1;j++){
      if (arr[j] > arr[j + 1]) {
        swap(arr, j , j+1)
      }
    }
  }
  return(arr)
}

console.log(bubbleSort(numsRandomOrder))
console.log(bubbleSort(numsReversed))