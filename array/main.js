const arr = ['a', 'b', 'c', 'd']

arr[2] // O(1)

arr.push('e') // O(1)

arr.pop() // O(1)

arr.unshift('x') // O(n) -> change every index

arr.splice(2, 0, 't') // O(n) -> insert tn change next indexes

console.log(arr)