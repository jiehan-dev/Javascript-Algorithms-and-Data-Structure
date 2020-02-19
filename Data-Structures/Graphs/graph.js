// A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered paris for a directed graph.
// In short, graph is Nodes + Connections

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  depthFirstSearchRecursive(startingVertex) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;

      visited[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(startingVertex);

    return result;
  }

  depthFirstSearchIterative(startingVertex) {
    const stack = [startingVertex];
    const visited = {};
    const result = [];

    visited[startingVertex] = true;

    while (stack.length) {
      let currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbour => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          stack.push(neighbour);
        }
      });
    }

    return result;
  }

  breadthFirstSearch(startingVertex) {
    const queue = [startingVertex];
    const visited = {};
    const result = [];
    visited[startingVertex] = true;

    while (queue.length) {
      let currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbour => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }

    return result;
  }
}

let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

g.depthFirstSearchRecursive('A'); // A,B,D,E,C,F
g.depthFirstSearchIterative('A'); // A,C,E,F,D,B
/*
      A
    /   \
   B     C
   |     |
   D --- E
    \   /
      F
*/
