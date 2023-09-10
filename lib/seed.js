require('dotenv').config();
const pg = require('./postgres');
const fs = require('fs');
const drop = fs.readFileSync(__dirname + '/../SQL/drop.sql').toString();
const create = fs.readFileSync(__dirname + '/../SQL/create.sql').toString();
const insert = fs.readFileSync(__dirname + '/../SQL/insert.sql').toString();

pg.query(drop, (err) => {
    if (err) {
        throw err
    }
    pg.query(create, (err) => {
        if (err) {
            throw err;
        }
        pg.query(insert, (err) => {
            if (err) {
                throw err;
            }
        });
    });
});
