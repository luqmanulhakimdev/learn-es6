console.log('')
console.log('Variable : ')
console.log('')

// pada javascript lama untuk deklarasi variable hanya mengggunakan var
// pada es6 ada 2 syntax baru untuk deklarasi variable, yaitu: let dan const

// pada javascript var bersifat { function scope }
// sementara let dan const bersifat { block scope }

var nama = 'Luqmanul'
var nama = 'Hakim'

console.log('nama ' + nama)
// return: Hakim
/* ketika menggunakan var, maka variable dengan nama yang sama sebelumnya akan 
terganti nilainya dengan variable yang baru */

var nama2 = 'Luqmanul'
nama2 = 'Hakim'

console.log('nama2 ' + nama2)
// return: 'Hakim'
// begitu juga dengan cara seperti ini

// let nama3 = 'Luqmanul'
// let nama3 = 'Hakim'
// console.log('nama3 ' + nama3)
// return chrome : Uncaught SyntaxError: Identifier 'nama3' has already been declared
/* tetapi ketika menggunakan let maka akan muncul error, 
berarti let tidak bisa dideklarasi dengan nama yang sama, 
berarti juga variable lebih direkomendasikan karena menghindari duplikat nama dalam variable */

let nama4 = 'Luqmanul'
nama4 += ' Hakim'
console.log('nama4 ' + nama4)
// return : Luqmanul Hakim
/* tetapi let juga bersifat mutable, 
berarti nilainya juga bisa dirubah ketika menggunakan cara seperti ini */


let nama5 = 'Luqmanul'
{
    let nama5 = 'Hakim'
    console.log('nama5 ' + nama5)
    // return : Hakim
    /* ketika variable let berada didalam scope yang berbeda atau { } 
    dalam kasus ini kita mendeklarasikan nama variable yang sama diluar { } 
    maka variable tersebut menjadi variable yang berbeda dan tidak bisa diakses didalam sini */
}

console.log('nama5 ' + nama5)
// return : Luqmanul


const nama6 = 'Luqmanul'
{
    const nama6 = 'Hakim'
    console.log('nama6 ' + nama6)
    // return : Hakim
    // begitu juga dengan menggunakan const
}

console.log('nama6 ' + nama6)
// return : Luqmanul





// const test = {
//     nama: 'Luqmanul Hakim',
//     umur: 19,
// }

// test = {
//     nama: 'Luqmanul Hakim',
//     umur: 19,
// }

// console.log(test)
// return chrome : Uncaught TypeError: Assignment to constant variable.
/* berbeda dengan let, const tidak bersifat reassign, 
yang berarti variable tidak bisa diubah sepenuhnya */

const test = {
    nama: 'Luqmanul Hakim',
    umur: 19,
}

test.umur = 20
test.alamat = 'surabaya'
console.log(test)
// return {nama: "Luqmanul Hakim", umur: 20, alamat: "surabaya"}
/* tetapi varible const tetap bersifat mutable 
berarti tetap bisa diganti menggunakan cara diatas */




function testVar() {
    // var scopeVar
    if(false) {
        var scopeVar = 'function scope'
        console.log(scopeVar)
    } else {
        console.log(scopeVar)
    }
}

testVar()
/// return : undefined
// ketika menggunakan var dan menemukan kasus sebagai berikut
// ketika kita deklarasi variable didalam if menggunakan var 
// dan kondisi if tidak terpenuhi lalu didalam else kita mencoba 
// memanggil variable yang seharusnya dideklarasi didalam if bukan di else
// maka akan menghasilkan undefined padahal variable berada pada scope yang berbeda
// ini menandakan bahwa javascript seakan akan mendeklarasikan variable kosong diatas if

// function testVar2() {
//     if(false) {
//         let scopeVar2 = 'function scope'
//         console.log(scopeVar2)
//     } else {
//         console.log(scopeVar2)
//     }
// }

// testVar2()
// return chrome : Uncaught ReferenceError: scopeVar2 is not defined
// tetapi ketika kita menggunakan let dan bertemu kasus diatas
// maka akan menghasilkan is not defined
// ini berarti memang variable belum pernah dideklarasikan sebelumnya
// karena memang let akan dideklarasi didalam if bukan di else


// maka dalam kesimpulan kesimpulan diatas direkomendasikan menggunakan let dan const daripada var
// tetapi mengikuti kebutuhan juga ya teman teman ;)