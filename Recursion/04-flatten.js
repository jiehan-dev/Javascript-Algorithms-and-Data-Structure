/*
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
flatten([[1],[2],[3]]) // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
*/

// With Iteration
function flattenWithIteration(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// Pure Recursive
function flatten(arr) {
  if (arr.length === 0) return [];
  let newArr = [];

  if (!Array.isArray(arr[0])) {
    newArr.push(arr[0]);
    return newArr.concat(flatten(arr.slice(1)));
  }

  return flatten(arr[0]).concat(flatten(arr.slice(1)));
}
