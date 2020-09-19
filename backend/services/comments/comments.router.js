var express = require('express');
const commentsRouter = express.Router();
const commentsApp = require('./comments.app');

commentsRouter.get('/', commentsApp.getAll);
commentsRouter.get('/trade/:tradeId', commentsApp.getByTradeId);
commentsRouter.get('/:id', commentsApp.getById);
commentsRouter.post('/', commentsApp.add);
commentsRouter.delete('/:id', commentsApp.delete);

module.exports = commentsRouter;
