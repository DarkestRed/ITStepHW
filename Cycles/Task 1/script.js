var x = parseInt(prompt("Введите число"));
var a = 1;
var count = 0;

while (a <= 100) {
    if (a % x === 0) count++;
    a++;
}
alert(count);