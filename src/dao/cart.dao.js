const postgres = require('../../lib/postgres');

exports.daoListProductOnCard = async (cart) => {
    try {
        //console.log("chegou aqui")
        const sql = `
            SELECT p.product_id, p.name, p.price, p.image,cp.quantity
            FROM product p
            JOIN cart_product cp ON p.product_id = cp.product_id
            WHERE cp.cart_id = $1;
        `;
        const { rows } = await postgres.query(sql, [cart.cart_id]);
        return { collection: rows, totalCount: rows.length };
    } catch (err) {
        throw err;
    }
};

exports.daoInsertProductOnCard = async (cart) => {
    try {

        const sql = `INSERT INTO cart_product( cart_id, product_id, quantity)
        VALUES ($1,$2,$3) RETURNING product_id;
        `;
        console.log(sql)
        const { rows } = await postgres.query(sql, [cart.cart_id, cart.product_id, cart.quantity]);
        return rows.shift();
    } catch (err) {
        throw err;
    }
};

exports.daoUpdateProductOnCard = async (cart) => {
    try {
        const sql = `UPDATE cart_product
            SET quantity = $3
            WHERE cart_id = $1 AND product_id = $2 RETURNING quantity;`;

        const { rows } = await postgres.query(sql, [ cart.cart_id, cart.product_id, cart.quantity]);
        return rows.shift();
    } catch (err) {
        throw err;
    }
};

exports.daoDeleteProductOnCard = async (cart_product) => {
    try {

        const sql = 'DELETE FROM cart_product WHERE cart_id = $1 and product_id = $2  RETURNING product_id';
        const { rows } = await postgres.query(sql, [cart_product.cart_id, cart_product.product_id]);
        return rows;
    } catch (err) {
        throw err;
    }
};

exports.daoFindCartById = async (cart) => {
    try {
        const sql = 'SELECT cart_id FROM cart WHERE cart_id = $1';
        const {rows} = await postgres.query(sql, [cart.cart_id]);
        return rows;
    } catch (err) {
        throw err;
    }
};