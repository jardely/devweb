var express = require('express');
const commerceRouter = express.Router();
const commerceApp = require('../controllerss/commerces');

commerceRouter.get('/', commerceApp.getAll);
commerceRouter.get('/category/:category', commerceApp.getByCategory);
commerceRouter.get('/:id', commerceApp.getById);
commerceRouter.post('/', commerceApp.add);
commerceRouter.delete('/:id', commerceApp.delete);
commerceRouter.put('/', commerceApp.update);
commerceRouter.get('/comments/:commerceId', commerceApp.getComments);
commerceRouter.post('/comments/:commerceId', commerceApp.addComments)

module.exports = commerceRouter;