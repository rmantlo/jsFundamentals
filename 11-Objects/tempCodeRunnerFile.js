let originalObject = {
  age: 19,
  name: 'Luke Skywalker',
  eyeColor: 'blue',
  isJedi: true,
};

let keyArr = Object.keys(originalObject);
console.log(keyArr);

let valueArr = Object.values(originalObject);
console.log(valueArr);

let newObject = new Object();

for (let x = 0; x <= keyArr.length; x++) {
  newObject.valueArr[x] = keyArr[x];
}

console.log(newObject);