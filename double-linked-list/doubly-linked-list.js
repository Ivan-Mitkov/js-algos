class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //add at the end
  push(val) {
    //create new node
    let newNode = new Node(val);
    //if list is empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let last = this.tail;
    //move tail -1
    this.tail = last.prev;
    //remove next from the new tail
    this.tail.next = null;
    this.length--;
    return last;
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
