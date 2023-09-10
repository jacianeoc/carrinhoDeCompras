const router = require('express').Router();
const cartController =  require('../controllers/cart.controller');

router.get('/cart/:id',cartController.lookupCartById, cartController.cart);
router.get('/cart/:id/products', cartController.lookupCartById, cartController.listProductsOnCart);
router.post('/cart/:id/products',cartController.lookupCartById, cartController.addProductOnCart);
router.put('/cart/:id/products/:idProduct',cartController.lookupCartById, cartController.updateProductOnCart);
router.delete('/cart/:id/products/:idProduct',cartController.lookupCartById, cartController.deleteProductOnCart);

module.exports = router;
