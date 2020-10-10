const db = require('../../mysql/connection')
const Commerce = require('../../mysql/commerces.sql')

exports.getAll = function (req, res) {
  db.query(Commerce.getAll, (error, results1) => {
    if (error) return res.status(500).send({ "code": 1103, "msg": error });
    return res.status(200).json(results1);
  });
}

exports.getById = function (req, res) {
  db.query(Commerce.getById(req.params.id), (error, results1) => {
    if (error) return res.status(500).send({ "code": 1103, "msg": error });
    return res.status(200).send(results1);
  });
}

exports.getByCategory = function (req, res) {
  db.query(Commerce.getByCategory(req.body.category), (error, results1) => {
    if (error) return res.status(500).send({ "code": 1103, "msg": error });
    return res.status(200).send(results1);
  });
}

exports.add = function (req, res) {
  db.query(Commerce.add(req.body.name, req.body.descricao, req.body.telefone, req.body.endereco, req.body.category), (error, results1) => {
    if (error) return res.status(500).send({ "code": 1103, "msg": error });
    return res.status(201).send(results1);
  });
}

exports.delete = function (req, res) {
  db.query(Commerce.delete(req.params.id), (error, results1) => {
    if (error) return res.status(500).send({ "code": 1103, "msg": error });
    return res.status(200).send(results1);
  });
}