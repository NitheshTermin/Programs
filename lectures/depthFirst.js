class Node {
    constructor(value){
        this.val = value;
        this.right = null;
        this.left = null;
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

const depthFirst = (root) => {
    const stack = [root];
    const traversal = [];
    while (stack.length > 0) {
        const node = stack.pop();
        traversal.push(node.val);
        
        if (node.right !== null) {
            stack.push(node.right);
        }
        if (node.left !== null) {
            stack.push(node.left);
        }
    }

    return traversal.toString();
}


const depthFirstRecursion = (root) => {
    if(root === null) return;
    console.log(root.val);

    depthFirstRecursion(root.left);
    depthFirstRecursion(root.right);
}

const preOrder = (root) => {
    if(root === null) return;
    console.log(root.val);

    preOrder(root.left);
    preOrder(root.right);
}


const postOrder = (root) => {
    if(root === null) return;

    postOrder(root.left);
    postOrder(root.right);
    console.log(root.val);

}

const inOrder = (root) => {
    if(root === null) return;

    inOrder(root.left);
    console.log(root.val);
    inOrder(root.right);

}


const inOrderSuccessor = (root) => {
    if(root === null) return null;
    let stack = [];
    const left = inOrderSuccessor(root.left);
    if (left !== null) {
        stack=[...stack,...left];
    }
    stack.push(root.val);
    const right = inOrderSuccessor(root.right);
    if(right!== null){
        stack = [...stack,...right];
    }

    if(stack.length > 0)
        return stack;
    else
        return null;
}

const n1 = new Node(20);
const n2 = new Node(9);
const n3 = new Node(25);
const n4 = new Node(5);
const n5 = new Node(12);
const n6 = new Node(11);
const n7 = new Node(14);

n1.left = n2;
n1.right =n3;
n2.left=n4;
n2.right=n5;
n5.left=n6;
n5.right=n7


function successor(n){
  const inorder =  inOrderSuccessor(n1);
  const index = inorder.indexOf(n)
  if (index !== -1) {
      return inorder[index+1];
  }

  return null;
}

//console.log(successor(9))

// console.log(depthFirstRecursion(a));
 console.log(depthFirst(a));
// console.log(postOrder(a));
// console.log(inOrder(a));