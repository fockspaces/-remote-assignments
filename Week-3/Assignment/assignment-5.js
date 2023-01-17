// 1: brute-force
function twoSum_1(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return "not found the pair";
}

// 2: hash map
function twoSum_2(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) map.set(nums[i], i);
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i]) && map.get(target - nums[i]) !== i)
      return [i, map.get(target - nums[i])];
  }
  return "not found the pair";
}

// 3: sort and limit
function twoSum_3(nums, target) {
  nums.sort((a, b) => a - b);
  let l = 0,
    r = nums.length - 1;

  while (l < r) {
    if (nums[l] + nums[r] === target) {
      return [l, r];
    } else if (nums[l] + nums[r] < target) {
      l++;
    } else {
      r--;
    }
  }
  return "not found the pair";
}

const nums = [2, 7, 15, 11];
const target = 9;
// console.log(twoSum_1(nums, target));
// console.log(twoSum_2(nums, target));
// console.log(twoSum_3(nums, target));

// testing
const N = 100000;
const data = {};

const test = (func, times) => {
  for (i = 0; i < times; ++i) {
    func(nums, target);
  }
};

const measure = (func, times) => {
  const startTime = performance.now();
  test(func, times);
  const endTime = performance.now();
  console.log(
    `Call to ${func.name} ${times} times took ${
      Math.round((endTime - startTime) * 1000) / 1000
    } milliseconds`
  );
  // if (!data[`${times}`]) data[`${times}`] = [];
  // data[`${times}`].push(Math.round((endTime - startTime) * 1000) / 1000);
};

// for (let i = 100; i < N; i += 1000) {
//   measure(twoSum_1, i);
//   measure(twoSum_2, i);
//   measure(twoSum_3, i);
// }

// console.log(data);

measure(twoSum_1, 100000);
measure(twoSum_2, 100000);
measure(twoSum_3, 100000);
