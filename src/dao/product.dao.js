const postgres = require('../../lib/postgres');

exports.daoListProduct = async (product, query) => {
    try {
        product.query = query;

        const sql = 'SELECT product_id, name, price, image FROM product';
        const { rows } = await postgres.query(sql);
        return { collection: rows, totalCount: rows.length, totalPages: 1, page: 1 };
    } catch (err) {
        throw err;
    }
};
exports.daoFindProductById = async (product) => {
    try {
        const sql = 'SELECT product_id, name, price, image FROM product WHERE product_id = $1';
        const {rows} = await postgres.query(sql, [product.product_id]);
        return rows;
    } catch (err) {
        throw err;
    }
};