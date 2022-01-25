//Exercise 1_  Esta funcion imprime el nombre y la edad en el html.
function myFunction() {
    var nombre = "";
    var edad = 0;
    nombre = document.getElementById("field1").value;
    edad = parseInt(document.getElementById("field2").value);
    class Persona {
        constructor(nombre, edad) {
            this.nombre = nombre;
            this.edad = edad;
        }
        describe() {
            return (
                "Name: " + this.nombre + ", " + this.edad + " years old.");
        }
    }
    let persona1 = new Persona(nombre, edad);
    document.getElementById("id").innerHTML = persona1.describe();
}

