// 10->4->6

// const linkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 4,
//       next: {
//         value: 6,
//         next: null
//       }
//     }
//   },
//   length: 3
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  } // O(1)

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  } // O(1)

  printList() {
    const list = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return list;
  } // O(n)

  findPrevIndexedNode(index) {
    let counter = 1;
    let prevIndexedNode = this.head;
    while (counter !== index) {
      counter++;
      prevIndexedNode = prevIndexedNode.next;
    }
    return prevIndexedNode;
  }

  insert(index, value) {
    if (index <= 0) {
      this.prepend(value);
    } else if (index >= this.length) {
      this.append(value);
    } else {
      const prevIndexedNode = this.findPrevIndexedNode(index);

      const newNode = new Node(value);
      newNode.next = prevIndexedNode.next;
      prevIndexedNode.next = newNode;
      this.length++;
    }
  } // O(n)

  remove(index) {
    if (index <= 0) {
      if (this.head.next === null) {
        this.head = null;
      } else {
        this.head = this.head.next;
      }
      this.length--;
    } else if (this.length >= index) {
      const prevIndexedNode = this.findPrevIndexedNode(index);

      const unwantedNode = prevIndexedNode.next;
      prevIndexedNode.next = unwantedNode.next;
      this.length--;
    }
  } // O(n)

  reverse() {
    let prevNode = null;
    let currentNode = this.head;
    this.tail = currentNode;

    while (currentNode !== null) {
      let temp = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = temp;
    }
    this.head = prevNode;
    this.tail.next = null;
  } // O(n) & O(1)
}

const myLinkedList = new MyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(15);
myLinkedList.prepend(20);
// myLinkedList.insert(2, 30);
// myLinkedList.insert(4, 50);
// myLinkedList.remove(5);
// myLinkedList.remove(3);
myLinkedList.reverse();
console.log(myLinkedList.tail);
