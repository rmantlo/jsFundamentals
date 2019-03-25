//used to do something repeatedly
//if there is no goal, it will not stop ahh, infinte loops


// for loops contains 3 expressions. variable declaration, expression to be evaluated before each iteration, and  and expression to be evaluated after each loop run 
for (let i = 0; i < 10; i++) {
    console.log(i);
}


//challenge
//create forLoop, count to 20 by 2's

for (let i = 0; i < 21; i += 2) {
    console.log(i);
}

//count from 10 to 0 by 1's

for(let i = 10; i >= 0; i -= 1){
    console.log(i);
}

//count fro 0 down by -2 to -24

for (let i = 0; i > -25; i -= 2){
    console.log(i);
}

//go through a name and desplay each letter individually


let name = "becky";
for (let i = o; i < name.length; i++){
    console.log(name[i]);
}

//make a for loop to add up all numbers from 1 to 50, should equal 1275
let sum = 0;
for (let i = 0; i <= 50 ; i++){
    sum += i ; // sum = sum + i
    //console.log(sum); this prints each addition
}
console.log(sum); // move console.log outside of the forLoop for a single answer





