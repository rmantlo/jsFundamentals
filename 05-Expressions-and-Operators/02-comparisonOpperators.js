3 == 3;
//equal opperator
3 == '3'; //doesnt like, but will work, converts to number when reading, so this is true

//strictly equal
3 === '3'; //has to be the same datatype as well as value, so this is false

console.log('3'==='3'); //true
console.log('c'==='3'); //false

//not equal
3 != '4'; //this is true, they are not equal
3 != '3'; //this is false, they are equal

//strictly not equal
3 !== '4'; //this is true, not same value
3 !== 3; //this is false, they are strictly equal
3 !== '3'; //this is true, not same datatype

//greater than/less than
3 > 2; //true
3 > 4; //false
3 < 3; //false, equal
3 >= 3; //true
3 <= 4; //true

//strictly greater/less
console.log(3 >== '2'); //error, not a thing?

//And
//there are 2 things, and both need to be true for something to work
 4 > 2 && 3 < 1; //this is false, as one statement is false
 4 > 2 && 3 > 1; //this is true, both statements are true

 //Or
 //there are 2 things, and atleast one statement need to be true for it to work
 4 > 2 || 3 < 1; //this is true, as one statement is true
 4 < 2 || 3 < 1; //this is false, as both are false
 4 > 3 || 3 > 1; //this is true, as both are true

 
