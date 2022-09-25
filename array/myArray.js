class MyArray {
  constructor() {
    this.len = 0;
    this.data = {};
  }

  get() {
    return {
      len: this.len,
      data: this.data
    }
  }

  push(item) {
    this.data[this.len] = item;
    this.len++;
    return this.len;
  }

  pop() {
    const lastItem = this.data[this.len - 1];
    delete this.data[this.len - 1];
    this.len--;
    return lastItem;
  }

  insertAt(position, item) {
    if (position >= this.len || position < 0) {
      throw Error('Not have this item!');
    }
    this.shiftForInsert(position, item)
    return this.data;
  }

  shiftForInsert(position, item) {
    for (let i = this.len; i > position; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[position] = item;
    this.len++;
  }

  delete(position) {
    if (position >= this.len || position < 0) {
      throw Error('Not have this item!');
    }
    const item = this.data[position]
    this.shiftItemForDelete(position);
    return item;
  }

  shiftItemForDelete(position) {
    for (let i = position; i < this.len - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.len - 1]
    this.len--;
  }

}

const newArr = new MyArray()
newArr.push('a') // O(1)
newArr.push('b') // O(1)
newArr.push('c') // O(1)
newArr.push('d') // O(1)
newArr.push('e') // O(1)

// newArr.pop() // O(1)
// newArr.pop() // O(1)

newArr.insertAt(3, 'x') // O(n)

// newArr.delete(0) // O(n)
// newArr.delete(2) // O(n)

console.log(newArr.get())