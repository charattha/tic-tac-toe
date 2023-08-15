function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid; // +'1' => 1(number)
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error')
    errorsOutputlement.textContent = ''
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('playername').trim()

    if (!enteredPlayerName) { // enteredPlayerName === ''
        event.target.firstElementChild.classList.add('error')
        errorsOutputlement.textContent = 'Please enter a valid name!';
        return;
    }
    const updatePlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatePlayerDataElement.children[1].textContent = enteredPlayerName;

    players[editedPlayer - 1].name = enteredPlayerName;
    closePlayerConfig();
}