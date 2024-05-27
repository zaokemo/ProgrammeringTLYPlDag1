document.addEventListener('DOMContentLoaded', () => {
  const fruitContainer = document.getElementById('fruitContainer');
  const resultDisplay = document.getElementById('result');
  const bonusText = document.getElementById('bonusText');
  let totalPoints = 0; // Initialize total points
const spinSound = new Audio('assets/audio/spin_sound.ogg');

  function spin() {
    fruitContainer.innerHTML = ''; // Clear previous fruits
    const fruits = ['🍓', '🍇', '🍍', '🍊', '🍉', '🍌', '👑']; // Emojis representing fruits
    const selectedFruits = [];

    // Play the spin sound
    spinSound.play();

    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * fruits.length);
      const fruit = fruits[randomIndex];
      selectedFruits.push(fruit);
      const fruitBox = document.createElement('div');
      fruitBox.classList.add('fruitBox');
      fruitBox.textContent = fruit; // Set emoji as text content
      fruitContainer.appendChild(fruitBox);
    }

    const { points, winMessage } = checkResult(selectedFruits);
    totalPoints += points; // Update total points
    resultDisplay.textContent = winMessage;
    bonusText.textContent = `Total Points: ${totalPoints}`;
  }

  function checkResult(selectedFruits) {
    let points = 0;
    const winMessage = selectedFruits.reduce((message, fruit) => {
      switch (fruit) {
        case '🍓':
          points += 10;
          return `${message} + 10 points`;
        case '🍇':
          points += 20;
          return `${message} + 20 points`;
        case '🍍':
          points += 30;
          return `${message} + 30 points`;
        case '🍊':
          points += 40;
          return `${message} + 40 points`;
        case '🍉':
          points += 50;
          return `${message} + 50 points`;
        case '🍌':
          points += 120;
          return `${message} + 120 points`;
        case '👑':
          points += 200;
          return `${message} + 200 points (Bonus)`;
        default:
          return message;
      }
    }, '');

    return { points, winMessage };
  }

  const spinButton = document.getElementById('spinButton');
  spinButton.addEventListener('click', spin);
});
