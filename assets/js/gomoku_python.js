const pythonBoardElement = document.getElementById("gomoku-python-board");
const pythonStatusElement = document.getElementById("gomoku-python-status");
const pythonResetButton = document.getElementById("gomoku-python-reset");

if (pythonBoardElement && pythonStatusElement && pythonResetButton) {
  const size = 15;
  let pyodideReady = null;

  async function initPythonGame() {
    pythonStatusElement.textContent = "Loading Python engine...";

    try {
      const pyodide = await loadPyodide();
      const response = await fetch(pythonBoardElement.dataset.pythonSrc);
      const source = await response.text();

      pyodide.runPython(source);
      pyodideReady = pyodide;

      renderState(getState());
    } catch (error) {
      pythonStatusElement.textContent = "Python engine failed to load.";
      console.error(error);
    }
  }

  function getState() {
    const state = pyodideReady.globals.get("game").get_state().toJs({
      dict_converter: Object.fromEntries,
    });
    state.board = state.board.map((row) => Array.from(row));
    return state;
  }

  function playMove(row, col) {
    const state = pyodideReady.globals.get("game").play(row, col).toJs({
      dict_converter: Object.fromEntries,
    });
    state.board = state.board.map((currentRow) => Array.from(currentRow));
    return state;
  }

  function resetGame() {
    const state = pyodideReady.globals.get("game").reset().toJs({
      dict_converter: Object.fromEntries,
    });
    state.board = state.board.map((row) => Array.from(row));
    return state;
  }

  function renderState(state) {
    pythonStatusElement.textContent = state.status;
    pythonBoardElement.innerHTML = "";

    for (let row = 0; row < size; row += 1) {
      for (let col = 0; col < size; col += 1) {
        const cell = document.createElement("button");
        cell.type = "button";
        cell.className = "gomoku-cell";
        cell.dataset.row = String(row);
        cell.dataset.col = String(col);
        cell.setAttribute("aria-label", `Row ${row + 1}, column ${col + 1}`);

        const stone = state.board[row][col];
        if (stone) {
          cell.classList.add(`is-${stone}`);
        }

        if (!state.winner && !stone) {
          cell.addEventListener("click", handleMove);
        } else {
          cell.disabled = true;
        }

        pythonBoardElement.appendChild(cell);
      }
    }
  }

  function handleMove(event) {
    if (!pyodideReady) return;

    const row = Number(event.currentTarget.dataset.row);
    const col = Number(event.currentTarget.dataset.col);
    renderState(playMove(row, col));
  }

  pythonResetButton.addEventListener("click", () => {
    if (!pyodideReady) return;
    renderState(resetGame());
  });

  initPythonGame();
}
