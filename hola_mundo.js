const express = require("express");
const app = express();

function obtenerMensje() {
  return "¡Hola mundo desde Node.js en la nube!";
}

function obtenerHora() {
  const ahora = new Date (); // Date()
  return ahora_tolocalString("es-PE", ( timeZone: "America/Lima"));
} 
  
app.get("/", (req, res) => {
  res.send(´$(obtener mensaje())<br>Hora actual: $(obtenerHora()}´);
});

app.get("/health",(req, res) => res.status(200).send("ok"));

conat PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
