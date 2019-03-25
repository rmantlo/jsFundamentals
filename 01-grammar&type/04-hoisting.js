//hoisting is a feature where a variable may be accessible outside of the code block it was created and defined it
console.log(x); //prints undefined
var x = 7;
//hoisting affects the declaration portion of a variable statement only.
//keywords let and const work with code blocks, var ignores it the block, as does assigning a variable without using a keyword
var x = 15;
console.log(x); //15
{
    var y = 12;
    console.log(y)//12
}
console.log(y);//12

//within a block, variables with the same name outside the block are not treated as the same variable

let x = 5;
console.log(x); //5
{
    let x = 7;
    console.log(x); //7
}
console.log(x); //5


const fearOfSpiders = 8;
let favActor = "Bruce Willis";
var outOfIdeas = 74;
{
    var newIdeas = "Dance";
    let meGo = "home";
}
console.log(fearOfSpiders, favActor, outOfIdeas, newIdeas, meGo);

//var newIdeas being printed at console shows a block leak, to prevent use let variable instead of var
/********************************in class*************************************** */

console.log(scissors);
scissors = 'blue'; //undefined

console.log(scissors);
var scissors;//blue
//things that are hoisted: keywords, and variable names, and functions
//this hoisted the keyword var at the end, but not the value on the second line, so console.log(scissors) is undefined instead of an error
//without the var scissors at the end, it will run as an error
//this works because node reads the code twice, the first pass grabs the keywords, names, and functions (the whole functions is hoisted on the first pass)
//second pass then collects/prints the values connected

b();
console.log(a);
function b() {
    console.log('this is all hoisted');
}
var a = 'this is not a hoisted';
//function is hoisted above b(); so it runs perfectly, while console.log(a); is printed after, and is undefined as the value is placed later
//is you print withut the b(); it runs as an error
/**
 * this rearranged to look how it runs in the system
 * function b() {
    console.log('this is all hoisted');
*  }
 * b();
   console.log(a);
   var a = 'this is not a hoisted';
 */

