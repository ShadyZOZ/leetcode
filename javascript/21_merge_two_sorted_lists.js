/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
var mergeTwoLists = function (l1, l2) {
    const dummyNode = new ListNode(0);
    let currentNode = dummyNode;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            currentNode.next = l1;
            l1 = l1.next;
        } else {
            currentNode.next = l2;
            l2 = l2.next
        }
        currentNode = currentNode.next;
    }
    if (l1) {
        currentNode.next = l1;
    } else if (l2) {
        currentNode.next = l2;
    }
    return dummyNode.next;
};

l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(14);

l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

const convertToList = (l) => {
    const ll = [];
    while (l) {
        ll.push(l.val);
        l = l.next;
    }
    return ll;
};
console.log(convertToList(mergeTwoLists(l1, l2)));
