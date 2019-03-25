//used for iterating values in an object

let student = {
    name: 'becky',
    awesome: true,
    degree: 'biology',
    studying: 'javascript',
    week: 1
}

for (let item in student){
    console.log(item)               //item is only w/in the forloop, it is our own created variable
}                                   //lists each key/variable name, not values
                    //think of it like folders, this grabs everything in the 'student' folder, but doesnt open the keyword/variable 'folders'

for (let item in student){
    console.log(student[item]); //square bracket notation
}                               // lists the values of the keywords

for (let item in student){
    console.log(item,student[item]);
}


let catArray = ['tabby','shorthair','burmese','maine coon', 'rag doll'];
for (let cat in catArray){
    //console.log(cat);             //this prints numbers, relating to the value's positions or idex number, prints 0 1 2 3 4
                                    //the catArray contains index 'folders' in replace of keywords/variables?
    console.log(catArray[cat])      //this will let use grab the actual value themselves

}

//challenge
//write for in loop that capitalizes the first letter of a students name


let studentName = 'auTumn';
let capName;
for(let x in studentName){
    if ( x == 0 ){
        capName = studentName[x].toUpperCase(); //x = 0, so position 0 is capitalized one
    }else { //capName is assigned to be the capitalized first position, 0-index
        capName += studentName[x].toLowerCase();
    }      //capName changed to add the rest of the index in lowercase
}
console.log(capName);

let name = 'becky';
for ( let i in name){
    console.log(i);
}                       //prints index


