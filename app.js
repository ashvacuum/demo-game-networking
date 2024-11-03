// app.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
require('dotenv').config();

const errorHandler = require('./src/middleware/errorHandler');
const routes = require('./src/routes');

const app = express();


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(morgan('dev'));

// Routes
app.use('/api', routes);

// Error handling
app.use(errorHandler);

module.exports = app;