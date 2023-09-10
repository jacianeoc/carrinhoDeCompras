const serviceProduct = require('../services/product.service');

exports.product = async (req, res) => {
    res.status(200).json(req.product);
};

exports.listProducts = async (req, res) => {
    try {
        const output = await serviceProduct.listProduct({}, req.query);
        res.status(200).json(output);
    } catch (err) {
        res.status(500).json({ errors: [{ location: req.path, msg: 'Could not query table product. Detail: ' + err.detail, param: null }] });
    }
};

exports.lookupProductById = async (req, res, next) => {
    try {

        const output = await serviceProduct.findById({}, req.params);
        //console.log(req.params)
        if (output.length === 0) {
            res.status(404).json({ errors: [{ location: req.path, msg: 'Product not found', param: req.params.id }] });
            return;
        }
        req.product = output.shift();
        next();
    } catch (err) {
        res.status(500).json({ errors: [{ location: req.path, msg: 'Could not query table prduct. Detail: ' + err.detail, param: req.params.id }] });
    }
};

