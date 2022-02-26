// defining variables

const subCardContainer = document.querySelector('.container');
const subContainer = document.querySelector('.sub-card-container');
const subCardBack = document.createElement('div');
const backLogo = document.createElement('img');
const subCard = document.createElement('div');
const subCardUpperSection = document.createElement('section');
const stuff = document.createElement('span');
const menuLogo = document.createElement('img');
const subCardLowerSection = document.createElement('div');
const duration = document.createElement('h2');
const history = document.createElement('p');

let mode = 'weekly';


// adding css Class to variables
subCardBack.classList.add('subBack');
backLogo.classList.add('loGo');
subCardUpperSection.classList.add('upper');
subCard.classList.add('sub-card');
stuff.classList.add('thing');
menuLogo.classList.add('logo');
subCardLowerSection.classList.add('lower');
duration.classList.add('duration');
history.classList.add('history');

// modifying the variables

stuff.innerText = 'Work';
backLogo.src = 'images/icon-work.svg';
backLogo.alt = 'work'
menuLogo.src = 'images/icon-ellipsis.svg';
duration.innerText = '32hrs';
history.innerText = 'Last Week - 36hrs';

//appending the variables(elements) to the sub-card
subCardUpperSection.append(stuff, menuLogo);
subCardLowerSection.append(duration, history);
subCard.append(subCardUpperSection, subCardLowerSection)

//appending sub card to the main card
subCardBack.append(subCard, backLogo);
subContainer.append(subCardBack);

let data;

async function getData() {
    let res = await fetch('./data.json')

    return data = await res.json();
}
getData();
console.log(data)