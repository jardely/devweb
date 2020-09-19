const db = require('../../mysql/connection')
const Comments = require('../../mysql/comments.sql')

exports.getAll = function (req, res) {
  db.query(Comments.getAll, (error, results1) => {
    console.log(error);
    if (error) return res.status(500).send({ "code": 1103, "msg": error });
    return res.status(200).send(results1);
  });
}

exports.getById = function (req, res) {
  db.query(Comments.getById(req.params.id), (error, results1) => {
    if (error) return res.status(500).send({ "code": 1103, "msg": error });
    return res.status(200).send(results1);
  });
}

exports.getByTradeId = function (req, res) {
  console.log(req.params.id)
  db.query(Comments.getByTradeId(req.params.tradeId), (error, results1) => {
    if (error) return res.status(500).send({ "code": 1103, "msg": error });
    return res.status(200).send(results1);
  });
}

exports.add = function (req, res) {
  db.query(Comments.add(req.body.tradeId, req.body.comment), (error, results1) => {
    if (error) return res.status(500).send({ "code": 1103, "msg": error });
    return res.status(201).send(results1);
  });
}

exports.delete = function (req, res) {
  db.query(Comments.delete(req.params.id), (error, results1) => {
    if (error) return res.status(500).send({ "code": 1103, "msg": error });
    return res.status(200).send(results1);
  });
}