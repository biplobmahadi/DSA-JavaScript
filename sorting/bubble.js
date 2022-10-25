const numbers = [5, 3, 10, 6, 2, 55, 7, 8, 1, 23, 9, 2, 4];

const bubbleSort = (numbers) => {
  let len = numbers.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (numbers[j] > numbers[j + 1]) {
        const tmp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = tmp;
      }
    }
  }

  return numbers;
};

const res = bubbleSort(numbers);
console.log(res);
