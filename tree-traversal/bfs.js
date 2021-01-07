import { BinarySearchTree } from "../binary_search_tree/bst.js";

class Queue {
  constructor() {
    this.arr = new Array();
  }
  enqueue(val) {
    return this.arr.push(val);
  }
  dequeue() {
    return this.arr.shift();
  }
  empty() {
    return this.arr.length === 0;
  }
}

const bfs = (tree) => {
  const root = tree.root;
  const queue = new Queue();
  const vistited = [];
  queue.enqueue(root);
  //root is in the queue
  while (!queue.empty()) {
    const toVisit = queue.dequeue();
    vistited.push(toVisit.val);
    if (toVisit.left) {
      queue.enqueue(toVisit.left);
    }
    if (toVisit.right) {
      queue.enqueue(toVisit.right);
    }
  }
  return vistited;
};

const tree = new BinarySearchTree();
tree.insert(21);
tree.insert(3);
tree.insert(32);
tree.insert(45);
tree.insert(0);
tree.insert(-23);
tree.insert(-21);
// tree.print()
console.log(bfs(tree));
