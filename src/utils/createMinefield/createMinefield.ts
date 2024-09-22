interface ICreateBoard {
  rows: number;
  columns: number;
}

const createBoard = ({rows, columns}: ICreateBoard) => {
  return Array(rows).fill(0).map((_, row) => {
    return Array(columns).fill(0).map((_, column) => {
      return {
        row,
        column,
        opened: false,
        flagged: false,
        mined: false,
        exploded: false,
        nearMines: 0,
      };
    });
  });
};

interface ISpreadMines {
  board: any[][];
  minesAmount: number;
}

const spreadMines = ({board, minesAmount}: ISpreadMines) => {
  const rows = board.length;
  const columns = board[0].length;
  let minesPlanted = 0;

  while (minesPlanted < minesAmount) {
    const rowSel = Math.floor(Math.random() * rows);
    const columnSel = Math.floor(Math.random() * columns);

    if (!board[rowSel][columnSel].mined) {
      board[rowSel][columnSel].mined = true;
      minesPlanted++;
    }
  }
};

interface ICreateMinefield {
  rows: number;
  columns: number;
  minesAmount: number;
}

const createMinefield = ({rows, columns, minesAmount}: ICreateMinefield) => {
  const board = createBoard({rows, columns});
  spreadMines({board, minesAmount});
  return board;
};

export default createMinefield;
