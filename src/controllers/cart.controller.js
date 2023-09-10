const cartService = require('../services/cart.service');
const serviceProduct = require("../services/product.service");

exports.deleteProductOnCart = async (req, res) =>{
    try {
        const output = await cartService.deleteProductsOnCart({}, req.params);
        res.status(200).json(output);
    } catch (err) {
        res.status(500).json({ errors: [{ location: req.path, msg: 'Could not query table product on cart. Detail: ' + err.detail, param: null }] });
    }
}

exports.addProductOnCart= async (req, res) =>{
    try {
        const output = await cartService.insertProductsOnCart(req.params, req.body);
        res.status(200).json(output);
    } catch (err) {
        res.status(500).json({ errors: [{ location: req.path, msg: 'Could not query table product on cart. Detail: ' + err.detail, param: null }] });
    }
}
exports.updateProductOnCart= async (req, res) =>{
    try {
        const output = await cartService.updateProductsOnCart(req.params, req.body);
        res.status(200).json(output);
    } catch (err) {
        res.status(500).json({ errors: [{ location: req.path, msg: 'Could not update table product on cart. Detail: ' + err.detail, param: null }] });
    }
}

exports.listProductsOnCart= async (req, res) =>{
    try {
        const output = await cartService.listProductsOnCart({}, req.params);
        res.status(200).json(output);
    } catch (err) {
        res.status(500).json({ errors: [{ location: req.path, msg: 'Could not query table product on cart. Detail: ' + err.detail, param: null }] });
    }
}

exports.lookupCartById = async (req, res, next) =>{
    try {

        const output = await cartService.findById({}, req.params);
        if (output.length === 0) {
            res.status(404).json({ errors: [{ location: req.path, msg: 'Cart not found', param: req.params.id }] });
            return;
        }
        req.cart = output.shift();
        next();
    } catch (err) {
        res.status(500).json({ errors: [{ location: req.path, msg: 'Could not query table cart. Detail: ' + err.detail, param: req.params.id }] });
    }
}

exports.cart = async (req, res) =>{
    res.status(200).json(req.cart);
}

