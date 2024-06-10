const app = document.getElementById('app');
const header = document.querySelector('.header');
const stats = document.querySelector('.stats');
const walks = document.querySelector('.walks');
const signUp = document.querySelector('.signup');
const walkerInput = document.getElementById('walkerinput');
const walkerName = walkerInput.elements["walkername"];
const walkerDistance = walkerInput.elements['walkerdistance'];
const walkHappiness = walkerInput.elements['happiness'];
const walkNotes = walkerInput.elements['notes'];
const reponsible = walkerInput.elements['responsible'];
const date = walkerInput.elements['date'];
const walkSubmit = walkerInput.elements['submit'];
const walksId = document.getElementById('walks')
const lastWalk = document.getElementById('lastwalk');
const totalWalk = document.getElementById('totalwalk');
const average = document.getElementById('average');
const mostFrequent = document.getElementById('mostfrequent');


let radarStats = [];


let walkNum =0;



walkerInput.addEventListener('submit', handleClick);

function handleClick(event) {
    event.preventDefault();
    walkNum =walkNum+1;

    let div = document.createElement('div');
    div.classList.add('walk-item');
    div.innerHTML = `<h3>Walk: ${walkNum}</h3><p>Walked by: <span>${walkerName.value}</span></p><p>Date and Time: <span>${date.value}</span></p><p>Total Distance: <span>${walkerDistance.value}</span> Miles</p><p>Happiness Level: <span>${walkHappiness.value}</span></p><p>Notes:</p><p>${walkNotes.value}</p>`
    walksId.appendChild(div)
    cacheInput();
    updateStats()
    walkerInput.reset();
}

function cacheInput(event) {

}

function updateStats(event) {

}