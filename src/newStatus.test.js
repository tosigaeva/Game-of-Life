const newStatus = require('./newStatus');

test('current status inactive and 3 neighbors', () => {
    expect(newStatus(false, 3)).toBe(true);
});

test('current status inactive and less then 3 neighbors', () => {
    expect(newStatus(false, 2)).toBe(false);
});

test('current status inactive and more then 3 neighbors', () => {
    expect(newStatus(false, 4)).toBe(false);
});

test('current status active and less than 2 neighbors', () => {
    expect(newStatus(true, 1)).toBe(false);
});

test('current status active and more than 3 neighbors', () => {
    expect(newStatus(true, 4)).toBe(false);
});

test('current status active and 2 neighbors', () => {
    expect(newStatus(true, 2)).toBe(true);
});

test('current status active and 3 neighbors', () => {
    expect(newStatus(true, 3)).toBe(true);
});
