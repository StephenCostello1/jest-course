const sum = require('./sum');
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
})

test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2 });
});

test('null is falsey', () => {
    const n = null;
    expect(n).toBeFalsy();
});

test('zero is falsey', () => {
    const n = 0;
    expect(n).toBeFalsy();
});

test('one is truthy', () => {
    const n = 1;
    expect(n).toBeTruthy();
});

const myFunction = require('./invalidInput')

test('throws on invalid input', () => {
    expect(() => {
        myFunction('string');
    }).toThrow();
});