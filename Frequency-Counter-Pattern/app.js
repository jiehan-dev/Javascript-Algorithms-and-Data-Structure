/* Example: 
Write a function called same, which accpets two arrays. 
The function should return true if every value in the array has it's corresponding value squared in the second array.
The frequency of values must be the same.
*/

// O(n^2)
function naiveSame(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    // console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// O(n)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  //   console.log(frequencyCounter1);
  //   console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

const arr1 = [10, 1, 2, 7, 3, 2, 1, 5, 5, 10, 7, 1, 10, 1, 2, 7, 3, 2, 1, 5, 5, 10, 7, 1, 10, 1, 2, 7, 3, 2, 1, 5, 5, 10, 7, 1, 10, 1, 2, 7, 3, 2, 1, 5, 5, 10, 7, 1, 10, 1, 2, 7, 3, 2, 1, 5, 5, 10, 7, 1, 10, 1, 2, 7, 3, 2, 1, 5, 5, 10, 7, 1, 10, 1, 2, 7, 3, 2, 1, 5, 5, 10, 7, 1, 10, 1, 2, 7, 3, 2, 1, 5, 5, 10, 7, 1, 10, 1, 2, 7, 3, 2, 1, 5, 5, 10, 7, 1, 10, 1, 2, 7, 3, 2, 1, 5, 5, 10, 7, 1, 10, 1, 2, 7, 3, 2, 1, 5, 5, 10, 7, 1, 10, 1, 2, 7, 3, 2, 1, 5, 5, 10, 7, 1];
const arr2 = [9, 100, 49, 1, 49, 100, 1, 1, 4, 25, 4, 25, 9, 100, 49, 1, 49, 100, 1, 1, 4, 25, 4, 25, 9, 100, 49, 1, 49, 100, 1, 1, 4, 25, 4, 25, 9, 100, 49, 1, 49, 100, 1, 1, 4, 25, 4, 25, 9, 100, 49, 1, 49, 100, 1, 1, 4, 25, 4, 25, 9, 100, 49, 1, 49, 100, 1, 1, 4, 25, 4, 25, 9, 100, 49, 1, 49, 100, 1, 1, 4, 25, 4, 25, 9, 100, 49, 1, 49, 100, 1, 1, 4, 25, 4, 25, 9, 100, 49, 1, 49, 100, 1, 1, 4, 25, 4, 25, 9, 100, 49, 1, 49, 100, 1, 1, 4, 25, 4, 25, 9, 100, 49, 1, 49, 100, 1, 1, 4, 25, 4, 25, 9, 100, 49, 1, 49, 100, 1, 1, 4, 25, 4, 25];

console.time('Naive Same');
naiveSame(arr1, arr2);
console.timeEnd('Naive Same');

console.time('Same');
same(arr1, arr2);
console.timeEnd('Same');
