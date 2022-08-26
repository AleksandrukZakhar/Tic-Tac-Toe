const cells = document.querySelectorAll(".cell");

const game = (function () {
  return {
    startGame() {
      let firstPlayerClicked = false;

      cells.forEach((cell) =>
        cell.addEventListener("click", () => {
          if (!firstPlayerClicked) {
            player().addMark("X", cell, cell.dataset.index);
            firstPlayerClicked = true;
          } else {
            player().addMark("O", cell, cell.dataset.index);
            firstPlayerClicked = false;
          }
        })
      );
    },
  };
})();

const gameBoard = (function () {
  const gameboard = ["", "", "", "", "", "", "", "", ""];

  return {
    getBoard() {
      return gameboard;
    },
    setBoard(content, index) {
      gameboard[index] = content;
    },
  };
})();

const player = () => {
  return {
    addMark(mark, cell, index) {
      if (gameBoard.getBoard()[index] !== "") return;

      gameBoard.setBoard(mark, index);
      cell.textContent = gameBoard.getBoard()[index];

      if (
        gameBoard.getBoard()[0] === mark &&
        gameBoard.getBoard()[1] === mark &&
        gameBoard.getBoard()[2] === mark
      ) {
        console.log(`${mark} won`);

        return;
      } else if (
        gameBoard.getBoard()[3] === mark &&
        gameBoard.getBoard()[4] === mark &&
        gameBoard.getBoard()[5] === mark
      ) {
        console.log(`${mark} won`);

        return;
      } else if (
        gameBoard.getBoard()[6] === mark &&
        gameBoard.getBoard()[7] === mark &&
        gameBoard.getBoard()[8] === mark
      ) {
        console.log(`${mark} won`);

        return;
      } else if (
        gameBoard.getBoard()[0] === mark &&
        gameBoard.getBoard()[4] === mark &&
        gameBoard.getBoard()[8] === mark
      ) {
        console.log(`${mark} won`);

        return;
      } else if (
        gameBoard.getBoard()[2] === mark &&
        gameBoard.getBoard()[4] === mark &&
        gameBoard.getBoard()[6] === mark
      ) {
        console.log(`${mark} won`);

        return;
      } else if (
        gameBoard.getBoard()[1] === mark &&
        gameBoard.getBoard()[4] === mark &&
        gameBoard.getBoard()[7] === mark
      ) {
        console.log(`${mark} won`);

        return;
      } else if (
        gameBoard.getBoard()[0] !== "" &&
        gameBoard.getBoard()[1] !== "" &&
        gameBoard.getBoard()[2] !== "" &&
        gameBoard.getBoard()[3] !== "" &&
        gameBoard.getBoard()[4] !== "" &&
        gameBoard.getBoard()[5] !== "" &&
        gameBoard.getBoard()[6] !== "" &&
        gameBoard.getBoard()[7] !== "" &&
        gameBoard.getBoard()[8] !== ""
      ) {
        console.log("Tie");

        return;
      }
    },
  };
};

game.startGame();
