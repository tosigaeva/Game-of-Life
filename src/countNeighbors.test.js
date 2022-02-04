const countNeighbors = require('./countNeighbors')

test('check new array', () => {
    const myArray = [[false, true, false], [true, true, false], [false, false, true]];
    expect(countNeighbors(myArray)).toEqual([[false, true, false], [true, true, false], [false, false, true]]);
});

test('check new array', () => {
    const  myArray = [[false, false, false], [false, true, false], [false, false, false]];
    expect(countNeighbors(myArray)).toEqual([[true, true, true], [true, true, true], [true, true, true]]);
});