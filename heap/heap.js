export class MaxBinaryHeap {
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
        if (left > element) {
          swaps = leftChildIndex;
        }
      }
      //right side compare
      if (rightChildIndex < length) {
        right = this.values[rightChildIndex];
        if (right > element) {
          //swap with largest, first swap with left and swap with right only if it's larger than left
          if (right > left || swaps === null) {
            swaps = rightChildIndex;
          }
        }
      }
      if (!swaps) break;
      //Do the swap
      this.values[index] = this.values[swaps];
      this.values[swaps] = element;
      //Update index
      index = swaps;
    }

    return this;
  }
  insert(val) {
    //push at the and and then buuble up until it finds the right spot
    //children of index are index*2+[1 or 2]
    //parent is (childIndex-1)/2
    this.values.push(val);
    //Bubbling
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    //compare node with it's parent if larger swap
    while (this.values[parentIndex] < this.values[index]) {
      this.swap(parentIndex, index);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
    return this.values;
  }
  extractMax() {
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

////
export class MinBinaryHeap {
  constructor() {
    this.values = [];
  }
  swap(a, b) {
    const temp = this.values[a];
    this.values[a] = this.values[b];
    this.values[b] = temp;
  }
  insert(val) {
    this.values.push(val);
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    while (this.values[parentIndex] > this.values[index]) {
      this.swap(parentIndex, index);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }

    return this.values;
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
        if (left < element) {
          swaps = leftChildIndex;
        }
      }
      //right side compare
      if (rightChildIndex < length) {
        right = this.values[rightChildIndex];
        if (right < element) {
          //swap with smallest, first swap with left and swap with right only if it's smaller than left
          if (right < left || swaps === null) {
            swaps = rightChildIndex;
          }
        }
      }
      if (!swaps) break;
      //Do the swap
      this.values[index] = this.values[swaps];
      this.values[swaps] = element;
      //Update index
      index = swaps;
    }

    return this;
  }
  extractMin() {
    const min = this.values[0];
    const last = this.values.pop();
    //if after pop is not empty
    if (this.values.length > 0) {
      this.values[0] = last;
      this.bubbleDown();
    }
    return min;
  }
}
