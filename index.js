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
const toStatsBtn = document.getElementById('topbtn');
let radarStats = [];
let walkNum =0;
const theMoment = (new Date()).getTime()+1000000;
//added extra time since the page doesnt refresh when info entered, the input will grow but this won't so I have to counteract that with some buffer time.

walkerInput.addEventListener('submit', handleClick);
toStatsBtn.addEventListener('click', toStats)

function handleClick(event) {
    event.preventDefault();
    walkNum =walkNum+1;
    cacheInput();
    updateStats();
    let div = document.createElement('div');
    div.classList.add('walk-item');
    div.innerHTML = `<h3>Walk: ${walkNum}</h3><p>Walked by: <span>${walkerName.value}</span></p><p>Date and Time: <span>${date.value}</span></p><p>Total Distance: <span>${walkerDistance.value}</span> Meters</p><p>Happiness Level: <span>${walkHappiness.value}</span></p><p>Notes:</p><p>${walkNotes.value}</p>`
    walksId.appendChild(div)
    walkerInput.reset();
    window.alert("Thank you for Submitting your walk with Mr. Radar. I'm sure he appreciated it.");
    walks.classList.remove('hidden');
    toStatsBtn.classList.remove('hidden');
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
let noData = 0;
let sum =0;
let happinessScoreTotal=0;
for(let i=0; i<radarStats.length;i++) {
    sum = sum + Number(radarStats[i].walkerDistanceInput);
    if(radarStats[i].walkHappinessInput>0) {
    happinessScoreTotal = happinessScoreTotal+Number(radarStats[i].walkHappinessInput);
    }else {
        noData= noData-1;
        //happiness not required to input, but if it is left blank, it should not be included in average. caclulation adjusted below as well.
    }
}
let happinessavg = Math.round((happinessScoreTotal/((radarStats.length+noData)*10))*10)
totalWalk.textContent = `${sum}`;
if(happinessScoreTotal&&radarStats.length+noData>0){average.textContent =`${happinessavg}`;} else{average.textContent =`Not enough info yet`;}
lastWalk.textContent = `${date.value}`
mostFrequent.textContent = `${walkerName.value}`
}

function toStats() {
 lastWalk.parentNode.scrollIntoView({behavior: 'smooth'})
 //I could have just jumped to the top of the div, but I wanted to hit one of the requirements to use a parent-child relationship
 //found the scrollIntoView method to do this easily on stack Overflow, wanted to cite my source.
 //https://stackoverflow.com/questions/3569329/javascript-to-make-the-page-jump-to-a-specific-location
}