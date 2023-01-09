function countAandB(input) {
  let count_a = 0,
    count_b = 0;
  for (c of input) {
    if (c === "a") count_a++;
    else if (c === "b") count_b++;
  }
  const text =
    count_a + count_b > 0
      ? `${count_a + count_b} (${count_a} 'a' ${
          count_a > 1 ? "letters" : "letter"
        } and ${count_b} 'b' ${count_b > 1 ? "letters" : "letter"})`
      : 0;
  return text;
}

function toNumber(input) {
  return input.map((i) => i.charCodeAt(0) - "a".charCodeAt(0) + 1);
}

let input1 = ["a", "b", "c", "a", "c", "a", "c"];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1,3]

let input2 = ["e", "d", "c", "d", "e"];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]
