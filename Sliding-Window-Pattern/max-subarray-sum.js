/*
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
Note that a subarray must consist of consecutive elements from the original array. 

maxSubarraySum([100,200,300,400],2) // 700
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) //5

*/

function maxSubarraySum(arr, numOfElements) {
  if (numOfElements > arr.length) return null;

  let temp = 0;
  for (let i = 0; i < numOfElements; i++) {
    temp += arr[i];
  }

  let max = temp;
  for (let i = numOfElements; i < arr.length; i++) {
    temp = temp - arr[i - numOfElements] + arr[i];
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
