//literals are fixed values within js.the are forward, 'lteral' values, the are what they are stated to be.
//you insert values directly into the literal, there are 8 different types of literals

//array literals
var players = ['steph curry', 'kevin durant', 'klay thompson'];


//boolean literals
var happy = true;


//floating point literals
//exxentially numbers with decimal points, but can include exponents
4.1, 5.5, 10.1

//Intergers
//flat out numbers
var number = 3453465;

//object literals
//similar to the object data-type
let x ={ a:0, b:1, c:2}
console.log(x.a);//0
console.log(x.b);//1
console.log(x.c);//2

//RegExp Literals
//explained further later, is a pattern of slashes, like this: /ab+c/

//String Literals
//a set of characters with in a ' ' or " ", but both quotation types cannot be used together
let x = 'what'
let y ="The heck"
console.log(x,y);
//never mind, this does work, maybe its different for literals? idk how to make those so whatever

/*********************************class******************************* */

let days = ['monday','tuesday','wednesday','thursday','friday'];
console.log(days);
console.log(days.toString()); //toString() is a method, lets us change the array into one big string
//the array days is an literal, and after the toString method, it is still a literal

console.log(days.length); //.length is a property, counts the length of the array, how many items are in it


/**objects are a key value pairs, 
 * which just means in an object there are keys (what the name of this part of the object is) and a value for that key*/
let soup = {
    a: 'chicken noodle',
    b: 'tomato',
    c: 'beef and barley'
};
console.log(soup.c);//prints the value of the c key, which is beef and barley
// this is called dot notation for an object. this is how we dig through the object to get data back

//below are literals. literally just stated values of the different datatypes
let car = 'honda';
let dec = 10.2; 
