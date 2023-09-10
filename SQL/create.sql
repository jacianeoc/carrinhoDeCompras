CREATE TABLE IF NOT EXISTS product (
    product_id INT PRIMARY KEY,
    name  VARCHAR(64) NOT NULL,
    price DOUBLE PRECISION NOT NULL,
    image TEXT
);

CREATE TABLE IF NOT EXISTS cart(
    cart_id INT PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS cart_product (
    cart_id INT,
    product_id INT,
    quantity INT NOT NULL,
    PRIMARY KEY (cart_id, product_id),
    FOREIGN KEY (cart_id) REFERENCES cart(cart_id),
    FOREIGN KEY (product_id) REFERENCES product(product_id)
);
