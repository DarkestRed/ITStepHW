var a = 0;
var b = 0;

while (++a < 10) {
    while (++b < 10) console.log(a + " * " + b + " = " + a * b);
    console.log("");
    b = 0;
}