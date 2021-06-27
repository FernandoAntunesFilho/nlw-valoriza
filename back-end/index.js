const express = require("express");
require("express-async-errors");
const app = express();
const router = require("./routes");
require("dotenv").config();

app.use(express.json());
app.use(router);

app.use((err, req, res, next) => {
  const erroMessage = err.message;
  return res.status(400).json({ message: err.message });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
