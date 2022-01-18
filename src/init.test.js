const init = require('./init');

test('0x0 0 active is []', () => {
    expect(init(0, 0)).toStrictEqual([]);
});

test('1x0 0 activ is [1]', () => {
    expect(init(1, 0, 0)).toStrictEqual([{active: false}]);
});

test('1x0 1 active is [1]', () => {
    expect(init(1, 0, 1)).toStrictEqual([{active: true}]);
});

test('0xm is []', () => {
    expect(init(0, 3, 10)).toStrictEqual([]);
});

test('3x0 is [1, 1, 1]', () => {
    expect(init(3, 0)).toStrictEqual([1, 1, 1]);
});

test('1x1 is [[1]]', () => {
    expect(init(1, 1)).toStrictEqual([[1]]);
});


test('5x3 is [[1, 1, 1], [1, 1, 1], [1, 1, 1]...]', () => {
    expect(init(5, 3)).toStrictEqual([[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]]);
});

test('3x5 is [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], ...]', () => {
    expect(init(3, 5)).toStrictEqual([[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]]);
});