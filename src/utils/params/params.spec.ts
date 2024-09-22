import { Dimensions } from 'react-native';

import params from './params';

jest.mock('react-native', () => ({
  Dimensions: {
    get: jest.fn(),
  },
}));

const mockedDimensions = Dimensions as jest.Mocked<typeof Dimensions>;

describe('params utility functions', () => {
  beforeEach(() => {
    mockedDimensions.get.mockReturnValue({ width: 300, height: 600, scale: 1, fontScale: 1 });
  });

  test('getColumnsAmount should return correct number of columns', () => {
    const columns = params.getColumnsAmount();
    expect(columns).toBe(Math.floor(300 / params.blockSize));
  });

  test('getRowsAmount should return correct number of rows', () => {
    const rows = params.getRowsAmount();
    const boardHeight = 600 * (1 - params.headerRatio);
    expect(rows).toBe(Math.floor(boardHeight / params.blockSize));
  });
});
