class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    //Not overwriting vertices
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(v1, v2) {
    if (!this.adjacencyList[v1]) {
      this.addVertex(v1);
    }
    if (!this.adjacencyList[v2]) {
      this.addVertex(v2);
    }
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    if (this.adjacencyList[v1]) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter((x) => x !== v2);
    }
    if (this.adjacencyList[v2]) {
      this.adjacencyList[v2] = this.adjacencyList[v2].filter((x) => x !== v1);
    }
  }
  removeVertex(v) {
    if (this.adjacencyList[v]) {
      //delete vertex in other vertices arrays
      for (const key in this.adjacencyList) {
        this.adjacencyList[key] = this.adjacencyList[key].filter(
          (x) => x !== v
        );
      }
      //delete vertex
      this.adjacencyList[v] = null;
      delete this.adjacencyList[v];
    }
  }
}

const g = new Graph();
g.addVertex("Tokyo");
g.addVertex("Tokyo");
g.addEdge("Tokyo", "Osaka");
g.addEdge("Tokyo", "Yokohama");
g.addEdge("Tokyo", "Nagoia");
g.addEdge("Yokohama", "Nagoia");
g.addEdge("Osaka", "Nagoia");
// g.removeVertex("Nagoia");
console.log(g);
g.removeVertex("Tokyo");
console.log(g);


