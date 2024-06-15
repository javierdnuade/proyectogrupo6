document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById('startGame');
    const gameArea = document.getElementById('gameArea');
    const scoreDisplay = document.getElementById('score');
    let score = 0;
    let gameInterval;

    const healthyFoods = ['🍎', '🥕', '🥦', '🍉', '🍓', '🍒', '🍇', '🍌', '🍍', '🥭', '🥑', '🥬', '🥗', '🍅'];
    const unhealthyFoods = ['🍔', '🍟', '🍩', '🍕', '🌭', '🍰', '🍫', '🍬', '🍨', '🍹'];

    startButton.addEventListener('click', startGame);

    function startGame() {
        score = 0;
        scoreDisplay.textContent = score;
        gameArea.innerHTML = ''; 

        gameInterval = setInterval(() => {
            const foodItem = document.createElement('div');
            foodItem.classList.add('food-item');
            foodItem.textContent = Math.random() > 0.5 ? healthyFoods[Math.floor(Math.random() * healthyFoods.length)] : unhealthyFoods[Math.floor(Math.random() * unhealthyFoods.length)];
            foodItem.style.left = Math.random() * (gameArea.offsetWidth - 70) + 'px'; 
            foodItem.style.top = Math.random() * (gameArea.offsetHeight - 70) + 'px';
            gameArea.appendChild(foodItem);

            foodItem.addEventListener('click', () => {
                if (healthyFoods.includes(foodItem.textContent)) {
                    score += 10;
                } else {
                    score -= 5;
                }
                scoreDisplay.textContent = score;
                gameArea.removeChild(foodItem);
            });

            setTimeout(() => {
                if (gameArea.contains(foodItem)) {
                    gameArea.removeChild(foodItem);
                }
            }, 2000);
        }, 1000);

        setTimeout(endGame, 30000);
    }

    function endGame() {
        clearInterval(gameInterval);
        alert(`¡El juego ha terminado! Tu puntuación es: ${score}`);
    }
});
