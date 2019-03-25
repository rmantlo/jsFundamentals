/*
Arrays
************
filling arrays and referencing the array and its values

Arrays are containers that hold lists of items

let list =  [  'item1',   'item2',    'item3'];
    (1)    (2)   (3)

1- name of the Array, or list; 
2- The Array is inside of these square brackets
3- each item, regardless of datatype, is separated by commas

Denoted by []
Has values ('blue', 'green', 'yellow'), separated with commas

console.log(typeof list);

Why is that?  The definition of an object is a container that can hold multiple datatypes.  Arrays fit under that category.

What is an array?
  Has [] brackets
  Can hold multiple datatypes
  Great for listing 
*/

let list2 = [ 'orange','banana','oreos' ];
console.log(typeof list2); //this helps find the datatype of something in JS, prints object
console.log(list2);         //prints  "[ 'orange','banana','oreos' ]"
console.log(list2[1]);      //use index to print certain contains, prints banana


let students = ['tony','marshall','rhys','ray',23,true,['ryan','iesha','amira',['trevor','terry']]];
console.log(students instanceof Array);     //asks if the the variable students contains an array, prints true
console.log(students[2]);                   //prints rhys
console.log(students[6]);                   //prints "['ryan','iesha','amira']" treats the inner array as its own value
console.log(students[6][1]);                //prints iesha, used to access valuesof the array within the students array
console.log(students[6][3][0]);             //prints trevor, doesnt matter how deep we go
let myFriend = students[6][3][0];
console.log(`Hello ${myFriend}, you look nice today`);

//challenge

let students = ['tony','marshall','rhys','ray',23,true,['ryan','iesha',['trevor','terry'],'amira',]];
let myFriend = students[6][1];
let myFriend2 = students[6][3];
console.log(`Hello ${myFriend} and ${myFriend2}, you look nice today`);
//need to keep track of index numbers as you go



let food = [ 'pecan pie','shrimp','quesadilla','cheese cake','hotdog'];
for(let item of food){
    console.log(item);
}                       //prints the values in the array

let food = [ 'pecan pie','shrimp','quesadilla','cheese cake','hotdog'];
for(let item in food){
    console.log(item);  //prints the index number of each value
}  

let food = [ 'pecan pie','shrimp','quesadilla','cheese cake','hotdog'];
for(let item in food){
    console.log(food[item]);
}                       //prints the values in the array


//how to add a new item into an array***
//use .push()
let food = [ 'pecan pie','shrimp','quesadilla','cheese cake','hotdog'];
let pizza = 'pizza';
food.push(pizza);          //can just add the string or value itself in the push() parathesis
console.log(food);                  //adds pizza to the array, adds values to the end of the list

//how to remove a value of an array (or add)

//.splice
let food = [ 'pecan pie','shrimp','quesadilla','cheese cake','hotdog'];
food.splice(1,1, 'bananas');    //says 'at index 1, remove 1, and add banana
console.log(food);              //removed shrimp, leaves no empty space

let food2 = [ 'pecan pie','shrimp','quesadilla','cheese cake','hotdog'];
food2.splice(1, 2, 'bananas');    
console.log(food2);                //removes 2, adds banana

let food = [ 'pecan pie','shrimp','quesadilla','cheese cake','hotdog'];
food.splice(2,0,'sweet potatoe pie');
console.log(food);                  //at index 2, remove 0, add 'sweet potatoe pie'


//mini challenge
let food = [ 'pecan pie','shrimp','quesadilla','cheese cake','hotdog']; //replaces hotdog with nacho
food.splice(4,1,'nachos');
console.log(food);

let food2 = [ 'pecan pie','shrimp','quesadilla','cheese cake','hotdog']; //moves hotdog down one and inserts nachos
food2.splice(4,0,'nachos');
console.log(food2);

//other methods
let food = [ 'pecan pie','shrimp','quesadilla','cheese cake','hotdog'];
food.pop();                 //only used to remove the last item
                            //doesnt have a parameter

food.forEach(f => {         //is a loop to go through each item in the array, then you can place a function inside
    console.log(f);         //this says 'go through each item in the array, then function says for each loop, console the value
})

console.log(food);


let food = [ 'pecan pie','shrimp','quesadilla','cheese cake','hotdog'];

food.forEach((food,number,array) => {
    console.log(number); //first position only gives the value
    console.log(food);   //second position only gives index number
    console.log(array)  //third prints the whole array
})
console.log(food);


//Challenge!
/**
 * create an array of movies
 * use .forEach() to list your movies
 * add another movie at the end
 * and replace one of your existing movies with another
 */

let movies = ['Jaws','The Hobbit','Iron Man', 'Spiderman'];
movies.forEach(m => {console.log(m);})

movies.push('Harry Potter');
    movies.forEach(m => {console.log(m);})

movies.splice(1,1, 'Lord of the rings');
    movies.forEach(m => {console.log(m);})
