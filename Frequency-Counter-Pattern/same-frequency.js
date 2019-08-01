/*
Write a function called sameFrequency. 
Given two positive integers, find out if the two numbers have the same frequency of digits.

Make it time complexity of O(N)

Sample:
sameFrequency(182,281) // true 
sameFrequency(3589578,5879385) // true
sameFrequency(22,222) // false
*/

function sameFrequency(num1, num2) {
  let str1 = num1.toString();
  let str2 = num2.toString();
  if (str1.length !== str2.length) return false;

  let fc = {};
  for (let num of str1) {
    fc[num] = (fc[num] || 0) + 1;
  }

  for (let num of str2) {
    if (fc[num]) {
      fc[num] = fc[num]--;
    } else {
      return false;
    }
  }

  return true;
}
