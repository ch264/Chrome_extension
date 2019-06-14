console.log(`<div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>`)


//////////////////////////////////////////////////////
// /////////// Variables //////////////////////////////
///////////////////////////////////////////////////////

// sets userName equal to localStorage
let userName = localStorage.getItem('receivedName');

// If no userName is set, display friend
if (userName == null) {
	userName = "friend";
}


// random quotes that are displayed on page refresh
// let quotes = [
// 	"You got it, Toyota",
// 	"I believe in you",
// 	"This too, shall pass",
// 	"Yas Kweeen, you can do it",
// 	"Lets talk about coding..",
// 	"Goldenrod",
// 	"Team Brockit",
// 	"Bralton",
// 	"Charmazon",
// 	"Canada rocks"
// ]

let mindfulSnack = [
	"Mindfully eat a craisin", 
	"Take a deep breath in, and breath out", 
	"Where are your feet? can you feel them?", 
	"Smile and take a deep breath", 
	"Stop and listen, what can you hear?", 
	"What can you see?",
	"What can you hear?",
	"Are you drinking enough water?",
	"A decluttered space calms the mind",
	"Take two mindful bites",
	"What does one breath feel like?",
	"Pay attention to how the air feels on your skin",
	"Slow down, take a step back, take a deep breath, you got this",
	"Everybody stretch!"
]



//////////////////////////////////////////////////////
// /////////// Functions //////////////////////////////
///////////////////////////////////////////////////////

// opens the settings form
function openSettings() {
	document.getElementById('settings').classList.toggle('settings-open');
}

// show mindful snack
function showSnack() {
	document.getElementById('mindful-snack').classList.toggle('show-snack');
}

// saves userName to localStorage
function saveName() {
	localStorage.setItem('receivedName', userName)
}

// capture form input and save in variable userName
function changeName() {
	userName = document.getElementById('input-name').value;
	saveName();
}

// displays userName in greeting
function getGreeting() {
	document.getElementById('greeting').innerHTML = `Hello ${userName}. You got this!`;
}

	// pick a quote at random
	function quote(quotes) {
		return quotes[Math.floor(Math.random() * quotes.length)];
	}

	// window.onload = function() {
	// 	let randomQuote = quote(quotes);
	// 	document.getElementById('quote').innerHTML = randomQuote;
	// }



///////////////////////////////////////////////////////
// /////////// EventListeners /////////////////////////
///////////////////////////////////////////////////////


chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.create({'url': "chrome://newtab"})
})

document.getElementById('button-settings').addEventListener('click', openSettings)



// On click on add button, change the userName
document.getElementById("button-name").addEventListener('click', function(){
	changeName();
})

// On click on add button, show a mindfullness snack
document.getElementById("button-snack").addEventListener('click', function(){
	let randomMindfulSnack = quote(mindfulSnack);
	document.getElementById('mindful-snack').innerHTML = randomMindfulSnack;
	showSnack();
})


// calls the userName display function
getGreeting();