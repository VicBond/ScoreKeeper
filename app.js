const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');

let p1Score = 0;
let p2Score = 0;

p1Button.addEventListener('click', () => {
  console.log('You clicked p1');
  p1Score++;
  console.log(p1Score);
});
p2Button.addEventListener('click', () => {
  console.log('You clicked p2');
  p2Score++;
  console.log(p2Score);
});
