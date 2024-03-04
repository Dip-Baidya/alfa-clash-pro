// function play() {
//     // Home Section Hidden
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // Show the Playground Section
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }

function continueGame() {
    // step-1: Generate a random alphabet
    const alphabet = getRandomAlphabet();
}
function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}