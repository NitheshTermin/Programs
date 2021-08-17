class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


const breadthFirstPrint = (root) => {
    const queue = [root];

    const bft=[];
    while(queue.length > 0){
        const curr = queue.shift();
        bft.push(curr.val)
        console.log(curr.val);
        if(curr.left !== null)
            queue.push(curr.left);
        if(curr.right !== null)
            queue.push(curr.right);
    }

    console.log(bft);
};


console.log(breadthFirstPrint(a));

// SumTree

const a3 = new Node(3);
const b2 = new Node(2);
const c7 = new Node(7);
const d4 = new Node(4);
const e2 = new Node(-2);
const f5 = new Node(5);

a3.left = b2;
a3.right = c7;
b2.left = d4;
b2.right = e2;
c7.right = f5;

const BinarySum = (root) =>{
    const queue = [root];
    let sum = 0;
    while (queue.length !== 0) {
        const node = queue.shift();
        sum += node.val;

        if (node.left !== null) {
            queue.push(node.left);
        }
        if(node.right !== null){
            queue.push(node.right);
        }
    }

    return sum;
}

console.log(BinarySum(a3))