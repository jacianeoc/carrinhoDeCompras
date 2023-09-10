require('dotenv').config();
const express= require('express') ;
const cors= require('cors') ;
const logger = require('morgan');

const app = express();
app.disable('x-powered-by');
app.use(express.json());
cors({ credentials: true, origin: true });
app.use(cors());
app.use(express.json());
app.use('/static', express.static('public'));

if (process.env.NODE_ENV !== 'test') { app.use(logger('dev')); }
app.use(process.env.NODE_ENV === 'test' ? '' : process.env.PATH_PREFIX ? process.env.PATH_PREFIX : '', require('./src/index'));
module.exports = app;
