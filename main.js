const gameArea = document.getElementById('gameArea');
const scoreDisplay = document.getElementById('score');
let score = 0;

function spawnBox() {
  const box = document.createElement('div');
  box.classList.add('box');

  const x = Math.random() * (gameArea.clientWidth - 50);
  const y = Math.random() * (gameArea.clientHeight - 50);
  box.style.left = `${x}px`;
  box.style.top = `${y}px`;

  box.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    gameArea.removeChild(box);
  });

  gameArea.appendChild(box);

  // Hapus kotak setelah 2 detik jika tidak diklik
  setTimeout(() => {
    if (gameArea.contains(box)) {
      gameArea.removeChild(box);
    }
  }, 2000);
}

// Munculkan kotak setiap 1.5 detik
setInterval(spawnBox, 1500);
