const countNeighbors = require('./countNeighbors')

const myArray = [[false, true, false], [true, true, false], [false, false, true]];

test('in the myArray, element [1][1] has 6 neighbors', () => {
    expect(countNeighbors(myArray)).toEqual([[4, 3, 4], [3, 3, 4], [4, 4, 3]]);
});