class Stack {
  constructor() {
    this.arr = [];
  }

  peek() {
    return this.arr[this.arr.length - 1];
  }

  push(value) {
    this.arr.push(value);
    return this;
  }

  pop() {
    this.arr.pop();
    return this;
  }
}

const stack = new Stack();
stack.push(5);
stack.push(10);
stack.push(15);
stack.push(20);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log(stack.peek());
console.log(stack);
