// Definimos módulos requeridos en nuestro backend
const CSVToJSON = require("csvtojson");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();
const http = require("http");
const app = express();
const PORT = process.env.PORT || 8080;

// Definimos el uso de seguridades para atender peticiones HTTP
app.use(cors());
app.use(helmet());
app.use(morgan("combined"));

// Definimos las expresiones RegExp para hacer coincidir texto con un patrón.
// Esta RegExp nos permite eliminar las comillas entre cualquier tipo de número, ya sea float o integer
const numberRegexp = RegExp(/"[+-]?(([0-9]*[.])?[0-9]+)"/g);

// Creamos el servidor HTTP
const httpServer = http.createServer({
}, app);

//Endpoint para convertir un archivo CSV de una sola columna
app.get("/api/csvtojson/1column", async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    try {
        //Convertir archivo CSV a JSON usando la librería csvtojson
        const users = await CSVToJSON().fromFile("assets/users_1column.csv");

        //Usamos la RegExp para eliminar las comillas entre cualquier tipo de número
        users = JSON.stringify(users);
        users = users.replace(numberRegexp, '$1');
        users = JSON.parse(users);
        
        //Enviamos la respuesta
        res.status(200).json(users);
    } catch (err) {
        res.status(400);
    }
});

// Endpoint para convertir un archivo CSV multicolumna
app.get("/api/csvtojson", async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    try {
        //Convertir archivo CSV a JSON usando la librería csvtojson
        let users = await CSVToJSON().fromFile("assets/users.csv");
        
        //Usamos la RegExp para eliminar las comillas entre cualquier tipo de número
        users = JSON.stringify(users);
        users = users.replace(numberRegexp, '$1');
        users = JSON.parse(users);

        //Enviamos la respuesta
        res.status(200).json(users);
    } catch (err) {
        //En caso de error, enviamos un error 401
        res.status(400);
    }
});

// Levantamos el servidor HTTP en el puerto definido en el fichero .env o en la variable PORT
httpServer.listen(PORT, () => {
    console.log(`Server is running at URL localhost:${PORT}`);
});
