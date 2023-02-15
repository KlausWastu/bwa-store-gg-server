// Menghubungkan ke database 
const mongoose = require('mongoose')
// Membuat schema database
let bankSchema = mongoose.Schema({
    name : {
        type : String,
        require: [true, 'Nama pemilik harus di isi']
    },
    bankName : {
        type : String,
        require: [true, 'Nama Bank harus di isi']
    },
    noRekening : {
        type : String,
        require: [true, 'Nomor Rekening harus di isi']
    },
}, {timestamps: true})

module.exports = mongoose.model('Bank', bankSchema)