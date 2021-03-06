import { MaxBinaryHeap, MinBinaryHeap } from "./heap.js";
import { PriorityQueue } from "./priorityQueue.js";
// const maxBinHeap = new MaxBinaryHeap();
// maxBinHeap.insert(0);
// maxBinHeap.insert(2);
// maxBinHeap.insert(-100);
// maxBinHeap.insert(12);
// maxBinHeap.insert(14);
// maxBinHeap.insert(13);
// maxBinHeap.insert(1);
// maxBinHeap.insert(-13);
// maxBinHeap.insert(42);
// // maxBinHeap.insert(44);
// console.log(maxBinHeap.insert(44));
// console.log(maxBinHeap.extractMax())
// console.log(maxBinHeap)
// console.log(maxBinHeap.extractMax())
// console.log(maxBinHeap)
// console.log(maxBinHeap.extractMax())
// console.log(maxBinHeap)
// console.log(maxBinHeap.extractMax())
// console.log(maxBinHeap)
// const minBinHeap = new MinBinaryHeap();
// minBinHeap.insert(0);
// minBinHeap.insert(2);
// minBinHeap.insert(-100);
// minBinHeap.insert(12);
// minBinHeap.insert(-23);
// minBinHeap.insert(13);
// minBinHeap.insert(1);
// minBinHeap.insert(-13);
// minBinHeap.insert(42);
// minBinHeap.insert(44);
// console.log(minBinHeap.insert(44));
// console.log(minBinHeap.extractMin())
// console.log(minBinHeap)
// console.log(minBinHeap.extractMin())
// console.log(minBinHeap)
// console.log(minBinHeap.extractMin())
// console.log(minBinHeap)
// console.log(minBinHeap.extractMin())
// console.log(minBinHeap)

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("a", 1);
priorityQueue.enqueue("b", 1);
priorityQueue.enqueue("c", 2);
priorityQueue.enqueue("d", 3);
priorityQueue.enqueue("e", 2);
priorityQueue.enqueue("f", 4);
priorityQueue.enqueue("g", 0);

console.log(priorityQueue);
priorityQueue.dequeue();
console.log(priorityQueue);
priorityQueue.dequeue();
console.log(priorityQueue);
priorityQueue.dequeue();
console.log(priorityQueue);
priorityQueue.dequeue();
console.log(priorityQueue);
priorityQueue.dequeue();
console.log(priorityQueue);
priorityQueue.dequeue();
console.log(priorityQueue);
priorityQueue.dequeue();
console.log(priorityQueue);
