import { DoublyLinkedList } from "./doubly-linked-list.js";

const list = new DoublyLinkedList();
// list.push(10);
// list.push(11);
// list.push("Last Item");
// list.print();
// // console.log(list);
// const last = list.pop();
// console.log(last);
// list.print();
// console.log("SHIFT");
// const first = list.shift();
// // console.log(first);
// list.print();
// // console.log(list);
// list.push(32);
// list.print();
// // console.log(list);

// list.shift();
// list.print();
// list.shift();

// // console.log(list);
// console.log("UNSHIFT");
// list.unshift(1);
// list.unshift(2);
// list.unshift(3);
// list.print();
// console.log(list);
// console.log("GET");
// console.log(list.get(0));
// console.log(list.get(1));
// console.log(list.get(2));
// // console.log(list.get(3));
// list.print();
// console.log("SET");

// console.log(list.set("Hi", 0));
// console.log(list.set("There", 1));
// console.log(list.set("again", 2));
// list.print();
// // console.log(list);

// console.log("INSERT");
// list.pop();
// list.pop();
// list.pop();
list.insert("0", 0);
// list.print();

list.insert(1, 0);
list.insert(2, 1);

list.insert(6, list.length);
list.print();
console.log(list);

// console.log(list);
console.log("REMOVE");
// list.print();
// list.remove(2);
// list.print();
// console.log(list);

list.print();

list.remove(0);
list.print();
console.log(list);
list.remove(list.length - 1);
list.print();
let node = list.remove(1);
console.log(node);
list.print();
