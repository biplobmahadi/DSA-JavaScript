class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (currentNode !== null) {
        if (currentNode.value < value) {
          const temp = currentNode.right;
          if (currentNode.right === null) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = temp;
        } else {
          const temp = currentNode.left;
          if (currentNode.left === null) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = temp;
        }
      }
    }
  }

  lookup(value) {
    let currentNode = this.root;
    if (currentNode.value === value) return currentNode;
    while (currentNode !== null) {
      if (currentNode.value < value) {
        const nextNode = currentNode.right;
        if (nextNode && nextNode.value === value) return nextNode;
        currentNode = nextNode;
      } else {
        const nextNode = currentNode.left;
        if (nextNode && nextNode.value === value) return nextNode;
        currentNode = nextNode;
      }
    }
    return undefined;
  }
}

const bst = new BinarySearchTree();
bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(20);
bst.insert(170);
bst.insert(15);
bst.insert(1);

console.log(bst.lookup(20));

// console.log(JSON.stringify(traverse(bst.root)));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
