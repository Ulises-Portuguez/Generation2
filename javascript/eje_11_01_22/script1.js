// Part 1: Type Converter
console.log(Number("000"));
console.log(String("000"));
console.log(Boolean("000"));

console.log(Number("1"));
console.log(String("1"));
console.log(Boolean("1"));

console.log(Number(NaN));
console.log(String(NaN));
console.log(Boolean(NaN));

console.log(Number(Infinity));
console.log(String(Infinity));
console.log(Boolean(Infinity));

console.log(Number(-Infinity));
console.log(String(-Infinity));
console.log(Boolean(-Infinity));

console.log(Number(""));
console.log(String(""));
console.log(Boolean(""));

console.log(Number("20"));
console.log(String("20"));
console.log(Boolean("20"));

console.log(Number("Tewnty"));
console.log(String("Tewnty"));
console.log(Boolean("Tewnty"));

console.log(Number(null));
console.log(String(null));
console.log(Boolean(null));

console.log(Number(undefinited));
console.log(String(undefinited));
console.log(Boolean(undefinited));


var añoNacimiento = 1997;
var añoFuturo = 2050;
var edad = añoFuturo - añoNacimiento;

console.log("Si naciste en " + añoNacimiento + ", en " + añoFuturo + " tendrás " + (edad - 1) + " o " + edad + " años dependiendo del mes.");


var nombre = "Juanito";
var ubicacion = "Perú";
var hobby = "tejer";

console.log("Hola, mi nombre es " + nombre + ". Vivo en " + ubicacion + " y me gusta " + hobby + ".")
