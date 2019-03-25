/**************************
OBJECTS
***********************
An object is a data type that constists of key/value pairs. 

let name = {
    (1)    (2)
  key   :   'value';
  (3)  (4)    (5)
}
1- Name of the object, how its identified
2- All of the data for an object is contained in curly braces
3- this is the name of the specific data inside the object
4- The data name and value are separated by a colon
5- The value of the data. Each key/value pairing ends with a comma 
*/

let netflix = {
    id: 9,
    name: "Super Store",
    season1: {
        seasonInfo: {
          episodeInfo : [
            { episode: 1, episodeName: "Pilot"},
            { episode: 2, episodeName: "Magazine Profile"},
            { episode: 3, episodeName: "Shots and Salsa"},
            { episode: 4, episodeName: "Mannequin"},
            { episode: 5, episodeName: "Shoplifter"},
            { episode: 6, episodeName: "Secret Shopper"},
            { episode: 7, episodeName: "Color Wars"},
            { episode: 8, episodeName: "Wedding Day Sale"},
            { episode: 9, episodeName: "All-Nighter"},
            { episode: 10, episodeName: "Demotion"},
            { episode: 11, episodeName: "Labor"}
          ]
        }
      },
    season2: {},
    season3: {}
    };

    //object keys can be another object or array
    console.log(netflix);   //prints object, not detailed for deeper objects
    console.log(netflix.name); //prints the name keyword's value
    console.log(netflix.season1.seasonInfo.episodeInfo); //goes deeper and prints the episodeInfo array
    console.log(netflix.season1.seasonInfo.episodeInfo[3]); //prints '{ episode: 4, episodeName: 'Manneqiun}
    console.log(netflix.season1.seasonInfo.episodeInfo[0].episodeName);//goes into the array to index 0 (the first object), 
                                                                         //and prints that objects keyword

    //challenge
    //print episode and episode name

    let netflix = {
        id: 9,
        name: "Super Store",
        season1: {
            seasonInfo: {
              episodeInfo : [
                { episode: 1, episodeName: "Pilot"},
                { episode: 2, episodeName: "Magazine Profile"},
                { episode: 3, episodeName: "Shots and Salsa"},
                { episode: 4, episodeName: "Mannequin"},
                { episode: 5, episodeName: "Shoplifter"},
                { episode: 6, episodeName: "Secret Shopper"},
                { episode: 7, episodeName: "Color Wars"},
                { episode: 8, episodeName: "Wedding Day Sale"},
                { episode: 9, episodeName: "All-Nighter"},
                { episode: 10, episodeName: "Demotion"},
                { episode: 11, episodeName: "Labor"}
              ]
            }
          },
        season2: {},
        season3: {}
        };

        
console.log('Episode ', netflix.season1.seasonInfo.episodeInfo[4].episode, netflix.season1.seasonInfo.episodeInfo[4].episodeName);

//another's example
function episodeNameFinder(episodeNum){
    console.log(netflix.season1.seasonInfo.episodeInfo[episodeNum].episodeName)
}
episodeNameFinder(1);


/****Json**/
//strings built to look like objects
//but you can dig through them like an objects
//play with them later


//new object

let spaceJam = {
    toonSquad: {
      human: 'Michael Jordan',
      rabbit1: 'Bugs Bunny',
      rabbit2: 'Lola Bunny',
      duck: 'Daffy Duck',
      tDevil: 'Tasmanian Devil',
      bird: 'Tweety',
      cat: 'Sylvester',
      pig: 'Porky Pig'
    },
    monstars: {
      0: 'Bupkus',
      1: 'Bang',
      2: 'Nawt',
      3: 'Pound',
      4: 'Blanko'
    },
    nbaPlayers: {
      phoenixSuns: 'Charles Barkley',
      newJerseyNets: 'Shawn Bradley',
      newYorkNicks: 'Patrick Ewing',
      charlotteHornets1: 'Larry Johnson',
      charlotteHornets2: 'Muggsy Bogues'
    }
  }
console.log(Object.keys(spaceJam.nbaPlayers)); //prints only the keys in the nbaPlayers object, prints like an array
console.log(Object.keys(spaceJam.nbaPlayers)[0]); //dig through that array! prints only phoenixSuns
console.log(Object.keys(spaceJam.toonSquad));

console.log(Object.values(spaceJam.toonSquad)); //gives us the values, we can use regular dot notation for this though


let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10,
}

console.log(garden.vegetable);

let x = 'vegetable';

console.log(garden.x); //undefined, because x is not a part of garden, the dot assumes x is a key already in garden with no value
console.log(garden[x]);//prints zucchini, for [] in brackets it assumes not that x is in the object, but exists somewhere, so it goes to look
                        // object keys are technically strings (dont worry about this), so x = vegetables because the key vegetables

let baking = {};
baking['zucchini'] = 'Better make some bread!'; //prints { zucchini: 'Better make some bread!' }
console.log(baking);    //use [ ] to set a new key value pairing, even if it doesnt exist

console.log(baking.garden.vegetable);   //error, garden is not a key in baking, even though it exists elsewhere

//how to mix objects:

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10,
}
let x = 'vegetable';

let baking = {};
baking['zucchini'] = 'Better make some bread!';

console.log(baking[garden['vegetable']]); //prints 'better make some bread!'
            //garden object was added into baking
            //garden['vegetable'] = 'zucchini'
            //so it becomes baking['zucchini'] which = 'better make some bread!'



let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10,
}

let key = 'water';

Object.keys(garden).forEach(g => {
        //console.log(g)
    if(key === g){
    console.log(garden[key]); //true
    } else {
        console.log('not water'); 
}
});