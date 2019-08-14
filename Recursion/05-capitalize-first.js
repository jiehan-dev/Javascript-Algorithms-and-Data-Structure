/*
Write a recursive function called capitalizeFirst.
Given an array of strings, capitalize the first letter of each string in the array.
*/

function capitalizeFirst(arr) {
  if (arr.length === 1) return [arr[0].charAt(0).toUpperCase() + arr[0].substr(1)];

  const res = capitalizeFirst(arr.slice(0, -1));

  res.push(arr[arr.length - 1].charAt(0).toUpperCase() + arr[arr.length - 1].substr(1));

  return res;
}
