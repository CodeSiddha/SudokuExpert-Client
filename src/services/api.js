export const REST = {
  getBoard: function () {
    return fetch(`https://sudoku-expert.herokuapp.com/puzzle`);
  },
  solveBoard: function (grid) {
    const data = {
      board: grid,
    };

    return fetch(`https://sudoku-expert.herokuapp.com/solve`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
  validateBoard: function (grid) {
    const data = {
      board: grid,
    };
    return fetch(`https://sudoku-expert.herokuapp.com/validate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
};
