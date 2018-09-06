function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        b = a + b;
        a = b - a;
    }
    return b;
}

//Рекурсия нормально так и не получилась.