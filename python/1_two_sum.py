class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        return self._two_pass_hash_table(nums, target)

    @staticmethod
    def _two_pass_hash_table(nums, target):
        nums_hash = {}
        nums_comflict_hash = {}
        for i in range(len(nums)):
            if nums[i] not in nums_hash:
                nums_hash[nums[i]] = i
            else:
                nums_comflict_hash[nums[i]] = i

        for j in nums:
            complement = target - j
            if complement in nums_hash:
                second_idx = nums_hash[complement]
                if second_idx == nums_hash[j]:
                    if complement not in nums_comflict_hash:
                        continue
                    second_idx = nums_comflict_hash[complement]
                return [nums_hash[j], second_idx]

    @staticmethod
    def _brute_force(nums, target):
        for i in nums:
            idx_i = nums.index(i)
            new_nums = nums[idx_i + 1:]
            for j in new_nums:
                if i + j == target:
                    idx_j = new_nums.index(j) + idx_i + 1
                    return [idx_i, idx_j]

        # this won't reach time limit
        # for i in range(len(nums)):
        #     for j in range(i + 1, len(nums)):
        #         if nums[i] + nums[j] == target:
        #             return [i, j]


def main():
    from two_sum_test_data import nums
    solution = Solution()
    # result = solution.twoSum(nums, 16021)
    result = solution.twoSum([3, 2, 4], 6)
    print(result)


if __name__ == '__main__':
    main()
