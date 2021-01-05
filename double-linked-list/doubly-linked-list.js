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
    //this.tail is the old last
    //it's NEXT is now the new last
    this.tail.next = newNode;
    //previous of the new last is the old tail
    newNode.prev = this.tail;
    //the new tail is the new node
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let last = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      //move tail -1
      this.tail = last.prev;
      //remove next from the new tail
      this.tail.next = null;
      //remove link with prev of the poped node
      last.prev = null;
    }

    this.length--;
    return last;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    let first = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      //move head +1
      this.head = first.next;
      //remove prev from new head
      this.head.prev = null;
      //remove link with prev of the poped node
      first.next = null;
    }

    this.length--;
    return first;
  }
  unshift(val){
     //create new node
     let newNode = new Node(val);
     //if list is empty
     if (this.head === null) {
       this.head = newNode;
       this.tail = newNode;
       this.length++;
       return this;
     }
     //this.head is the old first
     //it's prev is now the new first
     this.head.prev = newNode;
     //next of the new first is the old first
     newNode.next = this.head;
     //the new head is the new node
     this.head = newNode;
     this.length++;
     return this;
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
