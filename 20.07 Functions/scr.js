/*************************Task 1************************/
function triangleSquare(a, b, c) {
    let p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

console.log(triangleSquare(3, 4, 5));

/*************************Task 2************************/
function minNum(num1, num2) {
    if (num1 < num2) return num1;
    return num2;
}

console.log(minNum(8, 5));

/*************************Task 3************************/
function minArr(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        min = minNum(min, arr[i + 1]);
    }
    return min;
}

console.log(minArr([3, 7, 5, 1, 9, 6]));

/*************************Task 4************************/
function minGde(arr, start, end) {
    let min = start;
    for (let i = start; i < end; i++) {
        if (arr[i] < arr[min]) min = i;
    }
    return min;
}

console.log(minGde([3, 5, 7, 2, 1, 4, 8, 9, 6], 2, 7));

/*************************Task 5************************/
function sortArray(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = minGde(arr, i, arr.length);
        let buff = arr[i];
        arr[i] = arr[min];
        arr[min] = buff;
    }
    return arr;
}

console.log(sortArray([3, 5, 7, 2, 1, 4, 8, 9, 6]));

/*************************Task 6************************/
function evenSum(arr) {
    let sum = 0;
    for (let i in arr) if (arr[i] % 2 === 0) sum += arr[i];
    return sum;
}

console.log(evenSum([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/*************************Task 7************************/
function indexOf(num, arr) {
    for (let i in arr) if (arr[i] === num) return i;
    return -1;
}

console.log(indexOf(4, [1, 2, 4, 5, 7, 8]));