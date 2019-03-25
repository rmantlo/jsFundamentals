const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'G5F1EOjulzNjZGn7bJckMWT3nAoFROGF'; 
let url;

//SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

nav.style.display= 'none';
let pageNumber = 0;
console.log('Page Number:', pageNumber);
let displayNav = false;

//EVENT LISTENERS
 
searchForm.addEventListener('submit', fetchResults); 
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

//FUNCTIONS

//FETCH DATA CONTROLS
function fetchResults(e) {
    e.preventDefault();
    console.log(e)
    // Assemble the full URL
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
    console.log(url);

    //CONDITIONS for START/END DATES
    if(startDate.value !== ''){ //as long as the start/end dates are not empty they will be added to the url
        console.log(startDate.value);
        url += '&begin_date=' + startDate.value;
    }

    if(endDate.value !== ''){
        url += '&end_date=' + endDate.value;
    }


    fetch(url)
        .then(function(result){
            return result.json();
        }).then(function(json) {
            displayResults(json);
            console.log(json);
        })
}

//DISPLAYRESULT CONTROLS
function displayResults(json){
    while (section.firstChild){ //this removes anything in the section for every search so results dont stack
        section.removeChild(section.firstChild);
    }

    let articles = json.response.docs;

    // if(articles.length === 10){
    //     nav.style.display = 'block';
    // }else {
    //     nav.style.display = 'none';
    // }
    
    if(pageNumber === 0){
        nav.style.display = 'block';
        previousBtn.style.display = 'none';
        nextBtn.style.display = 'block';
    }else if(articles.length === 10 && pageNumber !== 0){
        nav.style.display = 'block';
        previousBtn.style.display = 'block';
        nextBtn.style.display = 'block';
    }else if(articles.length < 10 && articles.length >= 0 && pageNumber > 0){
        nav.style.display = 'block';
        nextBtn.style.display = 'none';
        previousBtn.style.display = 'block';
    } else{
        nav.style.display = 'none';
    };


    if(articles.length === 0){
        console.log('No Results');
    }else{
        for( let i = 0; i < articles.length; i++){
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');
            let para = document.createElement('p');
            let clearfix = document.createElement('div');

            let current = articles[i];
            //console.log('Current:', current);

            link.href = current.web_url;
            link.textContent = current.headline.main;

            para.textContent = 'Keywords: ';

            for( let j = 0; j < current.keywords.length; j++){
                let span = document.createElement('span');
                span.textContent += current.keywords[j].value + ', ';
                para.appendChild(span);
            }

            if(current.multimedia.length > 0){
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
                img.alt = current.headline.main;
            }

            clearfix.setAttribute('class','clearfix');

            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(img);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
        }
    };
    
};
//PAGE CONTROLS
function nextPage(e){
    pageNumber++;
    fetchResults(e);
    console.log('Page Number:', pageNumber);
}

                      
function previousPage(e){
    if(pageNumber > 0){
        pageNumber--;
    }else{
        return;
    }
    fetchResults(e);
    console.log('Page:', pageNumber);
} 
