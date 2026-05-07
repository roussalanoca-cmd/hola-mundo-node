const express = require("express");
const app = express();

function obtenerMensje() {
return "¡Hola mundo desde Node.js en la nube!;
}

app.get("/", (req, res) => {
  res.send(obtener mensaje());
});

conat PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
