// Menghubungkan ke database 
const mongoose = require('mongoose')
// Membuat schema database
let transactionSchema = mongoose.Schema({
    historyVoucherTopup: {
        gameName : {
            type : String,
            require: [true, 'Nama game harus di isi']
        },
        category : {
            type : String,
            require: [true, 'Kategori game harus di isi']
        },
        thumbnail : {
            type : String
        },
        coinName : {
            type : String,
            require: [true, 'Nama koin harus di isi']
        },
        coinQuantity : {
            type : String,
            require: [true, 'Jumlah koin harus di isi']
        },
        price : {
            type : Number
        }
    },

    historyPayment : {
        name : {
            type : String,
            require: [true, 'Nama  harus di isi']
        },
        type : {
            type : String,
            require: [true, 'Type pembayaran harus di isi']
        },
        bankName : {
            type : String,
            require: [true, 'Nama bank harus di isi']
        },
        noRekening : {
            type : String,
            require: [true, 'Nomor rekening harus di isi']
        },
    },

    name : {
        type : String,
        require: [true, 'Nama harus di isi'],
        maxLength: [225, 'Panjang nama harus antara 3 - 225'],
        minLength: [3, 'Panjang nama harus antara 3 - 225'],
    },

    accountUser : {
        type : String,
        require: [true, 'Nama akun harus di isi'],
        maxLength: [225, 'Panjang nama harus antara 3 - 225'],
        minLength: [3, 'Panjang nama harus antara 3 - 225'],
    },

    tax : {
        type : Number,
        default: 0
    },

    value : {
        type : Number,
        default: 0
    },

    status : {
        type : String,
        enum : ['pending','success', 'failed'],
        default : 'pending'
    },

    player :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Player'
    },

    historyUser :{
        name : {
            type : String,
            require: [true, 'Nama Player harus di isi']
        },
        phoneNumber : {
            type : Number,
            require: [true, 'Nama akun harus di isi'],
            maxLength: [13, 'Panjang nama harus antara 9 - 13'],
            minLength: [9, 'Panjang nama harus antara 9 - 13'],
        }
    },

    category :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Player'
    },

    user :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    
    
}, {timestamps: true})

module.exports = mongoose.model('Transaction', transactionSchema)