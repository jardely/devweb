var express = require('express');
const tradesRouter = express.Router();
const tradesApp = require('./trades.app');

tradesRouter.get('/', tradesApp.getAll);
tradesRouter.get('/category', tradesApp.getByCategory);
tradesRouter.get('/:id', tradesApp.getById);
tradesRouter.post('/', tradesApp.add);
tradesRouter.delete('/:id', tradesApp.delete);

module.exports = tradesRouter;
