const cells = document.querySelectorAll(".cell");

cells.forEach((cell) =>
  cell.addEventListener("click", () => {
    newPlayer.addMark(cell, cell.dataset.index);
  })
);

const gameBoard = (function () {
  const gameboard = ["", "", "", "", "", "", "", "", ""];

  return {
    updateBoard(content = "", index) {
      if (content === "") {
        return gameboard;
      }

      gameboard[index] = content;

      return gameboard;
    },
  };
})();

const player = (mark) => {
  return {
    addMark(cell, index) {
      if (gameBoard.updateBoard("", index)[index] !== "") return;

      const state = gameBoard.updateBoard(mark, index);
      cell.textContent = state[index];
    },
  };
};

const newPlayer = player("X");
