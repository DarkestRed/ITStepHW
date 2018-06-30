var num = parseInt(prompt("Введите число:"));
var summa = 0;

while (num > 0) {
    summa = summa + num % 10;
    num = parseInt(num / 10);
}
alert("Сумма цифр: " + summa);