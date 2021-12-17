////////////////////////////////////////////////////////////Ejercicios Comparison///////////////////////////////////////////////////////////////////////////////

//Ejercicio 1
/*
function numero(a){
    if (a > 10){
        alert(true);//alert muestra la ventana con el resultado
    }else{
        alert(false);
    }
}
let num = parseInt(prompt("Ingrese un número: ")) 
numero(num);
*/

//Ejercicio 2

/*
function numero2(a){
    if(a % 4 == 0 || a % 9 == 0){
        console.log(true);
    }else{console.log(false)}
}
numero2(4);
*/

///////////////////////////////////////////////////Ejercicios String//////////////////////////////////////////////////////////////////////////////////////////////////7

//Ejercicio 1
/*
let str1 = prompt('Inserte cadena') //el usuario coloca la cadena en el mensaje
var estado_cadena= str1.length===0 //esta función determina si la cadena esta vacía o no, si está vacía lo guarda como true y si no lo guarda como false.
var primer_caracter=str1.charAt(0) //guarda el primer caracter de la cadena

function checkEmptyString(str1) {
    if(estado_cadena == true){ 
        return   console.log("cadena vacía");
    }else{
        return console.log(primer_caracter); //imprime el primer caracter de la cadena
    }
}
checkEmptyString();
*/

//Ejercicio 2

//Insertar caracteres
/*
let str2 = prompt('Inserte el primer texto'); 
let str3 = prompt('Inserte el segundo texto');

function checkTwoStringsSame(str2,str3) {
    //si ambas cadenas son iguales regresara un valor true y si es falso, regresara un valor false
return console.log(str2==str3)
}
checkTwoStringsSame(str2,str3); //Comienza cadena
*/

/************************************User input************************/
/*
var numero1 = prompt('inserte primer numero')
var numero2 = prompt('inserte segundo numero')
function operaciones(numero1,numero2){
valor1 = parseInt(numero1)+ parseInt(numero2);
valor2 = numero1 * numero2;
valor3 = numero1 - numero2;
valor4 = numero1 / numero2;
valor5 = numero1 % numero2;
console.log(valor1);
console.log(valor2);
console.log(valor3);
console.log(valor4);
console.log(valor5);
}
console.log(operaciones(numero1,numero2)); // Imprimiendo la función
*/

/************************************PRACTICE ************************/
//Part 1
let number = prompt("Cuantas tareas llevas");

if (number == 15) {
    alert("Excellent");
} else if (number <= 6) {
    alert("Failed");
} else if (number > 6 && number <= 9) {
    alert("Insufficient");
} else if (number > 9 && number <= 14) {
    alert("Good");
} else {
    alert("Error");
}

//Part 2
let number1 = prompt("escribe el primer numero: ");
let number2 = prompt("escribe el segundo numero: ");
let number3 = prompt("escribe el tercero numero: ");
let number4 = prompt("escribe el cuarto numero: ");
let number5 = prompt("escribe el quinto numero: ");
let numeroA = [];

function numeroalto(i1, i2, i3, i4, i5) {

    if (i1 >= i2 && i1 >= i3 && i1 >= i4 && i1 >= i5) {
        numeroA.push(i1);
    } else if (i2 >= i1 && i2 >= i3 && i2 >= i4 && i2 >= i5) {
        numeroA.push(i2);
    } else if (i3 >= i2 && i3 >= i1 && i3 >= i4 && i3 >= i5) {
        numeroA.push(i3);
    } else if (i4 >= i2 && i4 >= i3 && i4 >= i1 && i4 >= i5) {
        numeroA.push(i4);
    } else if (i5 >= i2 && i5 >= i3 && i5 >= i4 && i5 >= i1) {
        numeroA.push(i5);
    }
    return numeroA;
}

numeroalto(number1, number2, number3, number4, number5); //llamas a 1a
funcion
console.log(numeroA);
//Part 3

let item1 = parseFloat(prompt("Dame el precio 1"));
let item2 = parseFloat(prompt("Dame el precio 2"));
let item3 = parseFloat(prompt("Dame el precio 3"));
let preciosbajos = [];

function precioBajo(i1, i2, i3) { // creas 1 funcion

    if (i1 > i2 && i1 > i3) {
        preciosbajos.push(i2, i3)
    } else if (i2 > i1 && i2 > i3) {
        preciosbajos.push(i1, i3)
    } else if (i3 > i2 && i3 > i1) {
        preciosbajos.push(i2, i1)
    }
    return preciosbajos;
}

precioBajo(item1, item2, item3); //llamas a 1a funcion

console.log(preciosbajos); 