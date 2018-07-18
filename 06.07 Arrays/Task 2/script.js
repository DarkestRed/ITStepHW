let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr);
for (let i = 0; i < arr.length - 1 - i; i++) {
    let buff = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = buff;
}
console.log(arr);