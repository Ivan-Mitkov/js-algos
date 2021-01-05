import { DoublyLinkedList } from "./doubly-linked-list.js";

const list = new DoublyLinkedList();
list.push(10);
list.push(11);
list.push("Last Item");
list.print();
// console.log(list);
const last = list.pop();
console.log(last);
list.print();
console.log("SHIFT");
const first = list.shift();
// console.log(first);
list.print();
// console.log(list);
list.push(32);
list.print();
// console.log(list);

list.shift();
list.print();
list.shift();

// console.log(list);
console.log("UNSHIFT")
list.unshift(1)
list.unshift(2)
list.unshift(3)
list.print()
console.log(list)
