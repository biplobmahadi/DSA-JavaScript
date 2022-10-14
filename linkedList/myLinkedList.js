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
    this.next = null
  }
}

class MyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
}

const myLinkedList = new MyLinkedList(10)
myLinkedList.append(5)
myLinkedList.append(15)
myLinkedList.prepend(20)
console.log(myLinkedList.head.next)