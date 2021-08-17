/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
  
     let tempArr = [];
     let sortList = ListNode();
     let head = sortList;

     lists.forEach(list =>{

        while (list != null) {
            tempArr.push(list.val);
            list = list.next;
        };

     });
     console.log(tempArr);
     let sortArr = tempArr.sort((a,b)=>{return a - b});

     sortArr.forEach(item => {
         if(head == null){
             head = ListNode();
         }
         head.val = item;
         head = head.next;
     });

     console.log(sortArr);
     console.log(sortList);
     return sortList;
    
};

var getNextNode = function(node){
    if (node != null) {
        node = node.next;
    }
    return null;
}