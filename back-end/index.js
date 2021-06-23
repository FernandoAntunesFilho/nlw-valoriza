const express = require("express");
const app = express();
const router = require('./routes');

app.use(router);

app.get("/", (req, res) => {
  res.send("Server no ar");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
