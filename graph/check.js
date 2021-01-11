import { Graph } from "./graph.js";
import { WeightedGraph } from "./weighted_graph.js";

// const g = new Graph();
// g.addVertex("Tokyo");
// g.addVertex("Tokyo");
// g.addEdge("Tokyo", "Osaka");
// g.addEdge("Tokyo", "Yokohama");
// g.addEdge("Tokyo", "Nagoia");
// g.addEdge("Yokohama", "Nagoia");
// g.addEdge("Osaka", "Nagoia");
// g.removeVertex("Nagoia");
// console.log(g);
// g.removeVertex("Tokyo");
// console.log(g);
// console.log(g.traverseDfs('Tokyo'))
// let g2 = new Graph();

// g2.addVertex("A");
// g2.addVertex("B");
// g2.addVertex("C");
// g2.addVertex("D");
// g2.addVertex("E");
// g2.addVertex("F");

// g2.addEdge("A", "B");
// g2.addEdge("A", "C");
// g2.addEdge("B", "D");
// g2.addEdge("C", "E");
// g2.addEdge("D", "E");
// g2.addEdge("D", "F");
// g2.addEdge("E", "F");
// g2.addVertex('I');
// g2.addEdge("I","L");
// g2.addEdge("M","N")
// g2.addEdge("M","I")
// g2.addEdge("C","I")

// const result=g2.traverseDfs("A");
// const result2=g2.traverseDfsIterative("A");
// const result3=g2.bfs("A");
// console.log(result)
// console.log(result2)
// console.log(result3)
// console.log(g2);

//          A      M-N
//        /   \   /
//       B     C-I-L
//       |     |
//       D --- E
//        \   /
//          F
const wg = new WeightedGraph();
wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");
wg.addVertex("D");
wg.addVertex("E");
wg.addEdge("A", "B", 12);
wg.addEdge("A", "C", 1);
wg.addEdge("B", "D", 100);
wg.addEdge("C", "E", 2);

console.log(wg.adjacencyList);

// wg.removeVertex("B");
// console.log(wg.adjacencyList);
// wg.removeEdge("E","C");
// console.log(wg.adjacencyList);
console.log(wg.traverseDfs('A'))
console.log(wg.traverseDfsIterative('A'))
console.log(wg.bfs('A'))
// console.log(wg.adjacencyList);