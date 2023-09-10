const daoCart = require('../dao/cart.dao');
exports.listProductsOnCart= async (cart, params) =>{
    try {
        //console.log(params)
        cart.cart_id= params.id;
        const output = await daoCart.daoListProductOnCard(cart);
        return output;
    } catch (err) {
        throw err;
    }
}
exports.insertProductsOnCart= async (params, cart_product) =>{
    try {
        cart_product.cart_id= parseInt(params.id) ;
        const output = await daoCart.daoInsertProductOnCard(cart_product);

        return output;

    } catch (err) {
        throw err;
    }
}
exports.updateProductsOnCart= async (params, cart_product) =>{
    try {
        cart_product.cart_id = parseInt(params.id);
        cart_product.product_id=  parseInt(params.idProduct);

        const output = await daoCart.daoUpdateProductOnCard(cart_product);
        return output;

    } catch (err) {
        throw err;
    }
}
exports.deleteProductsOnCart= async (cart_product, params) =>{
    try {
        cart_product.cart_id = params.id;
        cart_product.product_id= params.idProduct;

        const output = await daoCart.daoDeleteProductOnCard(cart_product);

        return output;

    } catch (err) {
        throw err;
    }
}
exports.findById = async (cart, params) => {
    try {
        cart.cart_id= params.id;

        const output = await daoCart.daoFindCartById(cart);
        return output;
    } catch (err) {
        throw err;
    }
};


