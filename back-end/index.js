const express = require("express");
const app = express();
const router = require('./routes');

app.use(express.json());
app.use(router);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
