//application program interface
//the go between a server to the html/requester
const baseURL = 'https://api.spacexdata.com/v2/rockets'; //called an endpoint, where our data lives
const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');
const spaceTable = document.querySelector('table');


searchForm.addEventListener('submit', fetchSpace)

function fetchSpace(e) {
    e.preventDefault(); //prevents button from auto refreshing when clicked

    fetch(baseURL)

    .then(results => {
        console.log(results);
       return results.json();
    })
    .then(json => {
        console.log(json);
        displayRockets(json);
        displayRocketTable(json);
    })
    
}

function displayRockets(data) {
    // for ( let x in data){
    //     console.log(data[x].name);
    //     console.log(data[x].cost_per_launch);
    // }
    let rockets = data.forEach( r => {
        let rocket = document.createElement('li'); //create a new element
        let cost = document.createElement('li');
        rocket.innerText = r.name;
        cost.innerText = r.cost_per_launch;
        spaceShips.appendChild(rocket);
        spaceShips.appendChild(cost);

        //let rocket = document.createElement('li');
        //rocket.innerText = `${r.name}: ${r.cost_per_launch}`;
        //spaceShips.appendChild(rocket);
    } )
    
}


//Challenge: put the names and cost into a table with table header name and cost
function displayRocketTable(dataTable) {
    
    console.log('WHAT');

    let tabRow = document.createElement('tr');
    let tabName = document.createElement('th');
    let tabCost = document.createElement('th');
    tabCost.innerText = 'Cost';
    tabName.innerText = 'Name';
    spaceTable.appendChild(tabRow);
    tabRow.appendChild(tabName);
    tabRow.appendChild(tabCost);
    

    let rocketsa = dataTable.forEach( r => {
        let tabRowe = document.createElement('tr');
        let rocketa = document.createElement('td');
        let costa = document.createElement('td');
        rocketa.innerText = r.name;
        costa.innerText = r.cost_per_launch;
        spaceTable.appendChild(tabRowe);
        tabRowe.appendChild(rocketa);
        tabRowe.appendChild(costa);
        

    })


}