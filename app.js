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
// const p1Button = document.querySelector('#p1Button');
// const p2Button = document.querySelector('#p2Button');
// const pingpong1 = document.querySelector('#pingpong1');
// const pingpong2 = document.querySelector('#pingpong2');
const resetButton = document.querySelector('#resetButton');
const maxScore = document.querySelector('#maxScore');

// let p1Score = 0;
// let p2Score = 0;
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

p1Button.addEventListener('click', () => {
  updateScores(p1,p2)
  // console.log('You clicked p1');
  // if(!isGameOver) {
  //   p1Score++;
  //     if(p1Score === topScore) {
  //       isGameOver = true;
  //       pingpong1.classList.add('winner');
  //       pingpong2.classList.add('loser');
  //       p1Button.disabled = true;
  //       p2Button.disabled = true;
  //     }
  //   pingpong1.textContent = p1Score;
  // };
  // console.log(p1Score);
});

p2Button.addEventListener('click', () => {
  updateScores(p2,p1)
  // console.log('You clicked p2');
  // if(!isGameOver) {
  //   p2Score++;
  //     if(p2Score === topScore) {
  //       isGameOver = true;
  //       pingpong2.classList.add('winner');
  //       pingpong1.classList.add('loser');
  //       p1Button.disabled = true;
  //       p2Button.disabled = true;
  //     }
  //   pingpong2.textContent = p2Score;
  // };
  // console.log(p2Score);
});

resetButton.addEventListener('click', reset);

maxScore.addEventListener('change', () => {
  topScore = parseInt(maxScore.value);
  reset();
});

function reset () {
  pingpong1.textContent = 0;
  pingpong2.textContent = 0;
  p1Score = 0;
  p2Score = 0;
  isGameOver = false;
  pingpong1.classList.remove('winner', 'loser');
  pingpong2.classList.remove('loser', 'winner');
  pingpong1.disabled = false;
  pingpong2.disabled = false;
};