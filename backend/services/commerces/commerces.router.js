var express = require('express');
const commerceRouter = express.Router();
const commerceApp = require('./commerces.app');

commerceRouter.get('/', commerceApp.getAll);
commerceRouter.get('/category', commerceApp.getByCategory);
commerceRouter.get('/:id', commerceApp.getById);
commerceRouter.post('/', commerceApp.add);
commerceRouter.delete('/:id', commerceApp.delete);

module.exports = commerceRouter;
