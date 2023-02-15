const Transaction = require('../transaction/model')
const Voucher = require('../voucher/model')
const Category = require('../category/models')
const Player = require('../player/model')

module.exports = {
    index:async(req,res)=>{
    try {
        const transaction = await Transaction.countDocuments()
        const voucher = await Voucher.countDocuments()
        const category = await Category.countDocuments()
        const player = await Player.countDocuments()
        res.render('admin/dashboard/view_dashboard', {
            name : req.session.user.name,
            title : 'Halaman Dashboard',
            count: {
                transaction,
                voucher,
                player,
                category
            }
        })
    } catch (err) {
        console.log(err)
    }
}
}