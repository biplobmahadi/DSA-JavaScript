const numbers = [5, 3, 10, 6, 2, 55, 7, 8, 1, 23, 9, 2, 4];

const selection = (arr) => {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    const tmp = arr[i];
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }

    arr[i] = arr[min];
    arr[min] = tmp;
  }

  return arr;
};

const res = selection(numbers);
console.log(res);
