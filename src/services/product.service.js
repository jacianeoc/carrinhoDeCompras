const daoProduct = require('../dao/product.dao');

exports.listProduct = async (product, query) => {
    query.limit = query.limit ? query.limit : process.env.PAGINATIONSIZE;
    query.offset = query.offset ? query.offset : process.env.PAGINATIONSIZE;
    try {
        const output = await daoProduct.daoListProduct(product, query);
        return output;
    } catch (err) {
        throw err;
    }
};

exports.findById = async (product, params) => {
    try {
        product.product_id= params.id;

        const output = await daoProduct.daoFindProductById(product);
        return output;
    } catch (err) {
        throw err;
    }
};


