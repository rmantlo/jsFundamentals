//great way to do single line if/if else statements

let w = 6;

//ternary:
(w > 0) ? console.log('yes') : console.log('no');

//instead of
if(w>0){
    console.log('yes');
} else {
    console.log('no');
}


//
//

let w = 6;
if(w == 0){
    console.log('hey hey hey');
}else if (w < 0){
    console.log('nah nah nah');
}else {
    console.log('see ya later');
}

let w = 6;
(w==0) ? console.log("hey hey hey") : (w>0) ? console.log('nah nah nah') : console.log('see ya later');
//last options is like default, it needs to be there

//challenge

let age = 3;
let a = 'Yay! You can vote!';
let b = 'Yay! You can drink!';
let c = 'Yay! You can rent a car!';

(age>=25) ? console.log(c) : (age>=21) ? console.log(b) : (age >=18) ? console.log(a) : console.log('youre too young to do anything');


//ternaries like switches
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
let yes = -8;
(yes < 0 && yes > -10) ? console.log('worked') : (yes > 0) ? console.log('worked!') : console.log('didnt work'); //escape character