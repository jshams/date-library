# Date Library
![npm](https://img.shields.io/npm/v/date-library.svg?style=plastic)
![npm bundle size](https://img.shields.io/bundlephobia/min/date-library.svg?style=plastic)
[![Build Status](https://travis-ci.com/jshams/date-library.svg?branch=master)](https://travis-ci.com/jshams/date-library)
![Codecov](https://img.shields.io/codecov/c/github/jshams/date-library)


# Methods

## Constructor
When creating an instance of D there are a couple ways we can initialize it.
You can either enter the date in string format.
Or you can enter parameters in this order:
(year, month, date, hour, mins, secs)
They are all defaulted to 0 so if you only use three your hour, mins, and secs will all be 0.

### Code samples:
To create a date of November 23, 1988 we can do it in these two ways:
```javascript
let date = new D('11/23/1988')
date = new D(1998, 11, 23)
```

---
## Get methods
The get method will give you details about your date.
For example the getMonth method returns the month (int).

`getYear()` -> returns the full year (int)

`getShortYear()` -> returns the last two digits of the year (int)

`getMonth()` -> returns the month (int)

`getStrMonth()` -> returns month name (str)

`getAbbrMonth()` -> returns abbreviation of month (str)

`getDay()` -> returns the day

`getHour()` -> returns the hour


`getMins()` -> returns the minutes

`getSecs()` -> returns the seconds
### Code samples:
```javascript
let date = D(2019, 08, 13, 7, 59, 39) // Aug 13, 2019 7:59:39AM
date.getYear()      // returns 2019
date.getShortYear() // returns 19
date.getMonth()     // returns 8
date.getStrMonth()  // returns August
date.getAbbrMonth() // returns Aug
date.getDay()       // returns 17
date.getHour()      // returns 7
date.getMins()      // returns 59
date.getSecs()      // returns 39
```

---
## Pad With Zeros:
This is a helper method for the format method, but it can still be useful.
Given an integer this method will return a string version of that int with at least 2 characters so if the number is less than 10, a zero will be shifted in front of the int.

Ex: `date.padWithZero(5)` -> `"05"`

### Code Samples:
```javascript
let date = new D()
date.padWithZero(1)     // returns '01'
date.padWithZero(12)    // returns '12'
date.padWithZero(123)   // returns '123'
```

---

## Format
Possibly the most useful method of our class is the format method. This method allows you to get a formatted string of your choice of your date.
Here is the list of formatting options:
- 'Y' -> 2019   (full year)
- 'y' -> 19     (short year)
- 'M' -> July   (month)
- 'm' -> Jul    (abbr month)
- 'D' -> 01     (padded day)
- 'd' -> 1      (day)
- 'H' -> 05     (padded hours)
- 'h' -> 5      (hours)
- 'I' -> 08     (padded minutes)
- 'i' -> 8      (minutes)
- 'S' -> 04     (padded seconds)
- 's' -> 4      (seconds)

### Code samples:
```javascript
    let date = new D(2017, 1, 2, 3, 4, 5)
    let result = date.format('Y-M-D h:I:S') 
    result == '2017-January-02 3:04:05' // true
    result = date.format('y/m/d') 
    result == '17/Jan/2' // true
```
