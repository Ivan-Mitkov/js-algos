import { SinglyLinkedList } from "./singlyLinkedList.js";

const list = new SinglyLinkedList();
list.push("Hi");
// console.log(list);
list.push("There");
// console.log(list);
list.push("Again");
list.push(0);
list.push(12);
// console.log(list.length);
// console.log(list);
list.print();
list.pop();
list.print();

list.pop();
list.print();

list.pop();
list.print();

list.pop();
list.print();

list.pop();
list.print();
list.push("Some");
list.print();
console.log(list.shift());
list.print();
list.shift();
list.print();
list.push("first");
list.push("second");
list.print();
list.shift();
list.print();
list.unshift("third");
list.unshift(90);
list.print();
list.pop();
list.print();
list.unshift("%");
list.print();
list.pop();
list.pop();
list.pop();
list.unshift("HEAD");
list.unshift("TAIL");
list.unshift("!");
// console.log(JSON.stringify(list, null, 2));
console.log(list.get(0));
console.log(list.get(1));
console.log(list.get(2));
list.print();
console.log("SET");

console.log(list.set("Hi", 0));
console.log(list.set("There", 1));
console.log(list.set("again", 2));
list.print();
console.log(JSON.stringify(list, null, 2));

console.log("INSERT");

list.insert("(", 0);
list.print();

// console.log(JSON.stringify(list, null, 2));

list.insert("$", 0);
list.insert("-", 1);
list.insert("!", 2);
list.insert("?", 3);
list.insert("Hello", 1);
list.insert("Last", list.length);
list.print();

console.log(JSON.stringify(list, null, 2));
console.log("REMOVE");
list.print();
list.remove(2);
list.print();

list.remove(0);
list.print();
list.remove(list.length - 1);
list.print();
list.remove(list.length);
list.print();

// console.log(JSON.stringify(list, null, 2));
console.log('REVERSE')
list.reverse();
list.print();

console.log(JSON.stringify(list, null, 2));
