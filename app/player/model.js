// Menghubungkan ke database 
const mongoose = require('mongoose')
const bycrpyt = require('bcryptjs')
const HASH_ROUND = 10
// Membuat schema database
let playerSchema = mongoose.Schema({
    email : {
        type : String,
        require: [true, 'Email harus di isi']
    },
    name : {
        type : String,
        require: [true, 'Nama harus di isi'],
        maxLength: [225, 'Panjang nama harus antara 9 - 225'],
        minLength: [9, 'Panjang nama harus antara 9 - 225'],
    },
    username : {
        type : String,
        require: [true, 'Nama harus di isi'],
        maxLength: [225, 'Panjang username harus antara 3 - 225'],
        minLength: [3, 'Panjang username harus antara 3 - 225'],
    },
    password : {
        type : String,
        require: [true, 'Kata sandi harus di isi'],
        maxLength: [225, 'Panjang nama harus antara 7 - 225'],
        minLength: [7, 'Panjang nama harus antara 7 - 225'],
    },
    role : {
        type : String,
        enum : ['admin','user'],
        default : 'user'
    },
    status : {
        type : String,
        enum : ['Y','N'],
        default : 'Y'
    },

    avatar : {
        type : String
    },

    fileName : {
        type : String
    },

    phoneNumber : {
        type : String,
        require: [true, 'Nomor telepon harus di isi'],
        maxLength: [16, 'Panjang nomor hp harus antara 8 - 16'],
        minLength: [8, 'Panjang nomor hp harus antara 8 - 16'],
    },

    favorite : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Category'
    }
}, {timestamps: true})

playerSchema.path('email').validate(async (value)=>{
    try {
        const count = await mongoose.model('Player').countDocuments({ email : value }) 
        return !count 
    } catch (err) {
        throw err
    }
}, attr => `${attr.value} sudah terdaftar`)

playerSchema.pre('save', function(next){
    this.password = bycrpyt.hashSync(this.password, HASH_ROUND)
    next()
})

module.exports = mongoose.model('Player', playerSchema)