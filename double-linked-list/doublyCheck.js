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
list.pop();
console.log(list);
list.pop();
console.log(list);
