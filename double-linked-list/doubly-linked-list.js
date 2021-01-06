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
  unshift(val) {
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
  get(position) {
    if (position < 0 || position >= this.length) {
      return null;
    }
    if (position <= this.length / 2) {
      let current = this.head;
      let counter = 0;
      while (counter < position) {
        current = current.next;
        counter++;
      }
      return current;
    }
    // console.log("From tail");
    let current = this.tail;
    let counter = this.length - 1;
    while (counter < position) {
      current = current.prev;
      counter--;
    }
    return current;
  }
  set(value, position) {
    let current = this.get(position);
    if (current !== null) {
      current.val = value;
      return current;
    }
    return false;
  }

  insert(value, position) {
    if (position < 0 || position > this.length) {
      return false;
    }
    if (position === 0) {
      return !!this.unshift(value);
    }
    if (position === this.length) {
      return !!this.push(value);
    }
    const newNode = new Node(value);
    //find element before position
    const prev = this.get(position - 1);
    let afterNode = prev.next;
    //connect element before the position with new node
    prev.next = newNode;
    newNode.prev = prev;
    //connect inserted node with element after position
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return true;
  }
  remove(position) {
    if (position < 0 || position >= this.length) {
      return false;
    }
    if (position === 0) {
      return this.shift();
    }
    if (position === this.length - 1) {
      return this.pop();
    }

    let toBeRemoved = this.get(position - 1);
    let previos = toBeRemoved.prev;
    let nextNode = toBeRemoved.next;
    //connect  node before removed with element after removed
    previos.next = nextNode;
    nextNode.prev = previos;
    //clear links in removed
    toBeRemoved.next = null;
    toBeRemoved.prev = null;
    this.length--;
    return toBeRemoved;
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
