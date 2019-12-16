// Promise

// Cara 1, Then dan Catch disambung
let promises_inline = new Promise((resolve, reject) => {
    if(true) {
        resolve('Welldone')
    }

    reject('Whoops!')
}).then((response) => {
    console.log('Promise Inline '+response)
}).catch((response) => {
    console.log('Promise Inline '+response)
})

// console.log(promises_inline)


// Cara 2, Then dan Catch dipisah
let promises = new Promise((resolve, reject) => {
    if(true) {
        resolve('Welldone')
    }

    reject('Whoops!')
})

// Contoh 1
promises.then((response) => {
    console.log(response)
}).catch((response) => {
    console.log(response)
})

// Contoh 2
promises.then((response) => {
    console.log('Promises 2 '+response)
}, (response) => {
    console.log('Promises 2 '+response)
})

// console.log(promises)


// // Promise in Function
let promises_function = () => {
    return new Promise((resolve, reject) => {
        if(false) {
            resolve('Welldone')
        }

        reject('Whoops!')
    })
}

promises_function().then((response) => {
    console.log('Promises Function '+response)
}).catch((response) => {
    console.log('Promises Function '+response)
})

// console.log(promises_function())