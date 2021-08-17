//
 // DEFINITION FOR SINGLY-LINKED LIST.
 function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
var addTwoNumbers = function(l1, l2) {
   
   
   
   const initialSum = l1.val + l2.val;
  let tempSum = new ListNode(initialSum);
   
   while(l1.next != null & l2.next != null){
       l1 = l1.next;
       l2 = l2.next;
       const sum = l1.val + l2.val;
       let tempList = new ListNode(sum);
       tempSum.next = tempList;
       tempSum = tempSum.next;
   }
   while(l1.next!=null){
       l1 = l1.next;
       let tempList = new ListNode(l1.val);
       tempSum.next = tempList;
       tempSum = tempSum.next;
   }
   while(l2.next!=null){
       l2 = l2.next;
       let tempList = new ListNode(l2.val);
       tempSum.next = tempList;
       tempSum = tempSum.next;
   }
   
   
   
   return tempSum;
   
};