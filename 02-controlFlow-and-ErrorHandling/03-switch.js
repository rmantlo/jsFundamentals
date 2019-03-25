 /**************************
SWITCH
Switch statements helps us choose between several options for a variable and a default
Four main parts to a switch statement
switch, the argument being evaluated 
case, one of the options for the variable to be
break, this breaks us out of the switch statement once we hit our case
default, the default if we dont hit one of our cases, not neccesary 

**************************/
//nice for evaluating larger and more elaborate issues

var friend='Bob';

switch (friend) { //we are evaluating (friend)
   case 'Autumn': //the case says, if friend=autumn, then the connected console.log prints
       console.log('Hey Autumn, when are you going rock climbing?');
       break;//important for switches, breaks us out of the evaluating statement
   case 'Dave':
       console.log('Hey Dave, how is Cooper?');
       break;
   case 'Alex':
       console.log('Hey Alex, when are we playing DnD?');
       break;
   default: //if non other cases are true, default is left
       console.log(`Im sorry, ${friend}, but do I know you?`); //use back ticks, not regular quotes,
        //so variables are able to be dropped right into the statements. called string interpolation
}

//challenge
/*
Challenge:
Using a switch case
Write a dessert variable;
If the dessert is pie, console.log 'Pie, pie, me oh my!'
If the dessert if cake, console.log 'Cake is great!'
If the dessert is ice cream, console.log 'I scream for ice cream!'
Otherwise, have your switch statement console.log 'Not on the menu.'
*/
let dessert = 'cookie';
//let dessertRandom = ['cookie','ice cream','pie','cake'];
switch (dessert){
   case 'pie':
       console.log('Pie, pie, me oh my!');
       break;
   case 'cake':
       console.log("Cake is great!");
       break;
   case 'ice cream':
       console.log('I scream for ice cream!');
       break;
   default:
       console.log('Not on the menu.');
}


let yep = -8;
switch (true){
   case (yep < 0 && yep > -10):
       console.log('worked');
       break;
   case (yep > 0):
       console.log('Worked!');
       break;
   default:
       console.log('didnt work');
}
//switches do not evalute true/false automatically like an if statement does, so you have to state whether you want a case statement to be true otherwise it doesnt run the case?
