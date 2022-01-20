const init = require('./init');

test('0x0 and 0 active', () => {
    expect(init(0, 0, 0)).toStrictEqual([]);
});

test('0x0 and 3 active', () => {
    expect(init(0, 0, 3)).toStrictEqual([]);
});

test('1x0 and 0 active', () => {
    expect(init(1, 0, 0)).toStrictEqual([{active: false}]);
});

test('1x0 and 1 active', () => {
    expect(init(1, 0, 1)).toStrictEqual([{active: true}]);
});

test('1x0 and 3 active', () => {
    expect(init(1, 0, 3)).toStrictEqual([{active: true}]);
});

test('0xm and k active', () => {
    expect(init(0, 3, 10)).toStrictEqual([]);
});

test('3x0 and no active', () => {
    expect(init(3, 0, 0)).toStrictEqual([{active: false}, {active: false}, {active: false}]);
});

test('3x0 and all active', () => {
    expect(init(3, 0, 3)).toStrictEqual([{active: true}, {active: true}, {active: true}]);
});

test('3x0 and 2 active', () => {
    expect(init(3, 0, 2).reduce((a, b) => b.active ? ++a : a, 0)).toBe(2);
});

test('3x0 has length 3', () => {
    expect(init(3, 0).length).toBe(3);
});

test('array: 1x1 and no active', () => {
    const table = init(1, 1, 0);
    expect(table).toStrictEqual([[{active: false}]]);
})

test('array: 1x1 and all active', () => {
    expect(init(1, 1, 1)).toStrictEqual([[{active: true}]]);
})

test('array: 1x1 has length 1', () => {
    expect(init(1, 1).length).toBe(1);
});

test('array: 1x1 has sub-array with length 1', () => {
    expect(init(1, 1)[0].length).toBe(1);
});

test('array: 1x1 has total items 1', () => {
    expect(init(1, 1).flat().length).toBe(1);
});

test('array: 3x5 and no active', () => {
    expect(init(3, 5, 0)).toStrictEqual([[{active: false}, {active: false}, {active: false}, {active: false}, {active: false}],
        [{active: false}, {active: false}, {active: false}, {active: false}, {active: false}],
        [{active: false}, {active: false}, {active: false}, {active: false}, {active: false}]]);
})

test('array: 3x5 and all active', () => {
    expect(init(3, 5, 15)).toStrictEqual([[{active: true}, {active: true}, {active: true}, {active: true}, {active: true}],
    [{active: true}, {active: true}, {active: true}, {active: true}, {active: true}],
    [{active: true}, {active: true}, {active: true}, {active: true}, {active: true}]]);
})

test('array: 3x5 and 7 active', () => {
    const table = init(3, 5, 7);
    expect(table.flat().reduce((a, b) => b.active ? ++a : a, 0)).toBe(7);
    expect(table.filter((item) => item.length === 5).length).toBe(3);
})