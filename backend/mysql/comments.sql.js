
const Comments = {
  getAll: "SELECT * from comentario",
  getById: (id) => { return "SELECT * FROM comentario WHERE comentarioId=" + id },
  getByTradeId: (id) => { return 'SELECT * FROM comentario WHERE comercioId=' + id },
  add: (tradeId, comment) => {
    return 'INSERT INTO comentario (comercioId, comentario) values (' + tradeId + ',"' + comment + '")'
  },
  delete: (id) => { return 'DELETE FROM comentario WHERE comentarioId=' + id }
}



module.exports = Comments