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
    if (!currentNode) return false;

    while (currentNode) {
      if (currentNode.value < value) {
        currentNode = currentNode.right;
      } else if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else {
        return currentNode;
      }
    }
    return false;
  }

  remove(value) {
    // there is no root
    if (!this.root) return false;
    // there is only one node on root
    if (!this.root.left && !this.root.right) {
      this.root = null;
      return this.root;
    }
    // there are child of root node
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (currentNode.value > value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (currentNode.value < value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        // got match
        // if there have no leaf of match
        if (!currentNode.left && !currentNode.right) {
          // check is it left of parent node or not
          if (parentNode.left.value === currentNode.value) {
            parentNode.left = null;
            return this.root;
          } else {
            parentNode.right = null;
            return this.root;
          }
        }
        // if there are only one leaf(left or right)
        if (currentNode.left && !currentNode.right) {
          const replacedNode = currentNode.left;
          // check current node is left of parent node or not
          if (parentNode.left.value === currentNode.value) {
            parentNode.left = replacedNode;
            return this.root;
          } else {
            parentNode.right = replacedNode;
            return this.root;
          }
        } else if (!currentNode.left && currentNode.right) {
          const replacedNode = currentNode.right;
          // check current node is left of parent node or not
          if (parentNode.left.value === currentNode.value) {
            parentNode.left = replacedNode;
            return this.root;
          } else {
            parentNode.right = replacedNode;
            return this.root;
          }
        }

        // if there are two leaf
        if (currentNode.left && currentNode.right) {
          const subRoot = currentNode.right;
          // if subRoot have no left
          if (!subRoot.left) {
            subRoot.left = currentNode.left;
            // check current node is left of parent node or not
            if (parentNode.left.value === currentNode.value) {
              parentNode.left = subRoot;
              return this.root;
            } else {
              parentNode.right = subRoot;
              return this.root;
            }
          } else {
            // sub root have left
            // find min left node of subRoot
            let currentMinNode = subRoot;
            let parentMinNode;
            while (currentMinNode.left) {
              parentMinNode = currentMinNode;
              currentMinNode = currentMinNode.left;
            }
            // if min node have no right
            if (!currentMinNode.right) {
              currentMinNode.left = currentNode.left;
              currentMinNode.right = currentNode.right;
              parentMinNode.left = null;
              if (parentNode.left.value === currentNode.value) {
                parentNode.left = currentMinNode;
                return this.root;
              } else {
                parentNode.right = currentMinNode;
                return this.root;
              }
            } else {
              // if min node have right
              parentMinNode.left = currentMinNode.right;
              currentMinNode.left = currentNode.left;
              currentMinNode.right = currentNode.right;
              if (parentNode.left.value === currentNode.value) {
                parentNode.left = currentMinNode;
                return this.root;
              } else {
                parentNode.right = currentMinNode;
                return this.root;
              }
            }
          }
        }
      }
    }
    return false;
  }
}

const bst = new BinarySearchTree();
bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(20);
bst.insert(170);
bst.insert(180);
bst.insert(160);
bst.insert(165);
bst.insert(155);
bst.insert(157);
bst.insert(156);
bst.insert(158);
bst.insert(15);
bst.insert(1);

// console.log(bst.remove(20));

console.log(JSON.stringify(traverse(bst.remove(20))));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
