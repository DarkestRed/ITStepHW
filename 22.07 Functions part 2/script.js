function reduce(arr, f, init) {
    prev = init;
    for (let i in arr) prev = f(prev, arr[i]);
    return prev;
}

console.log(reduce([1, 2, 3, 4], (p, e) => p + e, 0));
console.log(reduce([1, 2, 3, 4], (p, e) => p * e, 1));

function some(arr, f) {
    for (let i in arr) if (f(arr[i])) return true;
    return false;
}

console.log(some([1, 4, 3, 5], e => e % 2 === 0));
console.log(some([1, 3, 5, 7], e => e % 2 === 0));

function every(arr, f) {
    for (let i in arr) if (!f(arr[i])) return false;
    return true;
}

console.log(every([4, 6, 2, 8], e => e % 2 === 0));
console.log(every([4, 3, 6, 2], e => e % 2 === 0));