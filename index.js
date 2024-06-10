const app = document.getElementById('app');
const header = document.querySelector('.header');
const stats = document.querySelector('.stats');
const walks = document.querySelector('.walks');
const signUp = document.querySelector('.signup');
const walkerInput = document.getElementById('walkerinput');
const walkerName = walkerInput.elements["walkername"];
const walkerDistance = walkerInput.elements['walkerdistance'];
const walkHappiness = walkerInput.elements['happiness']
const walkSubmit = walkerInput.elements['submit'];
const walksId = document.getElementById('walks')
const lastWalk = document.getElementById('lastwalk');
const totalWalk = document.getElementById('totalwalk');
const average = document.getElementById('average');
const mostFrequent = document.getElementById('mostfrequent');


let radarStats = [];

walkerInput.addEventListener('submit', handleClick);

function handleClick(event) {
    event.preventDefault();
    event.console.log('test')
    const div = document.createElement('div');
    div.classList.add('walk-item flex-tem');
    div.textContent= `Test`
    walksId.appendChild(div)
    cacheInput();
    updateStats()
    walkerInput.reset();
}

function cacheInput(event) {

}

function updateStats(event) {

}