
var commerces = [
  {
    id: 1,
    name: 'Lanchonete top',
    description: 'Temos de tudo mesmo!',
    phone: '(83) 987654532',
    address: 'Rua jhhj, ',
    category: 'Lanchonete',
    comments: ["Excelente atendimento", "O pastel é um pouco salgado"]
  },
  {
    id: 2,
    name: 'Doceria top',
    description: 'Temos doces gostosos!',
    phone: '(83) 987654532',
    address: 'Rua jhhj, ',
    category: 'Doceria',
    comments: ["Excelente atendimento", "O preço é um pouco salgado"]
  }
]

module.exports = {
  getAll: (req, res) => {
    res.status(200).json(commerces)
  },

  getById: (req, res) => {
    var commerce = commerces[req.params.id - 1]

    res.status(200).json(commerce)
  },

  add: (req, res) => {
    var nextId = [...commerces].pop().id + 1;

    commerces.push({
      id: nextId,
      name: req.body.name,
      description: req.body.description,
      phone: req.body.phone,
      address: req.body.address,
      category: req.body.category,
    })
    res.status(201).json(nextId)
  },

  delete: (req, res) => {
    const { id } = req.params
    const removed = commerces.splice(id - 1, 1)
    res.status(200).json(removed)
  },

  update: (req, res) => {
    const { id } = req.params
    const { name, description, phone, address, category } = req.body

    commerces[id].name = name
    commerces[id].description = description
    commerces[id].phone = phone
    commerces[id].address = address
    commerces[id].category = category

    res.status(200).json(id)
  },

  getByCategory: (req, res) => {
    var commercesResponse = []
    commerces.forEach(commerce => {
      if (commerce.category === req.params.category) {
        commercesResponse.push(commerce)
      }
    })
    res.status(200).json(commercesResponse)
  },

  getComments: (req, res) => {
    var comments = commerces[req.params.commerceId - 1].comments

    res.status(200).json(comments)
  },

  addComments: (req, res) => {
    var comments = commerces[req.params.commerceId - 1].comments
    comments.push(req.body.comment)
    res.status(201).json(comments)
  }

}