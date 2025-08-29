function openPlayerConfig(event) {
	const selectedPlayerId = +event.target.dataset.playerid;
	editedPlayer = selectedPlayerId;

	playerOverlay.style.display = 'block';
	backDropElement.style.display = 'block';
}

function closePlayerConfig() {
	playerOverlay.style.display = 'none';
	backDropElement.style.display = 'none';
	formElement.firstElementChild.classList.remove('error');
	errorOutput.textContent = '';
	document.getElementById('playername').value = '';
}

function savePlayerConfig(event) {
	event.preventDefault();
	const formData = new FormData(event.target);
	const enteredPlayername = formData.get('playername').trim();
	// console.log(enteredPlayername);

	if (!enteredPlayername) {
		event.target.firstElementChild.classList.add('error');
		errorOutput.textContent = 'Please enter a valid name';
		return;
	}

	const updatedPlayerDataElement = document.getElementById(
		'player-' + editedPlayer + '-data'
	);
	updatedPlayerDataElement.children[1].textContent = enteredPlayername;

	if (editedPlayer === 1) {
		players[0].name = enteredPlayername;
	} else {
		players[1].name = enteredPlayername;
	}
	closePlayerConfig();
}
