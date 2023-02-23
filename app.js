const express = require("express");
const app = express();
const morgan = require("morgan");
const usersRoutes = require("./routes/user.routes");

app.use(morgan("tiny"));
app.use(express.json());
app.use(usersRoutes);

app.listen(8000, () => {
  console.log("Servidor corriendo en el puerto 8000");
});
