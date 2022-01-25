//Part 1 Book
// In your Javascript file, create a class called Book. Each Book should have several properties:
// Title
// Genre
// Author
// Read (true or false)
// Read date; can be blank, otherwise needs to be a JS Date() object
// Add to your HTML page 2 books that reference the Book objects.
  /*  
    class Book{
    constructor(title,gender,author,read,readDate){
        this.title = title;
        this.gender = gender;
        this.author = author;
        this.read = read;
        this.readDate = readDate;
    }
 }
var libro1 = new Book("La Odisea","Epopeya épica","Homero",true,'20/11/2021');
var libro2 = new Book("El principito","Ficción especulativa","Antoine de Saint-Exupéry",true,"15/11/2021");
console.log(libro1);
console.log(libro2);
document.getElementById("id").innerHTML =libro1.title;
document.getElementById("id2").innerHTML =libro2.title;

*/
//Part two
bookshelf= JSON.parse(localStorage.getItem("Books"));
class Book{
    constructor(title,gender,author,read,readDate){
        this.title = title;
        this.gender = gender;
        this.author = author;
        this.read = read;
        this.readDate = readDate;
    }
 }
function agregar(libro){
    var title=  "";
    var gender = "";
    var autor = "";
    var read = false;
    var readDate =new Date();
    title= document.getElementById("field1").value;
    gender= document.getElementById("field2").value;
    autor= document.getElementById("field3").value;
    read=read;
    readDate=readDate;
var libro = new Book(title,gender,autor,read,readDate);
bookshelf.push(libro);
localStorage.setItem("Books", JSON.stringify(bookshelf));
    title=  "";
    gender = "";
    autor = "";
}

class Booklist extends Book{
    constructor(bookshelf){
        super(read);
        this.readBooks= 0;
        this.unreadBooks=0;
        this.currentbook=0;
        this.lastbookread=0;
        this.Books = bookshelf;
    }
}

/*
 document.getElementById("crear").addEventListener("click", crear);
        document.getElementById("mostrar").addEventListener("click", mostrar);
        document.getElementById("modificar").addEventListener("click", modificar);
        document.getElementById("eliminar").addEventListener("click", eliminar);

        function crear(){
            localStorage.setItem("nombre", "Guillermo")
            localStorage.setItem("apellido", "Chang")
        }

        function mostrar(){
            alert("Nombre: "+ localStorage.getItem("nombre") + ' ' + "Apellido: " + localStorage.getItem("apellido"))
        }

        function modificar(){
            localStorage.setItem("nombre", "David")
            localStorage.setItem("apellido", "Gordillo")
        }

        function eliminar(){
            localStorage.removeItem("nombre")
            localStorage.removeItem("apellido")
        }
		document.getElementById("crear").addEventListener("click", crear);
        document.getElementById("mostrar").addEventListener("click", mostrar);
        document.getElementById("modificar").addEventListener("click", modificar);
        document.getElementById("eliminar").addEventListener("click", eliminar);

        function crear(){
            localStorage.setItem("nombre", "Guillermo")
            localStorage.setItem("apellido", "Chang")
        
        }

        function mostrar(){
            alert("Nombre: "+ localStorage.getItem("nombre") + ' ' + "Apellido: " + localStorage.getItem("apellido"))
        }

        function modificar(){
            localStorage.setItem("nombre", "David")
            localStorage.setItem("apellido", "Gordillo")
        }

        function eliminar(){
            localStorage.removeItem("nombre")
            localStorage.removeItem("apellido")
        }
*/

// Part 2 Booklist

// In your Javascript file - create a class BookList.

// BookLists should have the following properties:

//     Number of books marked as read
//     Number of books marked as not read yet
//     A reference to the next book to read (book object)
//     A reference to the current book being read (book object)
//     A reference to the last book read (book object)
//     An array of all the Books

// Every Booklist should have a few methods:

//     .add(book)
//         should add a book to the books list.
//     .finishCurrentBook()
//         should mark the book that is currently being read as "read"
//         Give it a read date of new Date(Date.now())
//         Change the last book read to be the book that just got finished
//         Change the current book to be the next book to be read
//         Change the next book to be read property to be the first unread book you find in the list of books

// Booklists and Books might need more methods than that. Try to think of more that might be useful.

// Update your HTML page with a section that shows the name of your booklist, the number of books marked as read, and the next book to read.