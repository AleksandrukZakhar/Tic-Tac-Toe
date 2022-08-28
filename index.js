const cells = document.querySelectorAll(".cell");

const game = (function () {
  return {
    startGame() {
      let firstPlayerClicked = false;

      cells.forEach((cell) =>
        cell.addEventListener("click", () => {
          if (!firstPlayerClicked) {
            player.addMark("X", cell, cell.dataset.index);
            firstPlayerClicked = true;
          } else {
            player.addMark("O", cell, cell.dataset.index);
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

const showDisplay = function (text) {
  const display = document.querySelector(".display");

  display.textContent = text;
  display.classList.replace("hide", "show");

  setTimeout(() => {
    display.textContent = "";
    display.classList.replace("show", "hide");
  }, [2000]);
};

const clearBoard = function () {
  for (let i = 0; i < gameBoard.getBoard().length - 1; i++) {
    gameBoard.setBoard("", i);
  }

  cells.forEach((cell) => {
    cell.textContent = gameBoard.getBoard()[cell.dataset.index];
  });

  firstPlayerClicked = false;
};

const player = (function () {
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
        showDisplay(`${mark} won`);
        clearBoard();

        return;
      } else if (
        gameBoard.getBoard()[3] === mark &&
        gameBoard.getBoard()[4] === mark &&
        gameBoard.getBoard()[5] === mark
      ) {
        showDisplay(`${mark} won`);
        clearBoard();

        return;
      } else if (
        gameBoard.getBoard()[6] === mark &&
        gameBoard.getBoard()[7] === mark &&
        gameBoard.getBoard()[8] === mark
      ) {
        showDisplay(`${mark} won`);
        clearBoard();

        return;
      } else if (
        gameBoard.getBoard()[0] === mark &&
        gameBoard.getBoard()[4] === mark &&
        gameBoard.getBoard()[8] === mark
      ) {
        showDisplay(`${mark} won`);
        clearBoard();

        return;
      } else if (
        gameBoard.getBoard()[2] === mark &&
        gameBoard.getBoard()[4] === mark &&
        gameBoard.getBoard()[6] === mark
      ) {
        showDisplay(`${mark} won`);
        clearBoard();

        return;
      } else if (
        gameBoard.getBoard()[1] === mark &&
        gameBoard.getBoard()[4] === mark &&
        gameBoard.getBoard()[7] === mark
      ) {
        showDisplay(`${mark} won`);
        clearBoard();

        return;
      } else if (
        gameBoard.getBoard()[0] === mark &&
        gameBoard.getBoard()[3] === mark &&
        gameBoard.getBoard()[6] === mark
      ) {
        showDisplay(`${mark} won`);
        clearBoard();

        return;
      } else if (
        gameBoard.getBoard()[2] === mark &&
        gameBoard.getBoard()[5] === mark &&
        gameBoard.getBoard()[8] === mark
      ) {
        showDisplay(`${mark} won`);
        clearBoard();

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
        showDisplay("Tie");
        clearBoard();

        return;
      }
    },
  };
})();

game.startGame();
