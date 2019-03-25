/*EXPRESSIONS
****************

you can make the value of a variable/keyword into a function

let hey = function hi() {
  (1)
  console.log('HI')
}

1- The variable 'hey' is now representative of the function 'hi()'

this is useful if you need to call a function up quickly
also useful to prevent hoisting - expressions arent hoisted
*/

let hi = function hi(){
    console.log('hi!'); //wont run without a call
}