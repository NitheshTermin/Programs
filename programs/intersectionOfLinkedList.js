// class ListNode{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }
function ListNode(val){
        this.val = val;
        this.next = null;
}

ListNode.prototype.getSomething = function(){
    return this.val;
}

var getIntersectionNode = (headA, headB) =>{

    const h1Count = getLinkedListLenght(headA);
    const h2Count = getLinkedListLenght(headB);
    let currentHeadA = headA;
    let currentHeadB = headB;
    if (h1Count > h2Count) {
        
        const diff = h1Count - h2Count;
        for (let i = 0; i < diff; i++) {
            currentHeadA = currentHeadA.next;
        }

    } else {
        const diff = h2Count - h1Count;
        for (let i = 0; i < diff; i++) {
            currentHeadB = currentHeadB.next;
        }
    }
    while (currentHeadB != currentHeadA) {
        currentHeadB = currentHeadB.next;
        currentHeadA = currentHeadA.next;
    }
    return currentHeadA;
}

const getLinkedListLenght = (node) => {
    let count = 0;
    let currentNode = node;
    while (currentNode) {
        count++;
        currentNode = currentNode.next;
    }

    return count;
}

const usingMap =(headA, headB) =>{
    let hashMap = new Map();
    while (headA) {
        hashMap.set(headA,null);
        headA = headA.next;
    }
    while (headB) {
        if (hashMap.has(headB)) {
            //return headB;
        }
        headB = headB.next;
    }

    return null;
}

var node1 = new ListNode('a1');
console.log(node1.getSomething());
var node2 = new ListNode('a2');
var node3 = new ListNode('c1');
var node4 = new ListNode('c2');
var node5 = new ListNode('c3');
var node6 = new ListNode('b1');
var node7 = new ListNode('b2');
var node8 = new ListNode('b3');
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

node6.next = node7;
node7.next = node8;
node8.next = node3;

var headA = node1;
var headB = node6;

//console.log(getIntersectionNode(headA, headB));
console.log(usingMap(headA, headB));