


const baseURL = 'https://swapi.co/api/';
const swList = document.querySelector('ul');

const morePeople = 'https://swapi.co/api/people/?page=';
let pageNumber = 0;

fetch(baseURL)
    .then(results => {
        console.log(results.json());
    })

fetch(baseURL + 'people')
    .then(results => {
        return results.json();
    })
    .then(json => {
        console.log(json);
        let people = json.results;
        //displayResults(people);
        displayMore(people);
    })

// function displayResults(data) {
//     let person = data.forEach(a => {
//         console.log(a.name);
//         let newList = document.createElement('li');

//         newList.innerText = a.name;
//         swList.appendChild(newList);
//     })

// };
function fetchSpace(d) {
    fetch(morePeople + pageNumber)
        .then(results => {
            return results.json();
        })
        .then(json => {
            displayMorePeople(json.results);
        })
}
function displayMore(more) {
    for (x of more) {
        if (more.length > 0) {
            pageNumber++;
            fetchSpace();
            console.log(pageNumber);
        }
        else {
            fetchSpace();
        }
    }
}
function displayMorePeople(g) {
    let person2 = g.forEach(a => {
        console.log(a.name);
        let newList2 = document.createElement('li');

        newList2.innerText = a.name;
        swList.appendChild(newList2);
    })
}



