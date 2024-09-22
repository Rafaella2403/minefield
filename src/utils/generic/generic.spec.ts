import { cloneBoard, getNeighbors, safeNeighborhood, openField, hadExplosion, wonGame, showMines } from './generic';

describe('Minefield Utils', () => {
  const board = [
    [{ mined: false, opened: false, flagged: false, row: 0, column: 0 }, { mined: true, opened: false, flagged: false, row: 0, column: 1 }],
    [{ mined: false, opened: false, flagged: false, row: 1, column: 0 }, { mined: false, opened: false, flagged: false, row: 1, column: 1 }],
  ];

  test('cloneBoard should create a deep copy of the board', () => {
    const clonedBoard = cloneBoard(board);
    expect(clonedBoard).toEqual(board);
    expect(clonedBoard).not.toBe(board);
    expect(clonedBoard[0][0]).not.toBe(board[0][0]);
  });

  test('getNeighbors should return the correct neighbors', () => {
    const neighbors = getNeighbors(board, 0, 0);
    expect(neighbors).toEqual([board[0][1], board[1][0], board[1][1]]);
  });

  test('safeNeighborhood should return true if all neighbors are safe', () => {
    expect(safeNeighborhood(board, 1, 1)).toBe(false);
    expect(safeNeighborhood(board, 1, 0)).toBe(true);
  });

  test('openField should open the field and propagate if safe', () => {
    const testBoard = cloneBoard(board);
    openField(testBoard, 1, 0);
    expect(testBoard[1][0].opened).toBe(true);
    expect(testBoard[1][1].opened).toBe(true);
  });

  test('hadExplosion should return true if any field exploded', () => {
    const testBoard = cloneBoard(board);
    openField(testBoard, 0, 1);
    expect(hadExplosion(testBoard)).toBe(true);
  });

  test('wonGame should return true if all non-mined fields are opened and all mined fields are flagged', () => {
    const testBoard = cloneBoard(board);
    testBoard[0][0].opened = true;
    testBoard[1][0].opened = true;
    testBoard[1][1].opened = true;
    testBoard[0][1].flagged = true;
    expect(wonGame(testBoard)).toBe(true);
  });

  test('showMines should open all mined fields', () => {
    const testBoard = cloneBoard(board);
    showMines(testBoard);
    expect(testBoard[0][1].opened).toBe(true);
  });
});
