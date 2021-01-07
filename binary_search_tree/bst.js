class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  //using loop
  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      //start from root
      let current = this.root;
      while (true) {
        if (val === current.val) {
          return this;
        }
        //iterate on left side
        if (val < current.val) {
          if (!current.left) {
            current.left = newNode;
            return this;
          } else {
            //start new loop with new root
            current = current.left;
          }
        }
        //iterate on the right side
        if (val > current.val) {
          if (!current.right) {
            current.right = newNode;
            return this;
          } else {
            //start new loop with new root
            current = current.right;
          }
        }
      }
    }
  }
  //using recursion
  insertR(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    function helper(newNodeVal, current) {
      if (newNodeVal < current.val) {
        if (!current.left) {
          current.left = new Node(newNodeVal);
          return this;
        }
        return helper(newNodeVal, current.left);
      }
      if (newNodeVal > current.val) {
        if (!current.right) {
          current.right = new Node(newNodeVal);
          return this;
        }
        return helper(newNodeVal, current.right);
      }
    }

    helper(val, this.root);
  }
  //using loop
  find(val) {
    if (!this.root) {
      return null;
    } else {
      //start from root
      let current = this.root;
      while (true) {
        if (val === current.val) {
          return current;
        }
        //iterate on left side
        if (val < current.val) {
          if (!current.left) {
            return null;
          } else {
            //start new loop with new root
            current = current.left;
          }
        }
        //iterate on the right side
        if (val > current.val) {
          if (!current.right) {
            return null;
          } else {
            //start new loop with new root
            current = current.right;
          }
        }
      }
    }
  }
  //using recursion
  findR(val) {
    if (!this.root) {
      return null;
    }
    function helper(searched, current) {
      // console.log(searched, current.val);
      if (searched === current.val) {
        return current;
      }
      if (searched < current.val) {
        if (!current.left) {
          return null;
        }
        return helper(searched, current.left);
      }
      if (searched > current.val) {
        if (!current.right) {
          return null;
        }
        return helper(searched, current.right);
      }
    }

    return helper(val, this.root);
  }
  print() {
    console.log(JSON.stringify(this, null, 6));
  }
}

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
