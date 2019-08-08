/*
Write a function called averagePair. 
Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.
There may be more than one pair that matches the average target.
*/

function averagePair(arr, avg) {
  if (arr.length < 2) return false;

  const targetSum = avg * 2;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === targetSum) {
      return true;
    }

    if (targetSum - sum > 0) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));
