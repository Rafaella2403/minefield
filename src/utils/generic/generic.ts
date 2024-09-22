const cloneBoard = (board: any[][]) => {
  return board.map((rows) => {
    return rows.map((field) => {
      return { ...field };
    });
  });
};

const getNeighbors = (board: any[][], row: number, column: number) => {
  const neighbors: any[] = [];
  const rows = [row - 1, row, row + 1];
  const columns = [column - 1, column, column + 1];
  rows.forEach((r) => {
    columns.forEach((c) => {
      const different = r !== row || c !== column;
      const validRow = r >= 0 && r < board.length;
      const validColumn = c >= 0 && c < board[0].length;
      if (different && validRow && validColumn) {
        neighbors.push(board[r][c]);
      }
    });
  });
  return neighbors;
};

const safeNeighborhood = (board: any[][], row: number, column: number) => {
  const safes = (result: any, neighbor: any) => result && !neighbor.mined;
  return getNeighbors(board, row, column).reduce(safes, true);
};

const openField = (board: any[][], row: number, column: number) => {
  const field = board[row][column];
  if (!field.opened) {
    field.opened = true;
    if (field.mined) {
      field.exploded = true;
    } else if (safeNeighborhood(board, row, column)) {
      getNeighbors(board, row, column).forEach((n) => openField(board, n.row, n.column));
    } else {
      const neighbors = getNeighbors(board, row, column);
      field.nearMines = neighbors.filter((n) => n.mined).length;
    }
  }
};

const fields = (board: any[][]): any[] => ([] as any[]).concat(...board);

const hadExplosion = (board: any[][]) => fields(board).filter((field) => field.exploded).length > 0;

const pendding = (field: any) => (field.mined && !field.flagged) || (!field.mined && !field.opened);

const wonGame = (board: any[][]) => fields(board).filter(pendding).length === 0;

const showMines = (board: any[][]) => {
  fields(board).filter((field) => field.mined).forEach((field) => {
    field.opened = true;
  });
};

export {
  cloneBoard,
  getNeighbors,
  safeNeighborhood,
  openField,
  hadExplosion,
  wonGame,
  showMines,
};
