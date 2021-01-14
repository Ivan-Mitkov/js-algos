class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
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

  dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    //{A:0,B:Infinity} current distances used for compare
    const distances = {};
    //{A:null,B:A} from where visit
    const previuos = {};
    //the return
    const path = [];
    //INITIAL STATE
    //build initial distances start=0 , others=Infinity
    // add to priority queue vertices with initial priority
    //set previos to all verteces be null
    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previuos[vertex] = null;
    }
    // while there is something in queue inspect the neighbours
    let smallest;
    while (nodes.values.length) {
      //1. deque the node with shortest path, get only vertex name
      //get  the name of the vertex with the smallest value from priority queue "A" or "B"
      smallest = nodes.dequeue().val;
      //if the smallest value is the goal node, end
      if (smallest === finish) {
        //we are done
        // console.log("Distances", distances);
        // console.log("Previous: ", previuos);

        while (previuos[smallest]) {
          path.push(smallest);
          smallest = previuos[smallest];
        }
        // console.log("Path", path);
        break;
      }
      if (smallest && distances[smallest] !== Infinity) {
        //explore the neighbours
        for (let neighbour in this.adjacencyList[smallest]) {
          //find neighbour nodes {node:A, weight:3}
          let nextNode = this.adjacencyList[smallest][neighbour];
          // console.log(nextNode);
          //calculate new distance to neighbour node current small and add the new distance
          let candidatePath = distances[smallest] + nextNode.weight;
          //compare what currently has stored as shortest path in "distance" with what is in the neighbour distances[smallest]+nextNode.weight  e.g.  compare the current shortes value from A to D through B with the current shortest of A to D

          if (candidatePath < distances[nextNode.node]) {
            //if that's the case update new smallest distance to neighbour
            distances[nextNode.node] = candidatePath;
            //update previous - show new shortest path how we got to nextNode.node
            previuos[nextNode.node] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNode.node, candidatePath);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.dijkstra("A", "E"));
// console.log(graph.adjacencyList)
