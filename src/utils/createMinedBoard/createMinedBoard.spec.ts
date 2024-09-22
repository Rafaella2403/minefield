import createMinedBoard from './createMinedBoard';

describe('createMinedBoard utility function', () => {
	test('should create a board with the correct dimensions', () => {
		const rows = 5;
		const columns = 5;
		const minesAmount = 5;
		const board = createMinedBoard({ rows, columns, minesAmount });

		expect(board.length).toBe(rows);
		expect(board[0].length).toBe(columns);
	});

	test('should plant the correct number of mines', () => {
		const rows = 5;
		const columns = 5;
		const minesAmount = 5;
		const board = createMinedBoard({ rows, columns, minesAmount });

		const minesCount = board.flat().filter(cell => cell.mined).length;
		expect(minesCount).toBe(minesAmount);
	});

	test('should not plant more mines than the number of cells', () => {
		const rows = 2;
		const columns = 2;
		const minesAmount = 10;
		const board = createMinedBoard({ rows, columns, minesAmount });

		const minesCount = board.flat().filter(cell => cell.mined).length;
		expect(minesCount).toBe(rows * columns);
	});

	test('should initialize all cells with correct properties', () => {
		const rows = 3;
		const columns = 3;
		const minesAmount = 3;
		const board = createMinedBoard({ rows, columns, minesAmount });

		board.flat().forEach(cell => {
			expect(cell).toHaveProperty('row');
			expect(cell).toHaveProperty('column');
			expect(cell).toHaveProperty('opened', false);
			expect(cell).toHaveProperty('flagged', false);
			expect(cell).toHaveProperty('mined', expect.any(Boolean));
			expect(cell).toHaveProperty('exploded', false);
			expect(cell).toHaveProperty('nearMines', 0);
		});
	});
});
