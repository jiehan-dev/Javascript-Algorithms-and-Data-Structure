/*
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. 
You can solve this using the frequency counter pattern OR the multiple pointers pattern.
Examples:
areThereDuplicates(1,2,3) // false
areThereDuplicates(1,2,2) // true
areThereDuplicates('a','b','c','a') // true
*/

function areThereDuplicates(...args) {
  let collection = {};

  for (let item of args) {
    let temp = item.toString();

    if (collection[temp]) {
      return true;
    } else {
      collection[temp] = 1;
    }
  }

  return false;
}

areThereDuplicates('a', 'b', 'c', 'a');
