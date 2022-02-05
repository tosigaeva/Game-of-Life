const countNeighbors = require('./countNeighbors')

test('1', () => {
    const myArray = [
        [false, true, false],
        [true, true, false],
        [false, false, true]];
    expect(countNeighbors(myArray)).toEqual([
        [false, true, false],
        [true, true, false],
        [false, false, true]]);
});

test('2', () => {
    const  myArray = [
        [true, false, false],
        [false, true, false],
        [false, false, true]];
    expect(countNeighbors(myArray)).toEqual([
        [true, true, true],
        [true, true, true],
        [true, true, true]]);
});

test('3', () => {
    const  myArray = [
        [false, false, false],
        [false, true, false],
        [false, false, false]];
    expect(countNeighbors(myArray)).toEqual([
        [false, false, false],
        [false, false, false],
        [false, false, false]]);
});

test('4', () => {
    const  myArray = [
        [false, false, false],
        [false, true, false],
        [false, false, false],
        [false, true, false]];
    expect(countNeighbors(myArray)).toEqual([
        [false, false, false],
        [false, false, false],
        [false, false, false],
        [false, false, false]]);
});

test('4', () => {
    const  myArray = [
        [false, false],
        [false, true]
    ];
    expect(countNeighbors(myArray)).toEqual([
        [false, false],
        [false, false]
    ]);
});

test('5', () => {
    const  myArray = [
        [false]
    ];
    expect(countNeighbors(myArray)).toEqual([
        [false]
    ]);
});
