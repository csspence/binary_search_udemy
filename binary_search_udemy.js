/*
JavaScript Algorithms and Data Structures Masterclass - Udemy

binarySearch
-Write a function binarySearch that accepts a sorted array and a value.  
-Create a left pointer at the start of the array, and a right pointer at the end of the array.  
-While the left pointer comes before the right pointer: create a pointer in the middle, if you find the value you want, return the index, if the value is too small, move the pointer up, if the value is too large, move the pointer down.  
-If you never find the value, return -1.
*/

const binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((right + left) / 2);
  if(val > arr[arr.length - 1] || val < arr[0]) {
    return -1;
  }
  while(right - left > 1) {
    if(arr[mid] === val) {
      return mid;
    } else if(arr[mid] > val) {
      right = mid - 1;
    } else if(arr[mid] < val) {
      left = mid;
    }
    mid = Math.floor((right + left) / 2);
  }

  return -1;
}
