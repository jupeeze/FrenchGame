const frenchNumbers = {
    1: 'un', 2: 'deux', 3: 'trois', 4: 'quatre', 5: 'cinq',
    6: 'six', 7: 'sept', 8: 'huit', 9: 'neuf', 10: 'dix',
    11: 'onze', 12: 'douze', 13: 'treize', 14: 'quatorze', 15: 'quinze',
    16: 'seize', 17: 'dix-sept', 18: 'dix-huit', 19: 'dix-neuf', 20: 'vingt'
};
let currentNumber = 0;
let answeredNumbers = [];

document.getElementById('start-btn').addEventListener('click', () => {
    answeredNumbers = [];
    generateRandomNumber();
});

function generateRandomNumber() {
    if (answeredNumbers.length === 20) {
        document.getElementById('number-display').innerText = "All Done!";
        return;
    }

    do {
        currentNumber = Math.floor(Math.random() * 20) + 1;
    } while (answeredNumbers.includes(currentNumber));

    document.getElementById('number-display').innerText = frenchNumbers[currentNumber];
}

function checkAnswer(number) {
    if (number === currentNumber) {
        answeredNumbers.push(currentNumber);
        generateRandomNumber();
    } else {
        alert('Incorrect! Try again.');
    }
}

// Generate keyboard keys
const keyboard = document.querySelector('.keyboard');
for (let i = 1; i <= 20; i++) {
    const key = document.createElement('div');
    key.classList.add('key');
    key.innerText = i;
    key.onclick = () => checkAnswer(i);
    keyboard.appendChild(key);
}
