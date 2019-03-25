// There is an attribute on all properties in an array called "enumerable." Objects in javascript are by default enumerable, meaning that they show up in for...in loops. There are ways to make properties on an object non-enumerable, thereby preventing them from showing up when you use a for...in loop, making them partially hidden, which can occasionally be useful. The vast majority of properties will be enumerable, and unless you have a good reason to change this, it's recommended that you keep them that way.

var country = {
    capital : "Tegucigalpa",
    name: "Honduras",
    mainExport: "Bananas"
};
//Since everything is enumerable, our for in loop should be able to find everything.
for (var property in country){
    console.log(property + ' : ' + country[property]);
}
/*
capital : Tegucigalpa
name : Honduras
mainExport : Bananas
*/

//Create an object with properties. Use a for...in loop on it.
//Research the methods Object.keys() and Object.getOwnPropertyNames() on MDN. Try to use them with your object.
//object.keys() returns an array of the object
let cats = {
    breed: 'tabby',
    age: 7,
    color: "brown"
    
}
console.log(Object.keys(cats)); //prints only the key words into an array, except enumerable
console.log(Object.getOwnPropertyNames(cats)) //prints/does same thing, including enumerable properties