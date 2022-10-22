class MyGraph {
  constructor() {
    this.totalNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    if (this.adjacentList[node]) {
      return false;
    }
    this.adjacentList[node] = [];
    this.totalNodes++;
    return this;
  }

  addEdges(node1, node2) {
    // check node1 and node2 available in adjacentList
    if (
      this.adjacentList[node1] &&
      this.adjacentList[node2] &&
      node1 !== node2
    ) {
      // check already connected or not
      if (!this.adjacentList[node1].includes(node2)) {
        this.adjacentList[node1].push(node2);
      }
      if (!this.adjacentList[node2].includes(node1)) {
        this.adjacentList[node2].push(node1);
      }
      return this;
    }

    return false;
  }
}

const graph = new MyGraph();
graph.addVertex('0');
graph.addVertex('1');
graph.addVertex('2');
graph.addEdges('0', '1');
graph.addEdges('0', '2');
graph.addEdges('1', '2');
graph.addEdges('1', '0');

console.log(graph);
