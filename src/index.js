const router = require('express').Router();
const cart = require('./routers/cart.route');
const product = require('./routers/product.route');
const email = require('./routers/email.route');

const fallback = require('./routers/fallback.route');

router.use(cart);
router.use(product);
router.use(email);
router.use(fallback);

module.exports = router;





