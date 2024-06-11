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
const theMoment = (new Date()).getTime()+1000000;
//added extra time since the page doesnt refresh when info entered, the input will grow but this won't so I have to counteract that with some buffer time.

walkerInput.addEventListener('submit', handleClick);

function handleClick(event) {
    event.preventDefault();
    walkNum =walkNum+1;
    cacheInput();
    updateStats();
    let div = document.createElement('div');
    div.classList.add('walk-item');
    div.innerHTML = `<h3>Walk: ${walkNum}</h3><p>Walked by: <span>${walkerName.value}</span></p><p>Date and Time: <span>${date.value}</span></p><p>Total Distance: <span>${walkerDistance.value}</span> Miles</p><p>Happiness Level: <span>${walkHappiness.value}</span></p><p>Notes:</p><p>${walkNotes.value}</p>`
    walksId.appendChild(div)
  
    walkerInput.reset();
    window.alert("Thank you for Submitting your walk with Mr. Radar. I'm sure he appreciated it.");
}

function cacheInput() {
let walkerNameInput =walkerName.value;
let dateInput = date.value;
let walkMoment =(new Date(dateInput).getTime());
let walkerDistanceInput = walkerDistance.value;
let walkHappinessInput = walkHappiness.value;
let walkNotesInput = walkNotes.value;
let eachWalk={walkNum, walkerNameInput, dateInput, walkerDistanceInput, walkHappinessInput, walkNotesInput}
if(walkMoment>theMoment){
    window.alert(`You entered ${dateInput}, you cannot enter a date that hasn't happened yet.`)
    walkerInput.reset();
    return error;
}
radarStats.push(eachWalk)
}


function updateStats() {
let sum =0;
let happinessScoreTotal=0;
for(let i=0; i<radarStats.length;i++) {
    sum = sum + Number(radarStats[i].walkerDistanceInput);
    happinessScoreTotal = happinessScoreTotal+Number(radarStats[i].walkHappinessInput);
}
let happinessavg = Math.round((happinessScoreTotal/(radarStats.length*10))*10)
totalWalk.textContent = `${sum}`;
average.textContent =`${happinessavg}`;
lastWalk.textContent = `${date.value}`
mostFrequent.textContent = `${walkerName.value}`
}

//These are the additional requirements I still need to do.

//i still need to add another even listener to get credit for that part of the assignment.
//maybe like a cheeky give treats button with a counter?

//Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).

//I could put a button on the very bottom of my page, and use it as a jump to top, then add a listener to firstChild of my first section or something?

