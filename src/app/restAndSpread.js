// Rest, adalah metode untuk mempersingkat pemanggilan parameter pada fungsi menggunakan 3 titik ...
// parameter yang dioper haruslah array dan akan diubah sesuai nama parameter pada fungsinya
let olahData = (value, key) => {
    console.log(key + ' : ' + value)
}

let data = ['jauhari', 'nama']
olahData(...data)
// return : nama : jauhari

// Spread, adalah kebalikan dari rest
// saat mengisi banyak parameter saat pemanggilan fungsi, maka saat di fungsinya sendiri bisa kita singkat
// dengan ... dan parameternya akan berubah menjadi array
let grabData = (...data) => {
    console.log(data[0] + ' : ' + data[1])
}
grabData('nama', 'sabyan')