var height = parseInt(prompt("Введите высоту треугольника"));

for (var row = 0; row < height; row++) {
    for (var symbol = 1; symbol <= height + row; symbol++) {
        if (symbol >= height - row) document.write("* ");
        else document.write("&nbsp; &nbsp;");
    }
    document.write("<br>");
}

for (row = 0; row < height; row++) {
    for (symbol = 1; symbol <= height + row; symbol++) {
        if (symbol === height - row || symbol === height + row || row === height - 1) document.write("* ");
        else document.write("&nbsp; &nbsp;");
    }
    document.write("<br>");
}