
///////////////////////////////////////////////////////
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

// sets userName equal to localStorage
let userName = localStorage.getItem('receivedName');

// If no userName is set, display friend
if (userName == null) {
	userName = "friend";
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