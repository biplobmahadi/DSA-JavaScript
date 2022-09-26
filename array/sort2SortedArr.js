const sort2SortedArr = (arr1, arr2) => {
  if(arr1.length === 0) return arr2;
  if(arr2.length === 0) return arr1;
  const sortedArr = [];

  let arr1Item = arr1[0];
  let arr2Item = arr2[0];

  let i = 1;
  let j = 1;
  while (arr1Item || arr2Item) {
    if(!arr2Item || arr1Item < arr2Item) { // logic is critical
      sortedArr.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      sortedArr.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  } 
  return sortedArr;
}

sort2SortedArr([1, 3, 6], [4]) // O(n)
