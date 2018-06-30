var date = parseInt(prompt("Введите число"));
var month = parseInt(prompt("Введите месяц"));
var year = parseInt(prompt("Введите год"));

var a = parseInt((14 - month) / 12);
var y = year - a;
var m = month + 12 * a - 2;
var weekday = parseInt((date + y + y / 4 - y / 100 + y / 400 + (31 * m) / 12) % 7);

if (weekday === 0) alert("Воскресенье");
else if (weekday === 1) alert("Понедельник");
else if (weekday === 2) alert("Вторник");
else if (weekday === 3) alert("Среда");
else if (weekday === 4) alert("Четверг");
else if (weekday === 5) alert("Пятница");
else if (weekday === 6) alert("Суббота");