class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length == 0) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (this.length == 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
  }
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(20);
// console.log(queue.peek());
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue);
