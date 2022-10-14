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
  } // O(1)

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  } // O(1)

  printList() {
    const list = []
    let currentNode = this.head;
    while (currentNode !== null) {
      list.push(currentNode.value)
      currentNode = currentNode.next
    }
    return list;
  } // O(n)

  insert(index, value) {
    if (index <= 0) {
      this.prepend(value)
    } else if (index >= this.length) {
      this.append(value)
    } else {
      let counter = 1;
      let indexedNode = this.head;
      while (counter !== index) {
        counter++;
        indexedNode = indexedNode.next;
      }
      const newNode = new Node(value);
      newNode.next = indexedNode.next;
      indexedNode.next = newNode;
      this.length++;
    }
  } // O(n)
}

const myLinkedList = new MyLinkedList(10)
myLinkedList.append(5)
myLinkedList.append(15)
myLinkedList.prepend(20)
myLinkedList.insert(2, 30)
myLinkedList.insert(4, 50)
console.log(myLinkedList.printList())