class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

export class PriorityQueue {
  constructor() {
    this.values = [];
  }
  swap(a, b) {
    const temp = this.values[a];
    this.values[a] = this.values[b];
    this.values[b] = temp;
  }
  bubbleDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let left, right;
      //Find with wich child to swap
      let swaps = null;
      //left side compare
      if (leftChildIndex < length) {
        left = this.values[leftChildIndex];
        if (left.priority > element.priority) {
          swaps = leftChildIndex;
        }
      }
      //right side compare
      if (rightChildIndex < length) {
        right = this.values[rightChildIndex];
        if (right.priority > element.priority) {
          //swap with largest, first swap with left and swap with right only if it's larger than left
          if (right.priority > left.priority || swaps === null) {
            swaps = rightChildIndex;
          }
        }
      }
      //it's on right spot break
      if (!swaps) break;
      //Do the swap
      this.values[index] = this.values[swaps];
      this.values[swaps] = element;
      //Update index
      index = swaps;
    }

    return this;
  }
  enqueue(value, priority) {
    const node = new Node(value, priority);
    //put it at the end
    this.values.push(node);
    //Bubbling
    let index = this.values.length - 1;
    //compare node.priority with it's parent if larger swap
    //get first element
    const element = this.values[index];
    //if size is 0 return else
    while (index > 0) {
      //find parent element
      let parentIndex = Math.floor((index - 1) / 2);
      //find parent
      let parent = this.values[parentIndex];
      //compare and if element is smaller then the parent it's on the right spot, break
      if (element.priority <= parent.priority) {
        break;
      }
      //else element became parent - swap
      this.values[parentIndex] = element;
      this.values[index] = parent;
      //the new index is the index of parent closer to the start
      index = parentIndex;
    }
    return this.values;
  }
  dequeue() {
    const max = this.values[0];
    const last = this.values.pop();
    //if after pop is not empty
    if (this.values.length > 0) {
      this.values[0] = last;
      this.bubbleDown();
    }
    return max;
  }
}
