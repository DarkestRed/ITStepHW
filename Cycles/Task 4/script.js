var word = prompt("Введите слово:");
var num = parseInt(prompt("Введите число строк:"));
var a = 1;
var b = word;

while (a <= num) {
    console.log(b);
    b = b +" "+ word;
    a++;
}