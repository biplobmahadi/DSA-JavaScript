const numbers = [5, 3, 10, 6, 2, 55, 7, 8, 1, 23, 9, 2, 4];

const insertion = (arr) => {
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    if (arr[0] > arr[i]) {
      arr.unshift(arr.splice(i, 1)[0]);
    } else {
      for (let j = 1; j < i; j++) {
        if (arr[i] >= arr[j - 1] && arr[i] < arr[j]) {
          arr.splice(j, 0, arr.splice(i, 1)[0]);
        }
      }
    }
  }

  return arr;
};

const res = insertion(numbers);
console.log(res);

// const arr = [1, 4, 6];
// arr.splice(1, 0, 3);
// arr.splice(3, 1);

// console.log(arr.splice(1, 1, 3));
