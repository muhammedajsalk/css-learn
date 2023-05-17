
  // JavaScript code for game logic

// Initialize game variables and objects
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
let snake = [{x: 150, y: 150}, {x: 140, y: 150}, {x: 130, y: 150}, {x: 120, y: 150}, {x: 110, y: 150}];
let dx = 10;
let dy = 0;
let food = {x: Math.floor(Math.random() * (canvas.width - 10)), y: Math.floor(Math.random() * (canvas.height - 10))};

// Function to draw the snake on the canvas
function drawSnake() {
  snake.forEach(segment => {
    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'darkgreen';
    ctx.fillRect(segment.x, segment.y, 10, 10);
    ctx.strokeRect(segment.x, segment.y, 10, 10);
  });
}

// Function to draw the food on the canvas
function drawFood() {
  ctx.fillStyle = 'red';
  ctx.strokeStyle = 'darkred';
  ctx.fillRect(food.x, food.y, 10, 10);
  ctx.strokeRect(food.x, food.y, 10, 10);
}

// Function to advance the snake by one segment
function advanceSnake() {
  const head = {x: snake[0].x + dx, y: snake[0].y + dy};
  snake.unshift(head);
  const didEatFood = snake[0].x === food.x && snake[0].y === food.y;
  if (didEatFood) {
    // Generate new food location
    food = {x: Math.floor(Math.random() * (canvas.width - 10)), y: Math.floor(Math.random() * (canvas.height - 10))};
  } else {
    // Remove tail segment
    snake.pop();
  }
}

