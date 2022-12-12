

let arr = [2, 5, 8, 9, 6, 4];  //input
let n = arr.length;

console.log(BubbleSort(arr, n)); // output : [2,4,5,6,8,9]

function BubbleSort(arr, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
  function swap(arr, k, l) {
    let temp = arr[k];
    arr[k] = arr[l];
    arr[l] = temp;
  }
}
