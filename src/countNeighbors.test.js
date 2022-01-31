const countNeighbors = require('./countNeighbors')

test('in 3x3 arrray, the cell has 8 neighbors ', () => {
    expect(countNeighbors(3, 3)).toBe(8);
});