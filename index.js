const app = document.getElementById('app');
const header = document.querySelector('.header');
const stats = document.querySelector('.stats');
const walks = document.querySelector('.walks');
const signUp = document.querySelector('.signup');
const walkerInput = document.getElementById('walkerinput');
const walkerName = walkerInput.elements['walkername'];
const walkerDistance = walkerInput.elements['walkerdistance'];
const walkHappiness = walkerInput.elements['happiness']
const walkSubmit = walkerInput.elements['submit'];
let radarStats = [];

walkerInput.addEventListener('submit', handleClick);

function handleClick(event) {
    event.preventDefault();
    event.alert('you clicked the button');
}
