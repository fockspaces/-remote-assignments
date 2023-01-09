function binarySearchPosition(numbers, target) {
  let l = 0,
    r = numbers.length - 1;
  while (l < r) {
    let mid = (l + r) / 2;
    if (numbers[mid] == target) return mid;
    else if (numbers[mid] < target) l = mid + 1;
    else r = mid;
  }
  return "target is not found";
}

console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3
console.log(binarySearchPosition([1, 2, 5, 6, 7], 8)); // not found
