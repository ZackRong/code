/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 两数之和：使用一个map来维护数组元素和下标之间的映射关系。每次计算当前值和target的差值diff，如果diff在map中，则找到了；如果没有，则将当前值存入map中
 */
var twoSum = function(nums, target) {
  const length = nums.length;
  if (length === 0) return [];
    
  const map = new Map();
  for (let i = 0; i < length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [i, map.get(diff)];
    }
    map.set(nums[i], i);
  }
  return [];
};