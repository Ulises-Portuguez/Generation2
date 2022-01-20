// EJERCICIO 1
//PART 1

/*
var names=["Maria","Antony","Joy","Juan"]
console.log(names);
names.push("Fernando");
console.log(names);

nom1 =String( names[0,1]);
console.log(nom1);
nom2 ="Fernando";

function comparacion(nom1, nom2){
    if (nom2 === nom1){
        console.log(true);
    }else{
        console.log(false);
    }
}
comparacion();

*/

//--------------------------------------------------------

//ejercicio 2

/*
console.log(false || (true && false));
console.log(true || (11 + 12));
console.log((31 + 22) || true);
console.log(true && (1 + 7));
console.log(false && (3 + 4));
console.log((1 + 2) && true);
console.log((32 * 4) >= 129);
console.log(false !== !true);
console.log(true === 4);
console.log(false === (847 === '847'));
console.log(false === (887 == '887'));
console.log((!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false);
*/

//------------------------------------------------------

//ejercicio 3

/*
(function (number) {
    if (number >= 0 && number <= 25){
        console.log("El numero esta en el rango de 0 a 25");
    }else if(number>=26 && number <=100){
        console.log("El numero esta en el rango de 26 a 100");
    }else if(number <= 0){
        console.log("El numero es menor a 100");
    }else if(number >= 100){
        console.log("El numero es mayor a 100");
    }else{
        console.log("El dato no es valido");
    }
})((100));
*/

/*
var a;
var b = null;
var c = undefined;
var d = 4;
var e = 'five';
var f = a || b || c || d || e;

console.log(f);
*/