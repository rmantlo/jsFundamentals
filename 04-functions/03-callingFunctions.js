/**************************
CALLING FUNCTIONS
*************************
function hi() {
  console.log('HI');
}

hi();
(1);

1- This is how we call, or 'invoke' our function


*/


function hi(){
    console.log('hi!');
}
hi();
hi();  //calling it multiple times prints it multiple times
console.log(hi);    //prints [Function: hi], logs the function
console.log(hi());  //prints 'hi! undefined'
                    //js sees hi() and runs the function;printing 'hi!' then undefinded because the variable 'hi' is locked inside the function






/****Returns*** */
function hi(){
    return 'hi!';       //when the function reaches the return, the return is logged and 'returned' up to replace the value of the      function's hi() (seeable results below)
}
hi();   //running with just the call prints nothing, but it still runs
console.log(hi()); //this prints 'hi!', the function call gets replaced with the returned value when the function was run (notes above)

function hi(){
    console.log('hi!');
}
hi();

//challenge
//function that, when invoked, lists out 1 through 10

function numbers(){
    for(let i = 1; i <= 10; i++){
        console.log(i);
    }
}
numbers();

//another example
//counts from 1 to 20
let number = 20;
function one2num(max){              //this function have a parameter added to it, we'll talk about it later
    for(let i = 1; i<max+1; i++){   //it looks like you can set the max parameter to a number variable later as a way to control a value in multiple areas?
        console.log(i);
    }
}
one2num(number);


//challenge
//given an array, create a function that lists out the values individually
let arr = ['this','is','really','cool'];
function forArray(){
    for(a of arr){
        console.log(a);
    }
}
forArray();
//or//
let arr = ['this','is','really','cool'];
function forArray(){
    for (let a in arr){
        console.log(arr[a])      
    }
}
forArray();         //still works, just longer





/**************************
PARAMETERS
***********************

function hi(name){
            (1)
  console.log(`Hi ${name}`)
                    (2)
}

hi('Autumn');
      (3)

1- The parameter(s) we need to take into the function
2- Using string interpolation, we can refer to the parameter we passed
3- This is where we define what the parameter's value will be
*/

function pet(animal){                           //parameters set here are only available in this parameter
    console.log(`I have a ${animal} for a pet`) //can have multiple parameters, separated by commas
}
pet('cat'); 
console.log(animal); //doesnt work


function pet(animal){                          
    console.log(`I have a cool pet`) 
}
pet('cat'); //prints 'i have a cool pet', can have parameters that are unused, to either use later or just take up space



//challenge
//write function with 2 parameters, one for first name, one for last name
//have them come together inside the function
//console.log 'hello, my name is ${first} ${last}'

function name(first, last){
    console.log(`Hello, my name is ${first} ${last}`);
}
name('Becky','Mantlo');

//now do ${fullName}
function name(first, last){
    let fullName= `${first} ${last}`;
    console.log(`Hello, my name is ${fullName}`);
}
name('Becky', 'Mantlo');
name('john', 'smith',);
name('john','bob','smith'); // print only first 2, 3rd one is ignored but not an error
//if you have 2 parameters but only one value, the unfilled parameter is undefined
    //ex:name('becky'); prints hello, my name is becky undefined


    /**************************
FAT ARROW FUNCTIONS
*********************
let hi = ()   => {
      (1)     (2)
  console.log('hi')
};

1- We need to set the fat arrow function to a variable
2- We use the 'fat arrow' to signify its a function


Concise
*********************
let hi = () => console.log('hi');
//one line, no curly braces

Block Body
*********************
let hi = () => {
  console.log('hi')
}

//why would we use this? to prevent hoisting
*/

function coffee(){
    console.log('coffee is good');
}
coffee();

let coffee = () => {
    console.log('coffee is super good');
}
coffee(); 
//both functions are called the same

let cats = (kitten, puppy) => {console.log(`i have ${kitten} cats and ${puppy} puppies.`)}
cats(7,8);

//for fat arrow functions, you cannot hoist, and = stops it
//similar to an expression


//concise vs block body****************
    //concise
let apples = x => console.log (`there are ${x} apples`);
apples(10); //with one parameter, parathesis are not necessary with arrow function

let apples = x => `there are ${x} apples`;
console.log(apples(10));    //with concise, returns are implied, if only on one line

    //block body
let apples = x => {console.log (`there are ${x} apples`)};
apples(10);     //returns are implied 



/**************************
RETURN
***************

let hi = () => {
  return 'hi';
    (1)
};

let newName = hi();
      (2)      (3)

console.log(newName)

1- The keyword that brings our data out of our function
2- We need a new variable to hold the value of the return
3- When called, the function becomes the value of the return



***********/

function captializeName(name) {
    let capName = '';
    for (let l in name){
      if (l == 0){
        capName += name[l].toUpperCase();
      } else {
        capName += name[l].toLowerCase();
      }
    }
 
    return capName
  }

const myNameIs =  captializeName('Autumn');

console.log(`${myNameIs} how are you doing?`);
//returns work by becoming the value of/for a function call
//so when the function is called again, it doesnt rerun, it states the previously returned value



//challenge
//make a tip calculator using a function
//have it return the value, capture that return value and print it

function tips(price){
    let total = price*1.2
    return total.toFixed(2); //toFixed() lets use set the number of decimal places
    
}
console.log(tips(7)); 
//or let finalCost = tips(7);
    //console.log(finalCost);

//****concise form of above */
let  tips = price => (price*0.2).toFixed(2);
let tipsCost = tips(19.88);
console.log(tipsCost);

//i did the below for myself
//if 10% tip
//if 15% tip
//if 20% tip

function diffTips(price, tips){
    if (tips == '10%'){
        let totalCost = price*=1.1;
        return totalCost.toFixed(2);
    }else if(tips == '15%'){
        let totalCost = price*=1.15;
        return totalCost.toFixed(2);
    }else if(tips == '20%'){
        let totalCost = price*=1.2;
        return totalCost.toFixed(2);
    }
}
console.log(diffTips(7, '15%'));




//later given example

function main(){
	let a =1;
	let b=2;
	let c=-3;
	mystery(a,b,c); //these are function calls, can call within the function or another function
	mystery(c,4,a);
	mystery(a+b,b+c,c+a);
}
                                    //variables are out of order, doesnt matter
function mystery(c,a,b) {           //it reassigns the variables!
console.log(b + "+" + c + "=" + a );
}       //not real math in this answer, just string statement
//
//using the first mystery in the function:
    //mystery(a,b,c) -> mystery (1,2, -3)
//with new mystery, the positions are reassigned so (1 ,2 ,-3) -> ((c ,a ,b)) 
//so 1 becomes c, 2 becomes a, and -3 becomes b
// so (b + "+" + c + "=" + a ) == -3 + 1 = 2
//goes through each inner function

// mystery(c, 4, a)
//         |  
//         V
// mystery(-3,4,1)
//           |
//           V
// mystery(c, a ,b);         these c,a,b variables are place holders, can be named anything
// mystery(-3, 4, 1);
// (b + "+" + c + "=" + a )= 1 + -3 = 4


// mystery(a+b,b+c,c+a)
//         |  
//         V
// mystery(1+2,2+-3,-3+1) = (3,-1,-2)
//                             |
//                             V
//                   mystery(c, a ,b);
//                   mystery(3, -1, -2);
// (b + "+" + c + "=" + a )= -2 + 3 = -1


