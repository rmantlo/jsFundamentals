let weather = 75;
if (weather < 70){
    console.log('Wear a jacket');
} else {
    console.log('No jacket needed');
} //prints no jacket needed

//challenge

let firstName = 'Becky';
let secondName = 'Lauren';
if(secondName == 'Becky'){
    console.log('Hello, my name is',firstName);
} else {
    console.log('Hello, is your name',secondName+'?');
}

//challenge*****************************

//bronze
//my try (worked)
let name = 'aUTuMN';
let character = name.charAt(0);
if(name.charAt(0) == character.toUpperCase()){
    console.log(name);
} else {
    console.log('Hey, this is not written correctly')
}
//proper answer
let name = 'aUTuMN';

if(name[0] == name[0].toUpperCase()){
    console.log(name);
} else {
    console.log('Hey, this is not written correctly')
}


//silver
//my try (worked)
let name = 'aUTuMN';
let character = name.charAt(0);
let splitName = name.split('a');
if(name.charAt(0) == character.toUpperCase()){
    console.log(name.charAt(0));
} else {
    console.log(splitName[1].toLowerCase());
}
//proper answer
let name = 'aUTuMN';

if(name[0] == name[0].toUpperCase()){
    console.log(name[0]);
} else {
    console.log(name.substr(1).toLowerCase());
}

//gold (didnt finish)
let name = 'aUTuMN';
let character = name.charAt(0);
let splitName = name.split('a');
if(name.charAt(0) == character.toUpperCase()){
    console.log(name.toLowerCase());
} else {
    console.log(name[0].toUpperCase()+name.substr(1).toLowerCase());
}

//proper answer
let name = 'aUTuMN';

if(name[0] == name[0].toUpperCase()){
    console.log(name[0]+name.substr(1).toLowerCase());
} else {
    console.log(name[0].toUpperCase()+name.substr(1).toLowerCase());
}


/********************************************
 * else if 
 * *************************************
 */
//challenge

let age = 72;
if(age <= 17){
    console.log('Sorry, youre too young to do anything');
} else if(age == 18){
    console.log('Yay! You can vote!');
} else if( age == 21){
    console.log('Yay! You can drink!');
} else if(age == 25){
    console.log('Yay! You can rent a car!');
} else if(age > 60){
    console.log('Youve made it this far, Do whatever you want!');
}

//better way:
let age = 30;
if(age > 60){
    console.log('Youve made it this far, Do whatever you want!');
}else if (age >=25){
    console.log('Yay! You can rent a car!');
}else if(age >=21){
    console.log('Yay! You can drink!');
}else if(age >=18){
    console.log('Yay! You can vote!');
}else if(age <=17){
    console.log('Sorry, youre too young to do anything');
} //can also use && || statements, or brackets

let age = 26;
let a = 'Yay! You can vote!';
let b = 'Yay! You can drink!';
let c = 'Yay! You can rent a car!';

if (age >= 18 && age <= 20) {
   console.log(a);
 } else if (age >= 21 && age <= 24) {
   console.log(a,b);
 } else if (age >= 25) {
   console.log(a,b,c);
 } else {
   console.log('Sorry, you are too young to do anything.');
 }
