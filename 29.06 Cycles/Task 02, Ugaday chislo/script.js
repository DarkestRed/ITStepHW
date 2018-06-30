function rand(a, b) {
    return Math.round(Math.random() * (b - a)) + a;
}

var tryes = 5;
var x;

while (tryes > 0) {
    if (tryes === 5) x = rand(1, 100);
    var ans = parseInt(prompt("Введите число от 1 до 100 " + x));
    tryes--;
    if (ans === x) {
        if (confirm("Правильно! Нужное число " + x + "\nВы выиграли!\nХотите сыграть еще?")) tryes = 5;
        else {
            alert("Спасибо за игру!");
            break;
        }
    }
    else if (tryes === 0) {
        if (confirm("Попытки исчерпаны!\nВы проиграли!\nНужное число было " + x + "\nХотите сыграть еще?")) tryes = 5;
        else {
            alert("Спасибо за игру!");
            break;
        }
    }
    else if (ans > x) alert("Нет, слишком много!\nОсталось попыток: " + tryes);
    else if (ans < x) alert("Нет, слишком мало!\nОсталось попыток: " + tryes);
}