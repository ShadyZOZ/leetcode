class Solution:

    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        length_list = []
        i = 0
        while i < len(s):
            i += 1
            lenght_count = 0
            str_hash = {}
            for j in range(i - 1, len(s)):
                if s[j] not in str_hash:
                    str_hash[s[j]] = s[j]
                    lenght_count += 1
                else:
                    i = j
                    break
            length_list.append(lenght_count)
        return max(length_list) if length_list else 0

        # length_list = []
        # for i in range(len(s)):
        #     lenght_count = 0
        #     str_hash = {}
        #     for j in range(i, len(s)):
        #         if s[j] not in str_hash:
        #             str_hash[s[j]] = s[j]
        #             lenght_count += 1
        #         else:
        #             break
        #     length_list.append(lenght_count)
        # return max(length_list) if length_list else 0


def test():
    solution = Solution()
    result = solution.lengthOfLongestSubstring('abcabcbb')
    print(result)


if __name__ == '__main__':
    test()
