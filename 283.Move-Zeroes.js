/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let Zero =0;
  for(let i=0;i<nums.length;i++){
      if(nums[i]!=0){
          nums[Zero++]= nums[i];
      }
  }
  for(i = Zero;i<nums.length;i++){
      nums[i]=0;
  }
};