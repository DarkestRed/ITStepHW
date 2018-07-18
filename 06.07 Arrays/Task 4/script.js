let arr = [4, 8, 1, 3, 9, 6, 2, 5];
console.log(arr);
for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
        if (arr[j] < arr[min]) min = j;
    }
    let buff = arr[i];
    arr[i] = arr[min];
    arr[min] = buff;
}
console.log(arr);