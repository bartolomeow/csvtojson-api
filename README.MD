# 🌟 Hackathon BCN Inclusive Coding
## CSV to JSON - Backend Challenge

Este repositorio se ha desarrollado durante la Hackathon organizada por NUWE, Mobile World Capital Barcelona y Cruz Roja, donde se nos ha planteado el reto de hacer una API basada en NodeJS para convertir archivos CSV en objetos JSON más manejables.

Se espera desarrollar lo siguiente:

<details>

<summary>Click to expand!</summary>

Hay veces que los datos no siempre nos llegan como queremos. Cuando los usuarios suben datos no suelen hacerlo en json ni formatos fácilmente trabajables desde el código. Es por eso que este reto se basa en eso: crear una función que convierta un archivo CSV y devuelva un json con los datos.

Se pueden utilizar paquetes y librerías. No es necesario crear un nuevo archivo json, solo devolverlo a través de una llamada a la API.

Stack propuesto: NodeJS

</details>

## Solución y endpoints

Se ha trabajado bajo el framework ExpressJS para desarrollar la aplicación solicitada. Se trata de un framework minimalista usado en desarrollo web, concretamente en el backend. Con él, programaremos nuestra API.

Hemos desplegado dos endpoints para poder realizar las peticiones HTTP deseadas según el número de columnas del archivo CSV a convertir.

Se han dispuesto dos archivos distintos CSV, uno con una sola columna y otro con varias columnas. Realmente ambos endpoints pueden funcionar tanto con archivos CSV de una sola columna como de varias columnas, pero para mostrar el funcionamiento con un archivo con una sola columna se han dispuesto dos archivos y dos endpoints por separado.

Para solucionar el envío de números en formato number (ya sea integer o cualquier otro subtipo) se hace uso de los patrones RegExp para la extracción de los números entrecomillados.


Para archivos CSV de una sola columna:
[localhost:8080/api/csvtojson/1column](http://localhost:8080/api/csvtojson/1column)\
Para archivos CSV multicolumna: [localhost:8080/api/csvtojson](http://localhost:8080/api/csvtojson)


No es necesaria autenticación para acceder a cada uno de los endpoints al ser desplegado en local. Sin embargo, si se desea desplegar en remoto, se debe considerar implementar una solución en seguridad tal como tokens JWT para validar las peticiones.

## Herramientas de validación de código

Se valida que nuestro código es correcto con la herramienta Sonarcloud.io

![SonarCloud](https://raw.githubusercontent.com/bartolomeow/csvtojson-api/master/assets/SonarCloud.jpg)

https://sonarcloud.io/summary/overall?id=bartolomeow_csvtojson-api

No tenemos ningún bug ni Code Smells, estos han sido corregidos en el desarrollo del proyecto.

## Árbol de archivos

```
csvtojson-api
├───assets
├───examples
└───postman
```

## Stack

| Package         | Version |
| --------------- | ------- |
| express         | 4.18.1  |
| csvtojson       | 2.0.10  |
| dotenv          | 16.0.1  |
| helmet          | 5.1.0   |
| morgan          | 1.10.0  |
| helmet          | 5.1.0   |

## Ejecución del código

En la raíz del proyecto, en un PC con Node.js y npm instalados, ejecutar los siguientes comandos:

### `npm install`

Instala todos los paquetes necesarios para ejecutar la aplicación en modo local

### `node app.js`

Ejecuta la aplicación en modo desarrollo.\
Realizar las llamadas a los endpoints definidos en el apartado Solución y endpoints.

### Testing

Para ejecutar los tests en Postman, crear una nueva colección en Postman, importar el archivo \
`Hackathon carlosorsth.postman_collection.json`\
Esto nos creará la estructura para nuestras llamadas a API

Para poder importar los tests, se debe copiar y pegar el contenido del archivo\
`.postmantests`\
en el apartado Tests de Postman.
Después, podemos pulsar el botón SEND para recibir el JSON.

![Postman](https://raw.githubusercontent.com/bartolomeow/csvtojson-api/master/assets/Postman.jpg)

## Contacto

https://www.linkedin.com/in/carlospaque/

carlos@carlospaque.com

https://www.carlospaque.com



