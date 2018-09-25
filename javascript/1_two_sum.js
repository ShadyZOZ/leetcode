var twoSum = function(nums, target) {
    const hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        const numLeft = target - nums[i];
        if (typeof hashMap[numLeft] === 'number') {
            return [hashMap[numLeft], i];
        }
        hashMap[nums[i]] = i;
    }
};
