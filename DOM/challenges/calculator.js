//challenge:
//made this work!
//clicked button should turn blue
// Print out negative nums in red

let num1 = document.getElementById('number1');
let num2 = document.getElementById('number2');
let num3 = document.getElementById('number3');

let b1 = document.getElementById('btn1'); 
let b2 = document.getElementById('btn2'); 
let b3 = document.getElementById('btn3'); 
let b4 = document.getElementById('btn4'); 
let b5 = document.getElementById('enter');


let opp;

b1.addEventListener('click', (a) => {
    b1.style.backgroundColor = 'blue';
    b2.style.backgroundColor = 'white';
    b3.style.backgroundColor = 'white';
    b4.style.backgroundColor = 'white';
    
opp = '+';
});

b2.addEventListener('click', (b) => {
    b2.style.backgroundColor = 'blue';
    b1.style.backgroundColor = 'white';
    b3.style.backgroundColor = 'white';
    b4.style.backgroundColor = 'white';
     opp = '-';
});

b3.addEventListener('click', (c) => {
    b3.style.backgroundColor = 'blue';
    b1.style.backgroundColor= 'white';
    b2.style.backgroundColor= 'white';
    b4.style.backgroundColor= 'white';
     opp = '*';
});

b4.addEventListener('click', (d) => {
    b4.style.backgroundColor= 'blue';
    b1.style.backgroundColor= 'white';
    b2.style.backgroundColor= 'white';
    b3.style.backgroundColor= 'white';
     opp = '/';
    });

   
b5.addEventListener('click', (e) => {
    switch (opp) {
        case '+':
        num3.innerText = Number(num1.value) + Number(num2.value);
            break;
        case '-':
        num3.innerText = Number(num1.value) - Number(num2.value);
            break;
        case '*':
        num3.innerText = Number(num1.value) * Number(num2.value);
            break;
        case '/':
        num3.innerText = Number(num1.value) / Number(num2.value);
            break;
        default:
            break;
    }
    if(num3.innerText < 0){
        num3.style.color='red';
    }else{
        num3.style.color='blue';
    };
});

