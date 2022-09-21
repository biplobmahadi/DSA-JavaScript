const boxes = [1, 2, 3, 4, 5]

const logAllPairOfArr = (array) => {
  array.forEach((boxEl1) => {
    array.forEach((boxEl2) => {
      console.log([boxEl1, boxEl2])
    })
  })
}

logAllPairOfArr(boxes)

// O(n^2)