class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
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

