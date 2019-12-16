console.log('')
console.log('Syntax Arrow : ')
console.log('')

// syntax arrow adalah shorthand dari function atau penulisan singkatnya

let names = ['muklis', 'ilham', 'dion']
names.forEach(function(name) {
    console.log('nama: ' + name)
})

// return :  nama: muklis
// return :  nama: ilham
// return :  nama: dion
// pada javascript lama penulisan function bisa dengan cara seperti ini, 
// tetapi penulisannya agak panjang dan ribet



names.forEach((name) => {
    console.log('nama: ' + name)
})

// return :  nama: muklis
// return :  nama: ilham
// return :  nama: dion
// pada es6 kita bisa menyingkatnya menjadi seperti ini, 
// menghilangkan syntax function dan 
// menambahkan syntax => sebelum { buka kurung kurawal dari function




names.forEach(name => {
    console.log('nama: ' + name)
})
// return :  nama: muklis
// return :  nama: ilham
// return :  nama: dion
// atau kita bisa singkat lagi menjadi seperti ini jika hanya ada 1 parameter saja



names.forEach((name, index) => {
    console.log('nama: ' + name + ' - ' + index)
})
// return :  nama: muklis - 0
// return :  nama: ilham - 1
// return :  nama: dion - 2
// tetapi jika kita mempunyai lebih dari 1 parameter kita harus menggunakan ()
// cara diatas tidak akan berhasil




names.forEach(name => console.log('nama: ' + name) )
// return :  nama: muklis
// return :  nama: ilham
// return :  nama: dion
// dan jika kita hanya mempunya 1 baris statement
// maka kita bisa membuang { } kurung kurawalnya dan menjadi seperti ini



names.map(name => console.log('nama: ' + name) )
// return :  nama: muklis
// return :  nama: ilham
// return :  nama: dion
// dan juga kita bisa menggantikan forEach dengan map 
// map adalah fungsi baru pada es6 
// yang gunanya sama dengan forEach dan mempunyai performa yang lebih cepat



let namesResult = names.map((name, index) => {
    return 'nama: ' + name + ' - ' + index
})

console.log(namesResult)
// return : (3) ["nama: muklis - 0", "nama: ilham - 1", "nama: dion - 2"]
// pada penggunaan function biasa pada javascript seringkali kita menggunakan return
// untuk melemparkan hasil data atau nilai yang sudah kita olah



let namesResult2 = names.map((name, index) => 'nama: ' + name + ' : ' + index )
console.log(namesResult2)
// return : (3) ["nama: muklis : 0", "nama: ilham : 1", "nama: dion : 2"]
// tetapi pada syntax arrow kita bisa singkat syntax return nya seperti berikut



let kantor = {
    karyawan: ['firman', 'vina', 'ani'],
    getKaryawan() {
        // let _this = this
        this.karyawan.map(function(name) {
            console.log(this)
            // console.log(_this)
        })
    }
}

kantor.getKaryawan()
// return : window
// nah ketika kita menemukan kasus seperti ini
// ketika kita menggunakan function biasa context this mengacu pada window
// bukan mengacu pada objectnya sendiri
// dan kita seringkali mengakalinya 
// dengan membuat variable baru yang memanggil this diluar function nya



let kantor2 = {
    karyawan: ['firman', 'vina', 'ani'],
    getKaryawan() {
        this.karyawan.map(name => console.log(this) )
    }
}

kantor2.getKaryawan()
// return : {karyawan: Array(3), getKaryawan: ƒ} // mengacu pada objectnya sendiri
// nah ketika kita menggunakan syntax arrow maka otomatis context this nya berubah
// sudah mengacu pada objectnya sendiri