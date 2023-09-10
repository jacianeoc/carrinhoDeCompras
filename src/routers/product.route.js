const router = require('express').Router();
const productController = require('../controllers/product.controller');

router.get('/products', productController.listProducts);
router.get('/products/:id', productController.lookupProductById, productController.product);

module.exports = router;
