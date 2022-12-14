//            ->   ->    -> null
//          2    5     6
// null <-    <-    <-
// head, tail with prev, next

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class MyDoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    }
    this.tail = this.head;
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
  } // O(1)

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head;
    this.head.prev = newNode;
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
      this.prepend(value)
    } else if (index >= this.length) {
      this.append(value)
    } else {
      const prevIndexedNode = this.findPrevIndexedNode(index)
      const indexedNode = prevIndexedNode.next

      const newNode = new Node(value);
      newNode.prev = prevIndexedNode
      newNode.next = indexedNode;
      prevIndexedNode.next = newNode;
      indexedNode.prev = newNode;
      this.length++;
    }
  } // O(n)

  remove(index) {
    if (index <= 0) {
      if (this.head.next === null) {
        this.head = null;
      } else {
        const nextNode = this.head.next;
        nextNode.prev = null;
        this.head = nextNode;
      }
      this.length--;
    } else if (this.length >= index) {
      const prevIndexedNode = this.findPrevIndexedNode(index)
      const unwantedNode = prevIndexedNode.next;

      prevIndexedNode.next = unwantedNode.next;
      
      if(unwantedNode.next !== null){
        const nextIndexedNode = unwantedNode.next;
        nextIndexedNode.prev = prevIndexedNode
      }

      this.length--;
    }
  } // O(n)
}

const myLinkedList = new MyDoublyLinkedList(10)
myLinkedList.append(5)
myLinkedList.append(15)
myLinkedList.prepend(20)
myLinkedList.insert(2, 30)
myLinkedList.insert(4, 50)
myLinkedList.remove(5)
myLinkedList.remove(3)
console.log(myLinkedList.printList(), myLinkedList.length, myLinkedList.head)