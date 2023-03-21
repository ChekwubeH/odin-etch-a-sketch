let color = 'black';
let click = false;

function createSketchBoard(size) {
  let board = document.querySelector('.board');
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numOfSquareDivs = size * size;
  for (let i = 0; i < numOfSquareDivs; i++) {
    let squareDiv = document.createElement('div');
    squareDiv.className = 'square';
    squareDiv.addEventListener('mouseover', colorSquare);
    board.insertAdjacentElement('beforeend', squareDiv);
  }
}

createSketchBoard(16);

document.querySelector('body').addEventListener('click', (e) => {
  if (e.target.tagName != 'BUTTON') {
    click = !click;
    let mode = document.querySelector('#mode');
    if (click) {
      mode.textContent = 'Mode: Drawing';
    }
    else {
      mode.textContent = 'Mode: Not Drawing';
    }
  }
})

function colorSquare() {
  if (click) {
    if (color == 'random') {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else {
      this.style.backgroundColor = color;
    }
  }
}

function setColor(colorChoice) {
  color = colorChoice;
}

function getGridSize() {
  let gridSize = prompt('What is the size of grid? ');

  if (gridSize >= 0 && gridSize <= 100) {
    document.getElementById('message').innerHTML = 'You can PLAY!';
    createSketchBoard(gridSize);
  }
  else {
    document.getElementById('message').innerHTML = 'Please enter number between 1 and 100';
  }
}

const gridSizeBtn = document.getElementById('grid-size');
gridSizeBtn.addEventListener('click', getGridSize);

function resetBoard() {
  let squareDivs = document.querySelectorAll('div');
  squareDivs.forEach((squareDiv) => squareDiv.style.backgroundColor = 'white');
}
