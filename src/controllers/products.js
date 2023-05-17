const ProductModel = require('../models/products')


async function get(req, res) {
    const { id } = req.params  //req.query => ?id=123 //req.body => post

    const obj = id ? { _id: id } : null

    // if (id) {
    //     obj._id = id
    // }

    const products = await ProductModel.find(obj)

    res.send(products)
}

async function post(req, res) {
    const {
        name,
        brand,
        price,
    } = req.body

    console.log(req.body)

    const product = new ProductModel({
        name,
        brand,
        price,
    })

    product.save()

    res.send({
        message: 'success '
    })

}

async function put(req, res) {
    const { id } = req.params

    const product = await ProductModel.findOneAndUpdate({ _id: id }, req.body, { new: true })
    res.send({
        message: 'success ',
        product,
    })

    //Caso não precise retornar o novo objeto atualizado, pode usar esse:
    // const product = await ProductModel.findOne({ _id: id })

    // await product.updateOne(req.body)

    // res.send({
    //     message: 'success ',
    //     product,
    // })

}

module.exports = {
    get,
    post,
    put,
}