const express = require('express');
const app = express();
const indexRoutes = require('../routes/index');

app.use(express.json());

app.use('/api/v1', indexRoutes);

module.exports = app;
