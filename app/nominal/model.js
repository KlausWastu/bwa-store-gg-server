// Menghubungkan ke database 
const mongoose = require('mongoose')
// Membuat schema database
let nominalSchema = mongoose.Schema({
    coinQuantity :{ 
        type : Number,
        default: 0    
    },
    coinName : {
        type : String,
        require: [true, 'Nama kategori harus di isi']
    },
    price :{
        type: Number,
        default:0
    }
}, {timestamps: true})

module.exports = mongoose.model('Nominal', nominalSchema)