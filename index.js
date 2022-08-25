const cells = document.querySelectorAll(".cell");

const game = (function () {
  return {
    startGame() {
      const players = [player("X"), player("O")];
      const firstPlayer = players[Math.floor(Math.random() * 2)];
      let secondPlayer = null;

      for (const currPlayer of players) {
        if (player === firstPlayer) {
          continue;
        } else {
          secondPlayer = currPlayer;

          break;
        }
      }

      let firstPlayerClicked = false;

      cells.forEach((cell) =>
        cell.addEventListener("click", () => {
          firstPlayer.addMark(cell, cell.dataset.index);
          firstPlayerClicked = true;

          if (firstPlayerClicked) {
            secondPlayer.addMark(cell, cell.dataset.index);
            firstPlayerClicked = false;
          } else {
            firstPlayer.addMark(cell, cell.dataset.index);
            firstPlayerClicked = true;
          }
        })
      );
    },
  };
})();

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

      const currBoard = gameBoard.updateBoard(mark, index);
      cell.textContent = currBoard[index];

      if (
        currBoard[0] === mark &&
        currBoard[1] === mark &&
        currBoard[2] === mark
      ) {
        console.log("You won");

        return;
      } else if (
        currBoard[3] === mark &&
        currBoard[4] === mark &&
        currBoard[5] === mark
      ) {
        console.log("You won");

        return;
      } else if (
        currBoard[6] === mark &&
        currBoard[7] === mark &&
        currBoard[8] === mark
      ) {
        console.log("You won");

        return;
      } else if (
        currBoard[0] === mark &&
        currBoard[4] === mark &&
        currBoard[8] === mark
      ) {
        console.log("You won");

        return;
      } else if (
        currBoard[2] === mark &&
        currBoard[4] === mark &&
        currBoard[6] === mark
      ) {
        console.log("You won");

        return;
      } else if (
        currBoard[1] === mark &&
        currBoard[4] === mark &&
        currBoard[7] === mark
      ) {
        console.log("You won");

        return;
      } else if (
        currBoard[0] !== "" &&
        currBoard[1] !== "" &&
        currBoard[2] !== "" &&
        currBoard[3] !== "" &&
        currBoard[4] !== "" &&
        currBoard[5] !== "" &&
        currBoard[6] !== "" &&
        currBoard[7] !== "" &&
        currBoard[8] !== ""
      ) {
        console.log("Tie");

        return;
      }
    },
  };
};

game.startGame();
