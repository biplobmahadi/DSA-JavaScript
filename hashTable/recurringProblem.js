// [2, 3, 4, 5, 2, 3, 5, 8] -> 2
// [2, 1, 1, 4, 7] -> 1
// [1, 3, 8, 5, 7] -> undefined

const findRecurringNum = (arr) => {
  const prevNumArr = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(prevNumArr)
    for (let j = 0; j < prevNumArr.length; j++) {
      if (prevNumArr[j] === arr[i]) {
        return arr[i]
      }
    }
    prevNumArr.push(arr[i])
  }
  return undefined;
}

console.log(findRecurringNum([2, 1, 5, 8])) // O(n^2) & O(1)

const updatedFindRecurring = (arr) => {
  const obj = {}
  for (let i = 0; i < arr.length; i++) {
    console.log(obj)
    if (obj[JSON.stringify(arr[i])] === arr[i]) {
      return arr[i]
    }
    obj[JSON.stringify(arr[i])] = arr[i]
  }
  return undefined;
}
// console.log(updatedFindRecurring([2, 1, 1, 5, 2, 3, 5, 8])) // O(n) & O(n)