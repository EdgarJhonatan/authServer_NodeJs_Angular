const express = require("express");
const cors = require("cors");
const path = require("path");
const { dbConnection } = require("./db/config");
require("dotenv").config(); //lee el archivo .env

//console.log(process.env); //todos los envirement programados

//Crear el servidor/aplicacion de express
const app = express();

//Base de datos
dbConnection();

//Directorio Público
app.use(express.static("public"));

//Cors
app.use(cors());

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use("/api/auth", require("./routes/auth"));

//Manejar demás rutas
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
