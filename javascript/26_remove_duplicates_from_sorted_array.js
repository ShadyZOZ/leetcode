/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i=0;
    for (let j = 1; j < nums.length; j++){
        console.log('==========')
        console.log(j, i, nums);
        if (nums[j] !== nums[i]){
            i++;
        }
        nums[i] = nums[j];
        console.log(j, i, nums);
    }
    return(i+1);
};

// const a = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// const a = [1, 1];
// const a = [1, 1, 1, 1];
// const a = [1, 2];
// const a = [1, 2, 2, 2];
const a = [-1, 0, 0, 0, 0, 3, 3];
console.log(removeDuplicates(a));
console.log(a);
