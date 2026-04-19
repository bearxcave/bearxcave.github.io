const boardElement = document.getElementById("gomoku-board");
const statusElement = document.getElementById("gomoku-status");
const resetButton = document.getElementById("gomoku-reset");

if (boardElement && statusElement && resetButton) {
  const size = 15;
  let currentPlayer = "black";
  let winner = null;
  let board = createBoard();

  function createBoard() {
    return Array.from({ length: size }, () => Array(size).fill(null));
  }

  function renderBoard() {
    boardElement.innerHTML = "";

    for (let row = 0; row < size; row += 1) {
      for (let col = 0; col < size; col += 1) {
        const cell = document.createElement("button");
        cell.type = "button";
        cell.className = "gomoku-cell";
        cell.dataset.row = String(row);
        cell.dataset.col = String(col);
        cell.setAttribute("aria-label", `Row ${row + 1}, column ${col + 1}`);

        const stone = board[row][col];
        if (stone) {
          cell.classList.add(`is-${stone}`);
        }

        cell.addEventListener("click", handleMove);
        boardElement.appendChild(cell);
      }
    }
  }

  function handleMove(event) {
    if (winner) return;

    const row = Number(event.currentTarget.dataset.row);
    const col = Number(event.currentTarget.dataset.col);

    if (board[row][col]) return;

    board[row][col] = currentPlayer;

    if (hasFiveInRow(row, col, currentPlayer)) {
      winner = currentPlayer;
      statusElement.textContent = `${capitalize(currentPlayer)} wins.`;
    } else if (isBoardFull()) {
      winner = "draw";
      statusElement.textContent = "Draw.";
    } else {
      currentPlayer = currentPlayer === "black" ? "white" : "black";
      statusElement.textContent = `${capitalize(currentPlayer)} to move.`;
    }

    renderBoard();
  }

  function hasFiveInRow(row, col, player) {
    const directions = [
      [1, 0],
      [0, 1],
      [1, 1],
      [1, -1],
    ];

    return directions.some(([dx, dy]) => {
      let count = 1;
      count += countDirection(row, col, dx, dy, player);
      count += countDirection(row, col, -dx, -dy, player);
      return count >= 5;
    });
  }

  function countDirection(row, col, dx, dy, player) {
    let count = 0;
    let nextRow = row + dx;
    let nextCol = col + dy;

    while (
      nextRow >= 0 &&
      nextRow < size &&
      nextCol >= 0 &&
      nextCol < size &&
      board[nextRow][nextCol] === player
    ) {
      count += 1;
      nextRow += dx;
      nextCol += dy;
    }

    return count;
  }

  function isBoardFull() {
    return board.every((row) => row.every(Boolean));
  }

  function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  resetButton.addEventListener("click", () => {
    board = createBoard();
    currentPlayer = "black";
    winner = null;
    statusElement.textContent = "Black to move.";
    renderBoard();
  });

  renderBoard();
}
