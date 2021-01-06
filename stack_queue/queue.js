class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.size = 0;
    this.last = null;
    this.first = null;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
      this.size++;
      return this.size;
    }
    //create new last and connect to the old last
    this.last.next = newNode;
    //move pointer
    this.last = newNode;
    this.size++;
    return this.size;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.length === 1) {
      const nodeToPop = this.first;
      this.last = null;
      this.first = null;
      this.size--;
      return nodeToPop.val;
    }
    const nodeToPop = this.first;
    this.first = nodeToPop.next;

    nodeToPop.next = null;
    this.size--;
    return nodeToPop.val;
  }
  print() {
    let current = this.first;
    let toPrint = "";
    while (current) {
      toPrint += current.next ? `${current.val}, ` : `${current.val}`;
      current = current.next;
    }
    console.log(toPrint);
  }
}

const list = new Queue();
list.enqueue(5);
console.log(list);
list.enqueue(6);
list.print();
console.log(list);
list.enqueue(7);
list.print();

// console.log(list);
list.enqueue(8);
list.print();

// console.log(list);
console.log(list.dequeue());
list.print();

// console.log(list);
console.log(list.dequeue());
list.print();

// console.log(list);
console.log(list.first.val);
console.log(list.last.val);
