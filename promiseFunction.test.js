const fetchPromise = require('./promiseFunction')

test('the data is peanut butter', () => {
    return expect(fetchPromise()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', () => {
    return expect(fetchPromise()).rejects.toThrow('error');
});

test('the data is peanut butter', async () => {
    const data = await fetchPromise();
    expect(data).toBe('peanut butter');
})