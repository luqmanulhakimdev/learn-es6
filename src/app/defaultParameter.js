console.log('')
console.log('Default Parameter : ')
console.log('')

// pada es6 kita bisa membuat default parameter pada function 
// yang sebelumnya tidak bisa dibuat pada javascript lama

let generateParameter = () => {
    return 'Hello'
}

let functionParameter = (fromGenerate = generateParameter(), defaultParameter = 'World!', parameter) => {
    // defaultParameter = defaultParameter || 'World!' // cara 1

    // if(typeof defaultParameter === 'undefined') { // cara 2
    //     defaultParameter = 'World!'
    // }
    console.log(fromGenerate+' '+ defaultParameter)
    console.log(parameter)
}

functionParameter(undefined, undefined, 'Goodbye World!')
// return : Hello World!
// jika pada javascript lama ketika kita ingin membuat 
// parameter default pada fungsi kita harus menggunakan cara 1 atau cara 2
// tetapi pada syntax arrow dan es6 kita bisa membuatnya secara default 
// dengan menggunakan = 'parameter' atau bahkan memanggilnya dari fungsi atau variable yang lain
