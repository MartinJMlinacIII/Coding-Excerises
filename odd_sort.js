/*
Exercise 1:

Given an array of numbers, sort ascending odd numbers
but leave even numbers in their original place in the array.
Zero does not need to move. If the array is empty, return an empty array.
*/
function odd_sort(arr) {
  //Check for empty array
  if (arr === undefined || arr.length === 0) {
    return [];
  } else {
    var length = arr.length;
    for (var i = 0; i < length - 1; i++) {
      //check for odd number
      if (arr[i] % 2 === 1) {
        for (var j = i + 1; j < arr; j++) {
          if (arr[j] % 2 === 1) {
            if (arr[i] > arr[j]) {
              var temp = arr[j];
              arr[j] = arr[i];
              arr[i] = temp;
            }
          }
        }
      }
    }
    return arr;
  }
}

var x = [6, 3, 2, 7, 5, 0];

console.log(odd_sort(x));
