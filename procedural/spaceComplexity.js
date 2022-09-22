function booo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log('booo')
  }
}

booo([1, 2, 3, 4, 5]) // O(1)

function fillArrayNTimes(n) {
  const hiArray = [] // data structure
  for (i = 0; i < n; i++) {
    hiArray[i] = 'hi'
  }
  return hiArray;
}

console.log(fillArrayNTimes(7)) // O(n)

