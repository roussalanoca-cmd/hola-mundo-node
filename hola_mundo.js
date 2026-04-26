const app = require("express")();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
