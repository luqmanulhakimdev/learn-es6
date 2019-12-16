// Shorthand object
// metode untuk mempersingkat pemanggilan variable/fungsi pada object dan menggunakannya dengan nama yang sama

const unit = '10A'
const length = '25m'
const price_per_meter = 200

let getPrice = () => {
    return price_per_meter*25
}

let apart = {
    unit, length, getPrice
}

console.log(apart)
console.log(apart.getPrice())

// Destructuring
// adalah sebuah metode untuk memecah object/array menjadi masing" variable yang diinginkan

let facilities = {
    facility: 'swimming pool',
    facility_tax: 32
}

let {facility: facility_name, facility_tax} = facilities
console.log(facility_name)
console.log(facility_tax)

let locations = ['GBK Jakarta', 'DBL Arena Surabaya', 'Kuta Beach Bali']
let [gbk, dbl, beach] = locations

console.log(gbk)
console.log(dbl)
console.log(beach)