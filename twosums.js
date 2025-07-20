/**
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 */

twoSum = (nums,target) => {
    for(i=0;i<nums.length;i++){
        for(j=1;j<nums.length;j++){
           if(nums[i]+nums[j] === target && i !== j)
           {
            return([i,j]);
 
           }

        }
    }
};
let nums = [0,4,3,0];
console.log(n);
let target = 0;
let result = twoSum(nums,target);
console.log(result);