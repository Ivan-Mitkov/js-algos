class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.length = 0;
    this.tail = null;
    this.head = null;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this.length;
  }

  pop() {
    if (!this.head) {
      return null;
    }
    if (this.length === 1) {
      const nodeToPop = this.tail;
      this.tail = null;
      this.head = null;
      this.length--;
      return nodeToPop;
    }
    const nodeToPop = this.tail;
    this.tail = nodeToPop.prev;
    nodeToPop.prev = null;
    this.length--;
    return nodeToPop.val;
  }
}

const list = new Stack();
list.push(5);
console.log(list);
list.push(6);
console.log(list);
list.push(7);
console.log(list);
list.push(8);
console.log(list);
console.log(list.pop());
console.log(list);
console.log(list.pop());
console.log(list);
console.log(list.head.val);
console.log(list.tail.val);
