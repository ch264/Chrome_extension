
console.log('js');

chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.create({'url': "chrome://newtab"})
})


// opens the settings form
function openSettings() {
	document.getElementById('settings').classList.toggle('settings-open');
	console.log('in button')
}

document.getElementById('button-settings').addEventListener('click', openSettings)


let userName = localStorage.getItem('receivedName');

function saveName() {
	localStorage.setItem('receivedName', userName)
}

if (userName == null) {
	userName = "friend";
}

function changeName() {
	userName = document.getElementById('input-name').value;
	saveName();
}



document.getElementById("button-name").addEventListener('click', function(){

	console.log('in add button')
	changeName();
	
})


function getGreeting() {
	document.getElementById('greeting').innerHTML = `Why, hello there ${userName}. You got this!`;
}

getGreeting();