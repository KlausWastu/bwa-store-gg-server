// Menghubungkan ke database 
const mongoose = require('mongoose')
// Membuat schema database
let categorySchema = mongoose.Schema({
    name :{ 
        type : String,
        reuire:[true|'Nama kategori harus di isi']
    }
}, {timestamps: true})

module.exports = mongoose.model('Category', categorySchema)