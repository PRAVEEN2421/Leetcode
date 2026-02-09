/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
         nums.sort((a,b)=>a-b)

  let i = nums.length

  let a = nums[i-1] * nums[i-2] * nums[i-3]
  let b = nums[0] * nums[1] * nums[i-1]


  return Math.max(a,b)
};