//throw statements throw exceptions, execution of the code will stop, and code will move on to the catch block
// if no catch block exists among caller functions, program stops running

function addNumbers(a, b) {
    if (isNaN(a) || isNaN(b)) { //isNaN() means it is claiming the value is not a number
      throw "One of the parameters is not a number";
    } else {
        return a + b;
    }
}
// try-catch
try {
    addNumbers(10, 'kenn'); //makes a = 10, and b = 'kenn', which is not a number
  }
  catch(error) {
    console.log(error);
  }
  //only one is not a number, but one is, so it 'throws' and prints ' one of the parameters is not a number
  //w/ both as numbers, it returns a+b and prints nothing

  //if this is true, we 'throw' the exception, if false it prints an error

//WHY IS THIS NO GO