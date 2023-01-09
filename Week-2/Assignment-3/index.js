function count(input) {
  let ans = "{";
  const map = new Map();
  // implement a hashmap
  input.forEach((item) => {
    if (map.has(item)) map.set(item, map.get(item) + 1);
    else map.set(item, 1);
  });
  // convert to text
  for (let [key, value] of map) {
    ans += `${key}:${value}, `;
  }
  ans = ans.slice(0, -2);
  ans += "}";
  return ans;
}

let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
  let ans = "{";
  const map = new Map();
  // implement a hashmap
  input.forEach((item) => {
    if (map.has(item.key)) map.set(item.key, map.get(item.key) + item.value);
    else map.set(item.key, item.value);
  });
  // convert to text
  for (let [key, value] of map) {
    ans += `${key}:${value}, `;
  }
  ans = ans.slice(0, -2);
  ans += "}";
  return ans;
}

let input2 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];
console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}
