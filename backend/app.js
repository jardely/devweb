var express = require('express');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var cors = require('cors')
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

app.use('/commerce', indexRouter);

PORT = 8081;
app.listen(PORT, function () {
  console.log('Servidor em execução na porta ' + PORT);
});
