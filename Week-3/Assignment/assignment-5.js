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
console.log(twoSum_1(nums, target));
console.log(twoSum_2(nums, target));
console.log(twoSum_3(nums, target));
