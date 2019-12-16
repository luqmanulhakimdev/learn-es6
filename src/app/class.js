// Penggunaan Class dan Function pada es6

class Schools {
    constructor(school_name, npsn) {
        this.school_name = school_name
        this.npsn = npsn
    }

    getSchool() {
        return `Nama Sekolah: ${this.school_name}, NPSN: ${this.npsn}`
    }

    static getParams(params) {
        return params
    }
}

let school = new Schools('SMPN 38 Surabaya', 547435)
console.log(school)
console.log(school.getSchool())

console.log(Schools.getParams(435345))