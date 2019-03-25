//global scope means a piece of code is accessible throughout the entire program
//local scope means a piece of code is only avaliable within a limited part of the program
//global scope
var x = 12
{
    //local scope
    var y = 15;
    //curly braces define a code block
}
console.log(x);
console.log(y); // var ignores the block and prints outside

var outside = 'outside';
{
    let inside = 'inside';
}
console.log(outside);
console.log(inside);
//this creates an error when it tries to access inside 

/*  
Var vs. Let:

Remember how, since ES6, we now have three keywords for variables: var, let, and const?

Const is pretty straight forward; it is a constant that cannot be re-expressed.

Var and let seem to operate the same, right? So why do we insist on using let excusively? Well, check out the below:

NOTE:  We have not seen functions before, we will go in depth tomorrow. WATCH, DONT CODE!
*/
/*************************class******************************* */

var x = 12; 

function varTest() {
    var x = 3;
    if(1 == 1){
        var x = 45;
        console.log(x);
    }
    console.log(x);
}

varTest();
console.log(x);



var x =12; 

function letTest() {
    var x = 33; 
    if(true){
        let x =45; 
        console.log(x);
    }
    console.log(x)
}
letTest(); 
console.log(x);



function constTest() {
    const scope = 1;
    if (true) {
      const scope = 2;
      console.log(scope); // 2
    }
    console.log(scope); // 1
  }
  
  constTest();


let x =12; 

function letTest() {
    let x = 33; 
    if(true){
        let x =45; 
        console.log(x);
    }
    console.log(x)
}
letTest(); 
console.log(x); // prints 45, 33, 12. let cannot jump out of the blocks


var x =12; 

function letTest() {
    var x = 33; 
    if(true){
        var x =45; 
        console.log(x);
    }
    console.log(x)
}
letTest(); 
console.log(x); //prints 45, 45, 12; var can jump out of the if statements block to change x = 33 to x = 45 as well, however:
// the var x = 12 does not change to 45 because of the characteristics of a function, which js prints/shifts above the var x = 12. 
//so 45 and 33 are read first and then 12 is read, which allows it to remain unchanged

var x =12; 

function letTest() {
    let x = 33; 
    if(true){
        var x = 45; 
        console.log(x);
    }
    console.log(x)
}
letTest(); //this is a function call, reminds the system of the function and asks it to run?
console.log(x); //this creates an error, let x = 33, so x = 33 and when you state var x = 45, it says x is already been declared

let x =12; 

function letTest() {
    const x = 33; 
    if(true){
        const x =45; 
        console.log(x);
    }
    console.log(x)
}
letTest(); 
console.log(x); //const has same security as let, prints 45,33,12

