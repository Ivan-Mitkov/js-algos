class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    if (this.tail === this.head) {
      const current = this.head;
      this.tail = null;
      this.head = null;
      this.length--;
      return current;
    }
    const lastTail = this.tail;
    //get second to last node
    let currentNode = this.head;
    let newTail = currentNode;
    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    //make new last node
    newTail.next = null;
    this.tail = newTail;

    this.length--;

    return lastTail;
  }

  print() {
    let current = this.head;
    let toPrint = "";
    while (current) {
      toPrint += current.next ? `${current.val}, ` : `${current.val}`;
      current = current.next;
    }
    console.log(toPrint);
  }
}

const list = new SinglyLinkedList();
list.push("Hi");
// console.log(list);
list.push("There");
// console.log(list);
list.push("Again");
list.push(0);
list.push(12);
// console.log(list.length);
// console.log(list);
list.print();
list.pop();
list.print();

list.pop();
list.print();

list.pop();
list.print();

list.pop();
list.print();

list.pop();
list.print();
list.push("Some");
list.print();

// console.log(list);
