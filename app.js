const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const pingpong1 = document.querySelector('#pingpong1');
const pingpong2 = document.querySelector('#pingpong2');
const resetButton = document.querySelector('#resetButton');
const maxScore = document.querySelector('#maxScore');

let p1Score = 0;
let p2Score = 0;
let topScore = 5;
let isGameOver = false;

p1Button.addEventListener('click', () => {
  // console.log('You clicked p1');
  if(!isGameOver) {
    p1Score++;
      if(p1Score === topScore) {
        isGameOver = true;
      }
    pingpong1.textContent = p1Score;
  };
  // console.log(p1Score);
});

p2Button.addEventListener('click', () => {
  // console.log('You clicked p2');
  if(!isGameOver) {
    p2Score++;
      if(p2Score === topScore) {
        isGameOver = true;
      }
    pingpong2.textContent = p2Score;
  };
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
}