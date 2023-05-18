// Tic Tac Toe Game

      // Board representation
      let board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ];

      // Current player
      let currentPlayer = 'X';

      // Scores
      let player1Score = 0;
      let player2Score = 0;

      // Function to check for a winner
      function checkWinner() {
        // Check rows
        for (let i = 0; i < 3; i++) {
          if (
            board[i][0] !== '' &&
            board[i][0] === board[i][1] &&
            board[i][1] === board[i][2]
          ) {
            return board[i][0];
          }
        }

        // Check columns
        for (let j = 0; j < 3; j++) {
          if (
            board[0][j] !== '' &&
            board[0][j] === board[1][j] &&
            board[1][j] === board[2][j]
          ) {
            return board[0][j];
          }
        }

        // Check diagonals
        if (
          board[0][0] !== '' &&
          board[0][0] === board[1][1] &&
          board[1][1] === board[2][2]
        ) {
          return board[0][0];
        }
        if (
          board[0][2] !== '' &&
          board[0][2] === board[1][1] &&
          board[1][1] === board[2][0]
        ) {
          return board[0][2];
        }

        // No winner
        return null;
      }

      // Function to handle a player's move
      function makeMove(row, col) {
        // Check if the move is valid
        if (board[row][col] === '') {
          // Update the board
          board[row][col] = currentPlayer;

          // Check for a winner
          const winner = checkWinner();
          if (winner) {
            updateScore(winner);
            displayWinGif(winner);
            resetGame();
            return;
          }

          // Check for a tie
          if (isBoardFull()) {
            resetGame();
            return;
          }

          // Switch players
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

          // Display the updated board
          displayBoard();
        }
      }

      // Function to reset the game
      function resetGame() {
        // Clear the board
        board = [
          ['', '', ''],
          ['', '', ''],
          ['', '', '']
        ];

        // Display the initial board
        displayBoard();
      }

      // Function to check if the board is full
      function isBoardFull() {
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
              return false;
            }
          }
        }
        return true;
      }

      // Function to display the board
      function displayBoard() {
        const boardContainer = document.getElementById('board');
        boardContainer.innerHTML = '';

        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.textContent = board[i][j];
            cell.addEventListener('click', function () {
              makeMove(i, j);
            });
            boardContainer.appendChild(cell);
          }
        }
      }

      // Function to update the score
      function updateScore(winner) {
        if (winner === 'X') {
          player1Score++;
          document.getElementById('player1Score').textContent =
            'Player 1: ' + player1Score;
        } else if (winner === 'O') {
          player2Score++;
          document.getElementById('player2Score').textContent =
            'Player 2: ' + player2Score;
        }
      }
      resetGame();
