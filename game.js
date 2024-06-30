// Simulated TikTok API event listener
function onGiftReceived(giftType) {
    if (giftType === 'galaxy') {
        advanceGame();
    }
}

let progress = 0;

function advanceGame() {
    progress += 10;
    document.getElementById('progress-value').innerText = progress;

    if (progress >= 100) {
        alert('Congratulations! You have completed the Galaxy Quest Adventure!');
        progress = 0; // Reset the game
        document.getElementById('progress-value').innerText = progress;
    }
}

// Simulate receiving a galaxy gift every 5 seconds
setInterval(() => {
    onGiftReceived('galaxy');
}, 5000);
