class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length == 0) {
      this.bottom = newNode;
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
  }

  pop() {
    if (this.length) {
      this.top = this.top.next;
      if (this.length == 1) this.bottom = null;
      this.length--;
    }
  }
}

const stack = new Stack();
stack.push(3);
stack.push(4);
stack.push(5);
// stack.pop();
// stack.pop();
// stack.pop();
console.log(stack.peek());
console.log(stack);
