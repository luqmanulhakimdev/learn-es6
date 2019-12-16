// Template Literal/Template String/Literal String
// adalah sebuah metode pada es6 untuk menyingkat concatination pada string 
// menggunakan `` backtick dan ${} untuk variable

let product = 'Tas Lucu bahan nyaman'
let price = 50000
let qty = 12

let product_text = `Barang: ${product}, Harga: ${price}, Qty: ${qty}`
console.log(product_text)

// untuk mempermudah memanipulasi text dengan fungsi

let format_price = (strings, price) => {
    price = Number(price).toLocaleString()
    return `${strings[0]} ${price}`
}

let original_price = format_price`RP. ${price}`
console.log(original_price)

// untuk mempermudah keperluan DOM

let custom_element = `
    <div>
        <p>Title: <strong>${product}</strong></p>
        <p>Price: <strong>${price}</strong></p>
        <p>QTY: <strong>${qty}</strong></p>
    </div>
`

console.log(custom_element)