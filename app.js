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

// Definimos las expresiones RegExp para hacer coincidir texto con un patrón
const validEmailRegex = RegExp(
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
);
const numberRegexp = RegExp(/"-?([0-9]+\.{0,1}[0-9]*)"/g);

// Creamos el servidor HTTP
const httpServer = http.createServer({
}, app);

//Endpoint para convertir un archivo CSV de una sola columna
app.get("/api/csvtojson/1column", async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    try {
        //Extraer 
        const users = await CSVToJSON().fromFile("users_1column.csv");
        users = JSON.stringify(users);
        users = users.replace(numberRegexp, '$1');
        users = JSON.parse(users);
        
        res.status(200).json(users);
    } catch (err) {
        res.status(401);
    }
});

// Endpoint para convertir un archivo CSV multicolumna
app.get("/api/csvtojson", async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    try {
        let users = await CSVToJSON().fromFile("users.csv");
        
        users = JSON.stringify(users);
        users = users.replace(numberRegexp, '$1');
        users = JSON.parse(users);


        res.status(200).json(users);
    } catch (err) {
        res.status(401);
    }
});

// Levantamos el servidor HTTP en el puerto definido en el fichero .env o en la variable PORT
httpServer.listen(PORT, () => {
    console.log(`Server is running at URL localhost:${PORT}`);
});
