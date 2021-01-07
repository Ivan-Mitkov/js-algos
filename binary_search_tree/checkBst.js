import { BinarySearchTree } from "./bst.js";

const tree = new BinarySearchTree();
tree.insert(50);
tree.insert(51);
tree.insert(2);

tree.insert(49);
tree.insert(1);
tree.insert(23);
tree.insert(100);
tree.insert(4);
const found = tree.find(23);
const found1 = tree.find(100);
const found2 = tree.find(1);
const found3 = tree.find(0);
console.log(found);
console.log(found1);
console.log(found2);
console.log(found3);
// tree.print();

const recTree = new BinarySearchTree();
recTree.insertR(50);
recTree.insertR(51);
recTree.insertR(2);

recTree.insertR(49);
recTree.insertR(1);
recTree.insertR(23);
recTree.insertR(100);
recTree.insertR(4);
const foundR = recTree.findR(23);
const foundR1 = recTree.findR(100);
const foundR2 = recTree.findR(1);
const foundR4 = recTree.findR(0);
console.log(foundR);
console.log(foundR1);
console.log(foundR2);
console.log(foundR4);
// recTree.print();
