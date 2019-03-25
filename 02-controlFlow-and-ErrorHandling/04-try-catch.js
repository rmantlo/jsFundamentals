//the try block will contain one more more statements
//you want the try block to succeed, and if it does not succeed, you want control to pass to the catch block.

// try {
//     Block to try
// }
// catch(err) {
//     If the try block throws an exception, this block handles errors
// }


function tryCatchDemo(a) {
    try {  //this is the try block
        var upperCaseWord = a.toUpperCase();
        console.log(upperCaseWord);
    }
} //needs catch
tryCatchDemo('Hello'); // this is the function call

//now we're gunna add the catch block
//if any statement w/in the try block throws an exception, the catch block gains control
//if there is no exception, the catch block is skipped
function tryCatchDemo(a) {
    try {  //this is the try block
        var upperCaseWord = a.toUpperCase();
        console.log(upperCaseWord);
    }
    catch(err){
        console.log(err);
    }
}
tryCatchDemo('Hello');
tryCatchDemo(7); //second call, this creates an error as it cant make 7 uppercase