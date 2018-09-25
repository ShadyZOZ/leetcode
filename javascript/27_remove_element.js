/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0;
    let j = nums.length - 1;
    for (; i <= j; i++) {
        if (nums[i] === val) {
            nums[i] = nums[j];
            i--;
            j--;
        }
    }
    return i;
};

// const nums = [3,2,2,3];
// const val = 3;
// const nums = [0,1,2,2,3,0,4,2];
// const val = 2;
const nums = [1];
const val = 1;

console.log(removeElement(nums, val));
console.log(nums);
