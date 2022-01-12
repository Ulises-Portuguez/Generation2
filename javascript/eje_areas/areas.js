// //Sin parámetros

// function triangulo() {
//     var bt = 5;
//     var ht = 6;
//     alert("el área del triángulo es: " + (bt * ht) / 2);
// }

// function circulo() {
//     var r = 5;
//     var areac = 3.141592 * r * r;
//     alert("el área del circulo es: " + areac);
// }
// function rectangulo() {
//     var b = 5;
//     var h = 6;
//     var arearec = b * h;
//     alert("el área del rectangulo es: " + arearec);
// }

// triangulo();
// circulo();
// rectangulo();

// //con parámteros

// function Triangulo(base, altura) {
//     var area = (bt * ht) / 2;
//     alert("el área del triángulo es: " + area);
// }

// function Circulo(r) {
//     var areac = 3.141592 * r * r;
//     alert("el área del circulo es: " + areac);
// }

// function Rectangulo(b, h) {
//     var arearec = b * h;
//     alert("el área del rectangulo es: " + arearec);
// }

//Area Triangulo Con parametros
function areat(base, altura) {
    var area = ((base * altura) / 2);
    alert("esta es el area del triangulo: " + area);
}

areat(3, 5);

//Area Cuadrado Sin Parametros
function arearec() {
    var l1 = 3;
    var l2 = 5;
    var res = (l1 * l2);

    alert("El area del rectangulo es: " + res);
}
arearec();

//Area Circulo Con Parametros
function areacir(radio) {
    var resultado = (Math.PI * radio * radio);
    alert("El area de circulo es: " + resultado);
}

areacir(3);
