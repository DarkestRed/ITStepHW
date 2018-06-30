function rand(a, b) {
    return Math.round(Math.random() * (b - a)) + a;
}

var tries = 5;
var x;

while (tries > 0) {
    if (tries === 5) x = rand(1, 100);
    var ans = parseInt(prompt("Введите целое число от 1 до 100" + " (Для проверки, загаданное число " + x + ")"));
    if (ans > 100 || ans === 0 || ans !== ans) {
        alert("Вы ввели некорректный ответ, попробуйте еще раз.");
        continue;
    }
    tries--;
    if (ans === x) {
        if (confirm("Правильно! Нужное число " + x + "\nВы выиграли!\nХотите сыграть еще?")) tries = 5;
        else {
            alert("Спасибо за игру!");
            break;
        }
    }
    else if (tries === 0) {
        if (confirm("Попытки исчерпаны!\nВы проиграли!\nНужное число было " + x + "\nХотите сыграть еще?")) tries = 5;
        else {
            alert("Спасибо за игру!");
            break;
        }
    }
    else if (ans > x) alert("Нет, слишком много!\nОсталось попыток: " + tries);
    else if (ans < x) alert("Нет, слишком мало!\nОсталось попыток: " + tries);
}