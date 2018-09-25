# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        current_node1 = l1
        current_node2 = l2
        current_return_l = None
        return_l = None
        remainder = 0
        i = 0
        while current_node1 or current_node2:
            val = self._get_val(current_node1) + self._get_val(current_node2) + remainder
            if val >= 10:
                val -= 10
                remainder = 1
            else:
                remainder = 0
            if i == 0:
                current_return_l = ListNode(val)
                return_l = current_return_l
            else:
                current_return_l.next = ListNode(val)
                current_return_l = current_return_l.next
            current_node1 = current_node1.next if current_node1 else None
            current_node2 = current_node2.next if current_node2 else None
            i += 1

            if not current_node1 and not current_node1 and remainder == 1:
                current_return_l.next = ListNode(remainder)

        return return_l

    @staticmethod
    def _get_val(l):
        if not l:
            return 0
        return l.val


def test():
    l1 = ListNode(5)
    l2 = ListNode(5)
    solution = Solution()
    res_l = solution.addTwoNumbers(l1, l2)
    res = []
    while res_l:
        res.append(res_l.val)
        res_l = res_l.next
    print(res)


if __name__ == '__main__':
    test()
