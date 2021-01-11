class Queue {
  constructor() {
    this.arr = new Array();
  }
  enqueue(val) {
    return this.arr.push(val);
  }
  dequeue() {
    return this.arr.shift();
  }
  empty() {
    return this.arr.length === 0;
  }
}

export class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    //Not overwriting vertices
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(v1, v2, weight) {
    if (!this.adjacencyList[v1]) {
      this.addVertex(v1);
    }
    if (!this.adjacencyList[v2]) {
      this.addVertex(v2);
    }
    this.adjacencyList[v1].push({ node: v2, weight: weight });
    this.adjacencyList[v2].push({ node: v1, weight: weight });
  }
  removeEdge(v1, v2) {
    if (this.adjacencyList[v1]) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter(
        (x) => x.node !== v2
      );
    }
    if (this.adjacencyList[v2]) {
      this.adjacencyList[v2] = this.adjacencyList[v2].filter(
        (x) => x.node !== v1
      );
    }
  }
  removeVertex(v) {
    if (this.adjacencyList[v]) {
      //delete vertex in other vertices arrays
      for (const key in this.adjacencyList) {
        this.adjacencyList[key] = this.adjacencyList[key].filter(
          (x) => x.node !== v
        );
      }
      //delete vertex
      this.adjacencyList[v] = null;
      delete this.adjacencyList[v];
    }
  }

  traverseDfs(vertex) {
    const vertices = [];
    const visited = {};
    //arrow function not creating other this so can use this.adjacencyList in dfs
    const dfs = (vertex) => {
      if (!vertex) {
        return;
      }
      vertices.push(vertex);
      visited[vertex] = true;

      for (const v of this.adjacencyList[vertex]) {
        if (!visited[v.node]) {
          dfs(v.node);
        }
      }
    };

    dfs(vertex);
    return vertices;
  }

  traverseDfsIterative(start) {
    const stack = [];
    const visited = {};
    //push the starting
    stack.push(start);
    const result = [];
    while (stack.length > 0) {
      //get the start
      let vertex = stack.pop();

      if (!visited[vertex]) {
        //label it as discovered
        visited[vertex] = true;
        result.push(vertex);
        //push it into the stack all it's neighbours
        this.adjacencyList[vertex].forEach((elem) => stack.push(elem.node));
      }
    }
    return result;
  }

  bfs(vertex) {
    const queue = new Queue();
    const visited = {};
    const result = [];
    queue.enqueue(vertex);
    visited[vertex] = true;

    while (!queue.empty()) {
      //get current to visit
      let current = queue.dequeue();
      //push it into results
      result.push(current);
      //put in queue all of current neighbours which are not visited yet
      for (const item of this.adjacencyList[current]) {
        if (!visited[item.node]) {
          visited[item.node] = true;
          queue.enqueue(item.node);
        }
      }
    }

    return result;
  }
}
