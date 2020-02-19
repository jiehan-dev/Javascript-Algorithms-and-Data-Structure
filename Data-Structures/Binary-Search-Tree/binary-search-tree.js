class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;

      while (true) {
        if (val === current.val) return undefined; // duplicate vertex is not allowed
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  contains(val) {
    if (this.root === null) return false;

    let current = this.root,
      found = false;

    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }

    return found;
  }

  BFS() {
    //Breath-first Search, visit every node
    // use array as queue for simplicity
    let data = [],
      queue = [],
      node = null;

    queue.push(this.root);

    while (queue.length) {
      node = queue.shift();

      data.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  DFSPreOrder() {
    // Depth-first Search, Pre Order
    // Visit the node first, then all the left nodes, then right nodes
    let data = [];

    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    // Depth-first Search, Post Order
    // Search left first, then right, then node
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      data.push(node.val);
    }

    traverse(this.root);

    return data;
  }

  DFSInOrder() {
    // Depth-first Search, In Order

    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

