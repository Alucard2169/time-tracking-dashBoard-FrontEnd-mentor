// defining variables

const subCardContainer = document.querySelector('.container');



let mode = 'weekly';



// getting data from data.json file

let data; 

async function getData() {
    let res = await fetch('https://raw.githubusercontent.com/Alucard2169/time-tracking-dashBoard-FrontEnd-mentor/main/data.json')

    data = await res.json();
    console.log(data)
    
    for (let i = 0; i < data.length; i++){

        //create data elements

        const subCardBack = document.createElement('div');
        const backLogo = document.createElement('img');
        const subCard = document.createElement('div');
        const subCardUpperSection = document.createElement('section');
        const stuff = document.createElement('span');
        const menuLogo = document.createElement('img');
        const subCardLowerSection = document.createElement('div');
        const duration = document.createElement('h2');
        const history = document.createElement('p');

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

        
        
        //appending the variables(elements) to the sub-card
        subCardUpperSection.append(stuff, menuLogo);
        subCardLowerSection.append(duration, history);
        subCard.append(subCardUpperSection, subCardLowerSection)
        
        //appending sub card to the main card
        subCardBack.append(subCard, backLogo);
        subCardContainer.append(subCardBack);
        
        // modifying the variables
        subCardBack.style.backgroundColor = data[i].background;
        stuff.innerText = data[i].title;
        backLogo.src = data[i].image;
        backLogo.alt = data[i].alt;
        menuLogo.src = 'images/icon-ellipsis.svg';
        duration.innerText = `${data[i].timeframes['weekly'].current}hrs`;
        history.innerText = `Last Week - ${data[i].timeframes['weekly'].previous}`;
        
    }
    

}
getData();


