class D {
    constructor(...args) {
        this.year = 0
        this.month = 0
        this.date = 0
        this.hours = 0
        this.mins = 0
        this.secs = 0
        if ((typeof (args[0]) == 'string') && (args.length == 1)) {
            this.stringToDate(args[0])
        }
        else {
            this.manyArgsToDate(...args)
        }
    }
    stringToDate(str) {
        const d = new Date(str)
        this.year = d.getFullYear()
        this.month = d.getMonth()
        this.date = d.getDate()
        this.hours = d.getHours()
        this.mins = d.getMinutes()
        this.secs = d.getSeconds()
    }
    manyArgsToDate(...args) {
        if ((args.length > 0) && (typeof (args[0]) == 'number')) this.year = args[0]
        if ((args.length > 1) && (typeof (args[1]) == 'number')) this.month = args[1]
        if ((args.length > 2) && (typeof (args[2]) == 'number')) this.date = args[2]
        if ((args.length > 3) && (typeof (args[3]) == 'number')) this.hours = args[3]
        if ((args.length > 4) && (typeof (args[4]) == 'number')) this.mins = args[4]
        if ((args.length > 5) && (typeof (args[5]) == 'number')) this.secs = args[5]
    }
    getYear() {
        return this.year
    }
    getShortYear() {
        return this.year % 100
    }
    getMonth() {
        return this.month
    }
    getStrMonth() {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        return months[this.getMonth() - 1]
    }
    getAbbrMonth() {
        const abbrMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        return abbrMonths[this.getMonth() - 1]
    }
    getDay() {
        return this.date
    }
    getHour() {
        return this.hours
    }
    getMins() {
        return this.mins
    }
    getSecs() {
        return this.secs
    }
    padWithZero(num) {
        if (num > 9) return num.toString()
        return `0${num.toString()}`
    }
    format(form = '') {
        if (form == '') return `${this.getYear()} ${this.getStrMonth()} ${this.getDay()}`
        const Y = this.getYear()
        const y = this.getShortYear()
        const M = this.getStrMonth()
        const m = this.getAbbrMonth()
        const D = this.padWithZero(this.getDay())
        const d = this.getDay()
        const H = this.padWithZero(this.getHour())
        const h = this.getHour()
        const I = this.padWithZero(this.getMins())
        const i = this.getMins()
        const S = this.padWithZero(this.getSecs())
        const s = this.getSecs()
        return form.replace('Y', Y)
            .replace('y', y)
            .replace('M', M)
            .replace('m', m)
            .replace('D', D)
            .replace('d', d)
            .replace('H', H)
            .replace('h', h)
            .replace('I', I)
            .replace('i', i)
            .replace('S', S)
            .replace('s', s)
    }

}

module.exports = D