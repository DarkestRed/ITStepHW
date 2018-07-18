let arr = [3, 6, 2, 1, 7, 5, 9, 4];
console.log(arr);
let min = 0;
let max = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[min]) min = i;
    if (arr[i] > arr[max]) max = i;
}
let buff = arr[min];
arr[min] = arr[max];
arr[max] = buff;
console.log(arr);