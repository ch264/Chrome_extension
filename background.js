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
let quotes = [
	"You got it, Toyota",
	"I believe in you",
	"This too, shall pass",
	"Yas Kweeen, you can do it",
	"Lets talk about coding..",
	"Goldenrod",
	"Team Brockit",
	"Bralton",
	"Charmazon",
	"Canada rocks"
]



//////////////////////////////////////////////////////
// /////////// Functions //////////////////////////////
///////////////////////////////////////////////////////

// opens the settings form
function openSettings() {
	document.getElementById('settings').classList.toggle('settings-open');
	console.log('in button')
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
	document.getElementById('greeting').innerHTML = `Why, hello there ${userName}. You got this!`;
}

	// pick a quote at random
	function quote(quotes) {
		return quotes[Math.floor(Math.random() * quotes.length)];
	}

	window.onload = function() {
		let randomQuote = quote(quotes);
		document.getElementById('quote').innerHTML = randomQuote;
	}



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


// calls the userName display function
getGreeting();