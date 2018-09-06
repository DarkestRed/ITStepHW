function stringReplace1(string, from, to) {
    return string.split(from).join(to);
}

console.log(stringReplace1("hello world, hello people", "hello", "good by"));

// function stringReplace2(string, from, to) {
//     while (string.indexOf(from) > -1) {
//         string = to + string.slice((string.indexOf(from) + from.length));
//     }
//     return string;
// }
//
// console.log(stringReplace2("hello world, hello people", "hello", "good by"));