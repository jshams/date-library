const Dater = require('../index.js')

test('Sanity check', () => {

})

test('init', () => {
    let result;
    result = new Dater()
    expect(result.year).toBe(0)
})

test('stringToDate', () => {
    let date;
    date = new Dater('5/12/2011')
    expect(date.year).toBe(2011)
})

test('manyArgsToDate', () => {
    let date;
    date = new Dater(2017, 12, 15, 8, 4, 20)
    expect(date.year).toBe(2017)
    expect(date.month).toBe(12)
    expect(date.date).toBe(15)
    expect(date.hours).toBe(8)
    expect(date.mins).toBe(4)
    expect(date.secs).toBe(20)
})

test('getYear', () => {
    let date;
    date = new Dater(2017)
    let result = date.getYear()
    expect(result).toBe(2017)
})

test('getShortYear', () => {
    let date;
    date = new Dater(2017)
    let result = date.getShortYear()
    expect(result).toBe(17)
})

test('getMonth', () => {
    let date = new Dater(2017, 11)
    let result = date.getMonth()
    expect(result).toBe(11)
})

test('getStrMonth', () => {
    let date = new Dater(2017, 11)
    let result = date.getStrMonth()
    expect(result).toBe('November')
})

test('getAbbrMonth', () => {
    let date = new Dater(2017, 11)
    let result = date.getAbbrMonth()
    expect(result).toBe('Nov')
})

test('getDay', () => {
    let date = new Dater(2017, 11, 22)
    let result = date.getDay()
    expect(result).toBe(22)
})

test('getHour', () => {
    let date = new Dater(2017, 11, 22, 12)
    let result = date.getHour()
    expect(result).toBe(12)
})

test('getMins', () => {
    let date = new Dater(2017, 11, 12, 22, 23)
    let result = date.getMins()
    expect(result).toBe(23)
})

test('getSecs', () => {
    let date = new Dater(2017, 11, 12, 22, 23, 59)
    let result = date.getSecs()
    expect(result).toBe(59)
})

test('padWithZero', () => {
    let date = new Dater()
    let result = date.padWithZero(3)
    expect(result).toBe('03')
    result = date.padWithZero(30)
    expect(result).toBe('30')
})

test('format', () => {
    let date = new Dater(2017, 1, 2, 3, 4, 5)
    let result = date.format('Y-M-D h:I:S')
    expect(result).toBe('2017-January-02 3:04:05')
    result = date.format('y/m/d')
    expect(result).toBe('17/Jan/2')
})

