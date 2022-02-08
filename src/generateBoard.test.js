const generateBoard = require('./generateBoard')

test('1', () => {
    const currentBoard = [
        [false, true, false],
        [true, true, false],
        [false, false, true]];
    expect(generateBoard(currentBoard)).toEqual([
        [false, true, false],
        [true, true, false],
        [false, false, true]]);
});

test('2', () => {
    const  currentBoard = [
        [true, false, false],
        [false, true, false],
        [false, false, true]];
    expect(generateBoard(currentBoard)).toEqual([
        [true, true, true],
        [true, true, true],
        [true, true, true]]);
});

test('3', () => {
    const  currentBoard = [
        [false, false, false],
        [false, true, false],
        [false, false, false]];
    expect(generateBoard(currentBoard)).toEqual([
        [false, false, false],
        [false, false, false],
        [false, false, false]]);
});

test('4', () => {
    const  currentBoard = [
        [false, false, false],
        [false, true, false],
        [false, false, false],
        [false, true, false]];
    expect(generateBoard(currentBoard)).toEqual([
        [false, false, false],
        [false, false, false],
        [false, false, false],
        [false, false, false]]);
});

test('4', () => {
    const  currentBoard = [
        [false, false],
        [false, true]
    ];
    expect(generateBoard(currentBoard)).toEqual([
        [false, false],
        [false, false]
    ]);
});

test('5', () => {
    const  currentBoard = [
        [false]
    ];
    expect(generateBoard(currentBoard)).toEqual([
        [false]
    ]);
});
