/*Write a program that takes in an array of numbers and returns the largest number in the list. Example: The given array is [3, 5, 7, 1, 6] The largest number is 7.*/

/*

var arr = [3,5,7,1,6];
function largeNumb(arr){
    if (arr[0] > arr[1] && arr[0] > arr[2] && arr[0] > arr[3] && arr[0] > arr[4])
        console.log(arr[0])
    else if (arr[1] > arr[0] && arr[1] > arr[2] && arr[1] > arr[3] && arr[1] > arr[4])
        console.log(arr[1])

    else if (arr[2] > arr[0] && arr[2] > arr[1] && arr[2] > arr[3] && arr[2] > arr[4])  /*Comparamos cada nuero con los demas para sacar el mayor
        console.log(arr[2])
    else if (arr[3] > arr[0] && arr[3] > arr[1] && arr[3] > arr[2] && arr[3] > arr[4])
        console.log(arr[3])
    else if (arr[4] > arr[0] && arr[4] > arr[1] && arr[4] > arr[2] && arr[4] > arr[3])
        console.log(arr[4])
largeNumb(arr);
}

*/


/*Write a program to sort a list of numbers in descending order (from highest to lowest).*/    /* Se acomodan del mayot al menor

/*
    var valores = [-23,15,7,1,-16];
    valor = valores.sort(function(x,y){
        return y-x
});

console.log(valor);

*/


/*Write a program that takes in two lists and returns the greatest number out of the two lists. Hint: call the function from Class Exercise #1 (Exercise #1 should return a single number - the greatest number in the list).*/

/*
var arr = [23,35,47,11,36];
var arr1=[26,31,28,23,67];
var mayor1=0;
var mayor2=0;
function largeNumb1(arr){
    if (arr[0] > arr[1] && arr[0] > arr[2] && arr[0] > arr[3] && arr[0] > arr[4])
        mayor1=arr[0]
        else if (arr[1] > arr[0] && arr[1] > arr[2] && arr[1] > arr[3] && arr[1] > arr[4])
    mayor1=arr[1]
        else if (arr[2] > arr[0] && arr[2] > arr[1] && arr[2] > arr[3] && arr[2] > arr[4])
    mayor1=arr[2]
        else if (arr[3] > arr[0] && arr[3] > arr[1] && arr[3] > arr[2] && arr[3] > arr[4])
    mayor1=arr[3]
        else if (arr[4] > arr[0] && arr[4] > arr[1] && arr[4] > arr[2] && arr[4] > arr[3])  /* Busca el numero mayor del arre
    mayor1=arr[4]

}
function largeNumb2(arr){
    if (arr1[0] > arr1[1] && arr1[0] > arr1[2] && arr1[0] > arr1[3] && arr[0] > arr1[4])   /* Busca el numero mayor del arre1
        mayor2=arr1[0]
        else if (arr1[1] > arr1[0] && arr1[1] > arr1[2] && arr1[1] > arr1[3] && arr1[1] > arr1[4])
    mayor2=arr1[1]
        else if (arr1[2] > arr1[0] && arr1[2] > arr1[1] && arr1[2] > arr1[3] && arr1[2] > arr1[4])
    mayor2=arr1[2]
        else if (arr1[3] > arr1[0] && arr1[3] > arr1[1] && arr1[3] > arr1[2] && arr1[3] > arr1[4])
    mayor2=arr1[3]
        else if (arr1[4] > arr1[0] && arr1[4] > arr1[1] && arr1[4] > arr1[2] && arr1[4] > arr1[3])
    mayor2=arr1[4]
}
        largeNumb1(arr);                                                                  /*Toma el resultado de la funcion largenumb1
        largeNumb2(arr1);                                                                 /*Toma el resultado de la funcion largenumb2
if (mayor1>mayor2)
    console.log('The greatest number out of the 2 arrays is: ',+mayor1)
else
    console.log('The greatest number out of the 2 arrays is: ',+mayor2)
    */


/* Exercise #1
Open up a blank repl.it set to Javascript. Copy the code below into your workspace:\
*/
// var arr = ["This", "is", "a", "sentence."];
// function printOutString() {
//     console.log(arr[0] + ' ' + arr[1] + ' ' + arr[2] + ' ' + arr[3])
// }
// printOutString();


/*
Exercise #2
Write a function that:

Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
*/

// var arr = [2,3,4,11,6];
// console.log(arr[0]*2,arr[1]*2,arr[2]*2,arr[3]*2,arr[4]*2)

/*
Exercise #3
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.

Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/
/*
 var arr = [2,3,4,11];
 var sum = arr[0]+arr[1]+arr[2]+arr[3];
 var mult = arr[0]*arr[1]*arr[2]*arr[3];
alert("The sum is: "+sum)
alert("The product is: "+mult)
*/
/*Exercise 4
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
var student1Courses = ['Math', 'English', 'Programming'];
var student2Courses = ['Geography', 'Spanish', 'Programming'];
*/
/*
var student1Courses = ['Math', 'English', 'Programming'];
var student2Courses = ['Geography', 'Spanish', 'Programming'];
if (student1Courses[0] == student2Courses[0])
    console.log(student1Courses[0])
else if (student1Courses[0] == student2Courses[1])
    console.log(student1Courses[0])
else if (student1Courses[0] == student2Courses[2])
    console.log(student1Courses[0])
else if (student1Courses[1] == student2Courses[0])
    console.log(student1Courses[1])
else if (student1Courses[1] == student2Courses[1])
    console.log(student1Courses[1])
else if (student1Courses[1] == student2Courses[2])
    console.log(student1Courses[1])
else if (student1Courses[2] == student2Courses[0])
    console.log(student1Courses[2])
else if (student1Courses[2] == student2Courses[1])
    console.log(student1Courses[2])
else if (student1Courses[2] == student2Courses[2])
    console.log(student1Courses[2])
    else{
        console.log("There are no common courses")
    }
*/


/*Exercise #5
For each of the exercises below, assume you are starting with the following people array.*/
/*
    var index=1
    var people = ["Maria ", "Dani ", "Luis ", "Juan ", "Camila "];

    //alert(people);
    

    people.splice(1,1); //Borra a Dani

    alert(people);
    
    people.splice(2,1); //Borra a Juan
    
    alert(people);

    people.unshift('Luis');//pone a Luis al principio
    people.splice(2,1);
    alert(people);

*/

/*
Sorting
Exercise #1
Write a program to sort a list of names alphabetically.
*/

/*var animals = [
    'cat', 'dog', 'elephant', 'bee', 'ant'
];
animals.sort();
console.log(animals);*/

/*
Code Refactoring & Fixing Code
Exercise #1
Code and paste the code below into a repl.it (set to Javascript).
Make sure to run the program to understand the output.


Find ways to improve the code and make it clearer to understand.

Original code:
function someFunction(list) {
  if (list.length === 0) {
    return 0;
  }
  
  return list.length;
}
*/
/*
var list = [1,2,3,4];
function lengthlist(list) {
    if (list.length === 0) {
      console.log("blank list")
    }
    else{
       console.log("The length of the list is:"+list.length)
    }   
  }
 lengthlist(list);
*/

/*
Exercise #2
Copy and paste the code below into a repl.it (set to Javascript).
Make sure to run the program to understand what it currently outputs.
Write test cases and fix the code according to the expected output.
Output should be: Failed if they scored 6 or less Insufficient if they scored > 6 but less than 9. (9 included) Good if they scored > 9 but less than 14. (14 included) Excellent if they scored 15. Error if participants enter a negative number or a number outside the range supported (outside 0 - 15)
*/
/*
var grade= parseInt(prompt("Inserte la nota: "));
function gradeLabel(grade) {
    if (grade < 6 && grade >= 0) {
        alert("Failed");
    }

   else if (grade >= 6 && grade <= 9) {
        alert("Insufficient");
    }

    else if (grade >= 9 && grade <= 14) {
        alert("Good");
    }

    else if (grade == 15) {
        alert("Excellent");
    }
    
    else {
        alert("Error, outside of bounds");
    }
}
gradeLabel(grade);*/