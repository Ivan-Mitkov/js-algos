import { BinarySearchTree } from "../binary_search_tree/bst.js";

const dfsPreOrder = (tree) => {
  const root = tree.root;
  const visited = [];

  function helper(node) {
    //push first recurse later root at start
    visited.push(node.val);

    if (node.left) {
      helper(node.left);
    }
    if (node.right) {
      helper(node.right);
    }
  }
  helper(root);
  return visited;
};
const dfsPostOrder = (tree) => {
  const root = tree.root;
  const visited = [];

  function helper(node) {
    if (node.left) {
      helper(node.left);
    }

    if (node.right) {
      helper(node.right);
    }
    //root at the end
    visited.push(node.val);
  }
  helper(root);
  return visited;
};
const dfsInOrder = (tree) => {
  const root = tree.root;
  const visited = [];

  function helper(node) {
    if (node.left) {
      helper(node.left);
    }
    //go to the last leaf first push later
    visited.push(node.val);
    if (node.right) {
      helper(node.right);
    }
  }
  helper(root);
  return visited;
};

const tree = new BinarySearchTree();
tree.insert(21);
tree.insert(3);
tree.insert(32);
tree.insert(45);
tree.insert(0);
tree.insert(-23);
tree.insert(-21);
tree.insert(4);
tree.insert(65);
tree.insert(-241);
tree.print();
console.log(dfsPreOrder(tree));
console.log(dfsPostOrder(tree));
console.log(dfsInOrder(tree));
