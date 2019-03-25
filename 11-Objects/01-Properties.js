var movie = {
    //These are properties
    name : "The Godfather",
    director: "Martin Scorsese"
};
//Use . to access the properties.
console.log(movie.name); 
console.log(movie["name"]);//No one does this, but you can.
//Quotes are optional around property names
var band = {
    "name" : "Weird Al Yankovic",
    "numberAlbums": 1,
};

console.log(band.name);
console.log(band.numberAlbums);

//nested properties: arrays can also be nested inside objects
var netflix = {
    id: 1,
    name: "",
    seasonInfo: {
        episodeInfo : [
            { episode: 1, episodeName: "Hey Paul"},
            { episode: 2, episodeName: "Yes Paul"}
        ]
    }
};

console.log("All data:", netflix);
console.log("Just season info: ", netflix.seasonInfo);
console.log("Episode Number: ", netflix.seasonInfo.episodeInfo[0].episode);


// challenges:
// Create an object with several properties. Print each to the console.
// Add an array as a property and loop over its elements. Print them to the console.
// Recall that objects can be created from a model. Create a model asking for a person's age, height, eye color, hair color, and whether or not they wear glasses (make this a boolean value). Then create yourself as an object with that model.
let object1 = {
    item: "banana",
    name:'steve',
    number: 12,
}
console.log(object1);
for(let x in object1){
    console.log(x);
    console.log(object1[x]);
}
function creation(a,b,c,d,e){
    let person = {};
    person.age = a;
    person.height = b;
    person.eyeColor = c;
    person.hairColor = d;
    person.glasses = e;
    console.log(person);
}
creation(24,"4'11",'brown','brown',true);
