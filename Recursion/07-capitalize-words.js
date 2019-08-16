/*
Write a recursive function called capitalizeWords. 
Given an array of words, return a new array containing each word capitalized.
*/

function capitalizeWords(arr) {
  if (arr.length === 1) return [arr[0].toUpperCase()];

  const res = capitalizeWords(arr.slice(0, -1));

  res.push(arr.slice(-1).toUpperCase());

  return res;
}
