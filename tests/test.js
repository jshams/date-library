const Dater = require('../index.js')

test('Sanity check', () => {

})

test('init', () => {
    let result;
    result = new Dater(1999)
    expect(result.year).toBe(1999)
})

test('whatYearIsIt', () => {
    const date = new Dater(1999)
    let result;
    result = date.whatYearIsIt()
    expect(result).toBe(1999)
})