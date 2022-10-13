class MyHashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value) {
    const hash = this._hash(key)
    if (!this.data[hash]) {
      this.data[hash] = []
    }
    this.data[hash].push([key, value])
    return this.data
  } // O(1)

  get(key) {
    const hash = this._hash(key)
    const bucket = this.data[hash]
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1]
      }
    }
    return undefined
  } // O(1), O(n) if collision 

  keys() {
    const keysArr = []
    for(let i = 0; i< this.data.length ; i++) {
      const arrElement = this.data[i]
      if(arrElement) {
        for(let j = 0; j< arrElement.length; j++){
          keysArr.push(arrElement[j][0])
        }
      }
    }
    return keysArr;
  } // O(n^2) --> so bad to use hash table for this case
}

const obj = new MyHashTable(2)
obj.set('apple', 300)
obj.set('grape', 40)
console.log(obj.keys())
console.log(obj.data)