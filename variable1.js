//variabel 3 keyword: var, let, const
var name // kita buat sebuah variable
name = "Jhon" // kita assign variable name dengan isinya "Jhon"
console.log(name) // seharusnya isinya = "Jhon"

//kita bisa langsung isi variabelnya namanya
let name2 = "Hirdzan" // Kalau let bisa diganti isinya
// cara assign ulang variable
name2 = "Jimmy"
console.log(name2)

const name3 = "Jagad" // kalau const TIDAK BISA diganti isinya
// name3 = "Ade"
console.log(name3)

// data yang tidak boleh diganti maka menggunakan const
// data yang boleh diganti variablenya maka menggunakan let

// aturan untuk membuat variabel di javascript
// 1. tidak boleh mengandung space/spasi
// ex: total price, stok barang
// 2. hanya bisa dimulai dengan huuf, underscore, dollar sign
// ex: name, _name, $name
// 3. di dalam nama variable, hanya bisa mengandung huruf, angka, underscore, dollar sign
// ex : name, name1, name3, total_barang, stock$barang, a_b$4
// 4. penamaan variable di javascript itu case sensitive
// ex: HasilNilai berbeda dengan hasilnilai

// Cara penulisan variabel di javascript
// 1. Camel case
let TotalBarang, stockProduct //user javascript
// 2. Snake Case
let total_barang, stock_product //user phyton
// kapan kita menggunakan variable?
// ketika kita mau menggunakan data tersebut lebih dari 1 kali
// ex:
console.log("Santdikna can do it")
console.log("Santdikna can do it")
console.log("Santdikna can do it")
console.log("Santdikna can do it")
console.log("Santdikna can do it")

let kalimat = "Santdikna can do it"
console.log(kalimat)
console.log(kalimat)
console.log(kalimat)
console.log(kalimat)
console.log(kalimat)

// Data Type
// String
let data = "Yusuf" 
let data3 = '1234'
let data4 = `12345`

// Numbers: terdiri dari 2 jenis. yaitu integers dan float
// Integers
let data1 = 1
// float
let data2 = 1.5

// Boolean (data kondisi)
// True or False
let data5 = true

// Object
let data6 = {
    name: "Jhon",
    age: 12,
    single: true
}

// Array (dapat menyimpan data yang banyak)
let data7 = ["Jhon, 12, true"]

// Undefined and Null (data kosong)
// ex undefined (isi kosong tanpa pemberitahuan)
let contoh 
console.log(contoh)
// contoh null (memberi tahu ada isi tapi isinya kosong)
let contoh2 = null
console.log(contoh2)

//typeof
console.log(typeof "laptop")
let uji = {
    name: "Andra"
}
console.log(typeof "uji")
console.log(typeof "123")

//Numbers
let a = 1+2
console.log(a)
let b = 4-2
console.log(b)
let c = 4*4
console.log(c)
let d = 10/2
console.log(d)
let e = 17%3 // modulus dikurang sampai habis 17-3-3-3-3-3
console.log(e)
let f = 2 // + 1
f++ // increment
console.log(f)
let g = 2 // -1
g-- // decrement
console.log(g)

// shorthand operators
let h = 5
h = h + 5
console.log(h)

let i = 2
i += 5
console.log(i)

let j = 3
j %= 2
console.log(j)