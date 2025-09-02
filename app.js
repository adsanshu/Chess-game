// Initialize chess.js
var game = new Chess();

// Initialize chessboard.js
var board = Chessboard('board', {
  draggable: true,
  position: 'start',
  onDrop: handleMove
});

// Function to handle moves
function handleMove(source, target) {
  var move = game.move({
    from: source,
    to: target,
    promotion: 'q' // Always promote to queen
  });

  if (move === null) return 'snapback'; // Invalid move

  // Update board after valid move
  window.setTimeout(makeBestMove, 250);
}

// Simple AI (random move)
function makeBestMove() {
  if (game.game_over()) {
    alert("Game Over!");
    return;
  }

  var possibleMoves = game.moves();
  var randomIdx = Math.floor(Math.random() * possibleMoves.length);
  var move = possibleMoves[randomIdx];
  game.move(move);
  board.position(game.fen());
}
