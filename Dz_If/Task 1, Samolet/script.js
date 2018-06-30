var tankVolume = parseFloat(prompt("Введите объем бака самолета в литрах"));
var fuelVolume = parseFloat(prompt("Введите исходное количество топлива"));
var cargoWeight = parseFloat(prompt("Введите вес груза в тоннах (грузоподъемность самолета 5т)"));
var ac = parseFloat(prompt("Введите расстояние от пункта A до пункта C"));
var cb = parseFloat(prompt("Введите расстояние от пункта C до пункта B"));

if (fuelVolume > tankVolume) alert("Топливо не поместится в бак!");

if (cargoWeight <= 1) var rashod = 25 / 100;
else if (cargoWeight <= 2) var rashod = 30 / 100;
else if (cargoWeight <= 3) var rashod = 35 / 100;
else if (cargoWeight <= 4) var rashod = 42 / 100;
else if (cargoWeight <= 5) var rashod = 50 / 100;
else if (cargoWeight > 5) alert("Самолет не взлетит из-за перегрузки!");

if (fuelVolume < ac * rashod || tankVolume < cb * rashod) alert("Самолет не долетит!");
else if (fuelVolume > (ac + cb) * rashod) alert("Самолет долетит до пункта B без дозаправки.");
else if (fuelVolume > ac * rashod) alert("Самолету потребуется дозаправка в пункте C в размере "
    + (cb * rashod - (fuelVolume - ac * rashod)).toFixed(1) + " литров.");