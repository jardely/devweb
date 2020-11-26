import axios from "axios";

const URL = "http://localhost:8081/";

const connection = axios.create({
  baseURL: URL,
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

export default {
  getAll: () => connection.get("/commerce"),
  add: (commerce) => connection.post("/commerce", commerce),
  update: (commerce) => connection.put("/commerce" + commerce.id, commerce),
  delete: (id) => connection.delete("/commerce" + id),
  getById: (id) => connection.get("/commerce" + id),
  getComments: (commerceId) => connection.get(`/commerce/comments/${commerceId}`),
  addComment: (commerceId, comment) => connection.post(`/commerce/comments/${commerceId}`, comment)
};