class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export class SinglyLinkedList {
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

  shift() {
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
    const current = this.head;
    this.head = current.next;
    this.length--;
    return current;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const current = this.head;
      this.head = newNode;
      newNode.next = current;
    }
    this.length++;
    return this;
  }

  get(position) {
    if (position < 0 || position >= this.length) {
      return null;
    }
    let counter = 0;
    let current = this.head;
    while (counter < position) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(value, position) {
    if (position < 0 || position >= this.length) {
      return null;
    }
    let counter = 0;
    let current = this.head;
    while (counter < position) {
      current = current.next;
      counter++;
    }
    current.val = value;
    return current.val;
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
    let temp = prev.next;
    //connect element before the position with new node
    prev.next = newNode;
    //connect inserted node with element after position
    newNode.next = temp;

    this.length++;
    return true;
  }
  remove(position) {
    if (position < 0 || position >= this.length) {
      return false;
    }
    let toBeRemoved = this.head;
    if (position === 0) {
      return this.shift();
    }
    if (position === this.length - 1) {
      return this.pop();
    }
    let counter = 0;
    let prev = this.head;
    //find element before position
    //can use also this.get(position-1)
    while (counter < position - 1) {
      prev = prev.next;
      counter++;
    }
    toBeRemoved = prev.next;
    //connect  node before removed with element after removed
    prev.next = toBeRemoved.next;

    this.length--;
    return toBeRemoved;
  }

  //NASTY
  reverse() {
    //swap head and tail
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    //watch for next and previous
    let last = null; //the end of the list tail.next is null
    let nextNode;

    //!moving from new tail to head
    //we have current if it's tail so it's next start as null
    // null(last)=>current=>nextNode
    for (let index = 0; index < this.length; index++) {
      //find next node as the next of current
      nextNode = current.next;
      //make link with .next start like tail so null
      current.next = last;

      //move one thing over current became last, next became current
      last = current;
      current = nextNode;
    }
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
