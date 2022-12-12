const SelectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    swap(arr, i, min);
  }

  function swap(arr, k, l) {
    let temp = arr[k];
    arr[k] = arr[l];
    arr[l] = temp;
  }
  return arr;
};

let arr = [1, 5, 6, 4, 8, 9];
let output = SelectionSort(arr);
console.log(output);
