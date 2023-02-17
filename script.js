console.log("Hello");

let titleDiv = document.getElementById("title");

console.log("before:", titleDiv.innerText);

let message = "Square color counter";

titleDiv.innerText = message;

console.log("after:", titleDiv.innerText);

titleDiv.innerHTML = `<p>${message}</p>`;

titleDiv.style.backgroundColor = "grey";

let redDiv = document.getElementById("red");
let yellowDiv = document.getElementById("yellow");
let greenDiv = document.getElementById("green");

// redDiv.onclick = () => {
//   console.log('User choose: Rock')
//   // getComputerChoice let say 'paper'
//   // userChoice vs. computerChoice what is the result
//   // if lost -1 , draw 0 , win 1
//   // show everything on the screen (DOM)
// }
// yellowDiv.onclick = () => console.log('you clicked yellow')

// greenDiv.onclick = () => console.log('you clicked green')


const squares = document.querySelectorAll(".colorSquare");
// console.log(squares)

// console.log(squares[0].value)
// console.log(squares[1].value)
// console.log(squares[2].value)

// forEach

const timesClicked = { red: 0, yellow: 0, green: 0, blue: 0 };
squares.forEach((square) => {
  square.onclick = () => {
    timesClicked[square.value] += 1;
    square.innerText = timesClicked[square.value];
    // console.log(square.value)
  };
});

function clearScores() {
  timesClicked.red = 0;
  timesClicked.yellow = 0;
  timesClicked.green = 0;
  squares.forEach((square) => {
    square.innerText = "";
  });
}

const clearGameBtn = document.getElementById("reset-game");
clearGameBtn.onclick = () => clearScores();
