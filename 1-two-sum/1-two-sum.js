/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let storage = {};
    for(let [i, val] of nums.entries()){
        if(storage[val] !== undefined)return [storage[val], i];
        storage[target-val] = i;
    }
};