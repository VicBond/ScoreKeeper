const p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#pingpong1') 
}
const p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#pingpong2') 
}

const resetButton = document.querySelector('#resetButton');
const maxScore = document.querySelector('#maxScore');

let topScore = 5;
let isGameOver = false;

function updateScores(player, opponent) {
  if(!isGameOver) {
    player.score++;
      if(player.score === topScore) {
        isGameOver = true;
        player.display.classList.add('winner');
        opponent.display.classList.add('loser');
        player.button.disabled = true;
        opponent.button.disabled = true;
      }
    player.display.textContent = player.score;
  };
}

p1.button.addEventListener('click', () => {
  updateScores(p1,p2)
});

p2.button.addEventListener('click', () => {
  updateScores(p2,p1)
});

resetButton.addEventListener('click', reset);

maxScore.addEventListener('change', () => {
  topScore = parseInt(maxScore.value);
  reset();
});

function reset () {
  isGameOver = false;

  for(let p of [p1, p2]) {
    p.display.textContent = 0;
    p.score = 0;
    p.display.classList.remove('winner', 'loser');
    p.button.disabled = false;
  }



  // p1.display.textContent = 0;
  // p2.display.textContent = 0;
  // p1.score = 0;
  // p2.score = 0;
  // p1.display.classList.remove('winner', 'loser');
  // p2.display.classList.remove('loser', 'winner');
  // p1.button.disabled = false;
  // p2.button.disabled = false;
};