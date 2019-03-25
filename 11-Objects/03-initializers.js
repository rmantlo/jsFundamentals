//To create an object in JavaScript, there are a few different options. From the MDN docs: "Objects can be initialized using new Object(), Object.create(), or using the literal notation (initializer notation)." Using the literal notation gives more control and flexibility over what goes inside of it. Most objects you've created so far have been done with the initializer notation.
//Below are two ways to create a similar object.
// Object is created using the literal notation.
let johnSmith = {
  firstName: "John",
  lastName: "Smith",
  age: 25,
  eyeColor: 'blue'
};
// Object is created using Object()
let person = new Object();
person.firstName = "Jane";
person.lastName = "Doe";
person.age = 21;
person.eyeColor = "brown";
console.log(person);


//challenge: Research and create an object using Object.create().

var userB = {
  sayHello: function () {
    console.log('Hello ' + this.name);
  }
};

var bob = Object.create(userB, {

  'name': {
    value: 'Bob',
    enumerable: true
  }
});
console.log(userB);
console.log(bob);
//this makes no sense


