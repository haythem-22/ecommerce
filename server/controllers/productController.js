const Product = require("../models/product")

const getProducts = async (req, res) => {
    try {
        const products = await Product.find().sort({createdAt: -1})
        res.status(200).json(products)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(404).json({ error: 'Product not found' })
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getProductsByCategory = async (req, res) => {
    try {
        const products = await Product.find({ category: req.params.category })
        res.status(200).json(products)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getProducts,
    getProductById,
    getProductsByCategory
}

