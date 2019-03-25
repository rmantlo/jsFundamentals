//Document Object Model
// let x = 10;
// console.log(x);
//document.getElementById('testParagraph').style.color='blue';
//console.log(document.querySelectorAll('p.sampleClass'));    //looks for all instances of p tags with that class name. prints an array, incase there are more than one thing named with that class

// console.log(document.querySelectorAll('p.sampleClass')[0]);
// console.log(document.querySelectorAll('p.sampleClass')[0].innerText);
// console.log(document.querySelectorAll('p.sampleClass')[1]);
// console.log(document.querySelectorAll('p.sampleClass')[1].innerText);

// let arr = document.querySelectorAll('p');
// for ( let x in arr){
//     console.log(arr[x]);
// }
//document.querySelectorAll('p.sampleClass')[0].innerHTML='<i>My text has changed</i>'
        
// document.getElementById('clickThisButton').addEventListener('click', (details) => {
//     //document.querySelectorAll('p.sampleClass')[0].innerHTML='<i>My text has changed<i>';
//     console.log(details);     
//     console.log(details.target); //target the button
//     //document.getElementById('clickThisButton').style.backgroundColor='red';
//     details.target.style.backgroundColor='blue'; //same as above, above had unnecessary parts as doc and id has already be declared previously in the statement
// })

    //challenge:
    //make the button toggle between red and blue

document.getElementById('clickThisButton').addEventListener('click', (details) => {
            
    if(details.target.style.backgroundColor =='red'){
        details.target.style.backgroundColor = 'blue';
    }else{
        details.target.style.backgroundColor = 'red';
    }
})

        //keyup registers every time any key is released
// document.getElementById('nameInput').addEventListener('keyup', (e) => {
//     console.log(e.target.value);
//     document.getElementsByTagName('p')[1].innerText = `${e.target.value} and more text`  //to index to specfic p tag

// })

// //CHALLENGE: write an if statement. if value of input field is lank, set innerText to 'Nothing has been typed' if it is not blank, set innerText to 'everyone, say hello to <value>

document.getElementById('nameInput').addEventListener('keyup', (e) => {
    console.log(e.target.value);
    if(e.target.value == ''){
        document.getElementsByTagName('p')[1].innerText = 'Nothing has been typed';
    }else{
        document.getElementsByTagName('p')[1].innerText = `Everyone, say hello to ${e.target.value}`;
    }

})
