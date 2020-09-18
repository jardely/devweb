const db = require('../../mysql/connection')
const Trades = require('../../mysql/trades.sql')

exports.getAll = function (req, res) {
  db.query(Trades.getAll, (error, results1) => {
    console.log(error);
    if (error) return res.status(500).send({ "code": 1103, "msg": error });
    return res.status(200).send(results1);
  });
}

exports.getById = function (req, res) {
  db.query(Trades.getById(req.params.id), (error, results1) => {
    if (error) return res.status(500).send({ "code": 1103, "msg": error });
    return res.status(200).send(results1);
  });
}

exports.getByCategory = function (req, res) {
  db.query(Trades.getByCategory(req.body.category), (error, results1) => {
    if (error) return res.status(500).send({ "code": 1103, "msg": error });
    return res.status(200).send(results1);
  });
}

exports.add = function (req, res) {
  db.query(Trades.add(req.body.name, req.body.descricao, req.body.telefone, req.body.endereco, req.body.category), (error, results1) => {
    if (error) return res.status(500).send({ "code": 1103, "msg": error });
    return res.status(201).send(results1);
  });
}

exports.delete = function (req, res) {
  db.query(Trades.delete(req.params.id), (error, results1) => {
    if (error) return res.status(500).send({ "code": 1103, "msg": error });
    return res.status(200).send(results1);
  });
}