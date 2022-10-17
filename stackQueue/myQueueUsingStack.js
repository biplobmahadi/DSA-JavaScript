// only use stack push, pop, peek, isEmpty method
// can't use this.stack[0] or this.stack[this.stack.length - 1]

class QueueUsingStack {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value) {
    this.stack1.push(value);
    return this.stack1;
  } // O(1)

  dequeue() {
    const len = this.stack1.length;
    for (let i = 0; i < len; i++) {
      this.stack2.push(this.stack1.pop());
    }
    const ans = this.stack2.pop();

    const len2 = this.stack2.length;
    for (let i = 0; i < len2; i++) {
      this.stack1.push(this.stack2.pop());
    }

    return ans;
  } // O(n)

  peek() {} // need to implement stack peek 1st
  // O(n)
}

const queue = new QueueUsingStack();
console.log(queue.enqueue(5));

console.log(queue.enqueue(10));
console.log(queue.enqueue(15));
console.log(queue.enqueue(20));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.enqueue(25));
console.log(queue.dequeue());
