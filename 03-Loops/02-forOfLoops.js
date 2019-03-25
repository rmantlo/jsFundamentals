//looks for iterable values
//doesnt work with objects

let student = {
    name: 'becky',
    awesome: true,
    degree: 'biology',
    studying: 'javascript',
    week: 1
}

for (item of student){
    console.log(item);
} //error, states student is not iterable


//good for arrays

let catArray =['tabby','shorthair','burmese','maine coon','rag doll'];
for(cat of catArray){   //can have 'let' but dont need it
    console.log(cat, 'says meow');
}                       //prints each value


let name = "becky";
for (i of name){
    console.log(i);
}                       //prints letters, not index




let count = 0;
for ( ;  count < 9; ++count ) {
  console.log(count);
}
