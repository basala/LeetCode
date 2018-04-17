/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var res = new ListNode(0);
    var p = l1;
    var q = l2;
    var cur = res;
    var carry = 0;
    while (p != null || q != null) {
        var tempx = p != null ? p.val : 0;
        var tempy = q != null ? q.val : 0;
        var tempsum = carry + tempx + tempy;
        carry = Math.floor(tempsum / 10;)
        cur.next = new ListNode(tempsum % 10);
        cur = cur.next;
        if (p != null) {
            p = p.next;
        }
        if (q != null) {
            q = q.next;
        }
    }
    if (carry > 0) {
        cur.next = new ListNode(carry);
    }
    return res.next;
};