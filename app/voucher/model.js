// Menghubungkan ke database 
const mongoose = require('mongoose')
// Membuat schema database
let voucherSchema = mongoose.Schema({
    name : {
        type : String,
        require: [true, 'Nama game harus di isi']
    },
    status : {
        type : String,
        enum : ['Y','N'],
        default: 'Y'
    },
    thumbnail : {
        type : String
    },
    // Category ini memanggil schme dari Category
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    nominals: [{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Nominal'
    }],
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
})

module.exports = mongoose.model('Voucher', voucherSchema)