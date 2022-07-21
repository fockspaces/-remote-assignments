function countAandB(input) {
  let count = 0;
  for (char of input) {
    if (char === "a" || char === "b") count++;
  }
  return count;
}
function toNumber(input) {
    const array = [];
    for (char of input) {
        array.push(char.charCodeAt(0) - 'a'.charCodeAt(0) + 1);
    }
    return array;
}

let input1 = ["a", "b", "c", "a", "c", "a", "c"];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ lettersand 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1,3]

let input2 = ["e", "d", "c", "d", "e"];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]