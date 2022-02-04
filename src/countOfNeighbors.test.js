const countOfNeighbors = require('./countOfNeighbors')

test('top-middle no neighbors', () => {
    const board = [
        [false, true, false],
        [false, false, false],
        [false, false, false]]
    ;
    const currentPosition = { i:0, j:1 };
    expect(countOfNeighbors(board, currentPosition)).toEqual(0);
});

test('top-middle 2 neighbors', () => {
    const board = [
        [false, true, false],
        [true, true, false],
        [false, false, false]]
    ;

    const currentPosition = { i:0, j:1 };
    expect(countOfNeighbors(board, currentPosition)).toEqual(2);
});

test('top-middle 8 neighbors', () => {
    const board = [
        [true, true, true],
        [true, true, true],
        [true, true, true]]
    ;

    const currentPosition = { i:0, j:1 };
    expect(countOfNeighbors(board, currentPosition)).toEqual(8);
});

test('top-left-corner no neighbors', () => {
    const board = [
        [true, false, false],
        [false, false, false],
        [false, false, false]]
    ;
    const currentPosition = { i:0, j:0 };
    expect(countOfNeighbors(board, currentPosition)).toEqual(0);
});

test('top-left-corner 2 neighbors', () => {
    const board = [
        [true, true, false],
        [false, false, false],
        [true, false, false]]
    ;

    const currentPosition = { i:0, j:0 };
    expect(countOfNeighbors(board, currentPosition)).toEqual(2);
});

test('top-left-corner 8 neighbors', () => {
    const board = [
        [true, true, true],
        [true, true, true],
        [true, true, true]]
    ;

    const currentPosition = { i:0, j:0 };
    expect(countOfNeighbors(board, currentPosition)).toEqual(8);
});
