
const Trades = {
  getAll: "SELECT * from comercio",
  getById: (id) => { return "SELECT * FROM comercio WHERE comercioId=" + id },
  getByCategory: (category) => { return 'SELECT * FROM comercio WHERE categoria="' + category + '"' },
  add: (name, descricao, telefone, endereco, categoria) => {
    return 'INSERT INTO comercio (nome, descricao, telefone, endereco, categoria) values ("' + name + '","' + descricao + '",' + telefone + ',"' + endereco + '","' + categoria + '")'
  },
  delete: (id) => { return 'DELETE FROM comercio WHERE comercioId=' + id }
}

module.exports = Trades