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

<ul>
    <li>Para archivos CSV de una sola columna: `localhost/api/csvtojson/1column`</li>
    <li>Para archivos CSV multicolumna: `localhost/api/csvtojson`</li>
</ul>

No es necesaria autenticación para acceder a cada uno de los endpoints al ser desplegado en local. Sin embargo, si se desea desplegar en remoto, se debe considerar implementar una solución en seguridad tal como tokens JWT para validar las peticiones.

## Herramientas de validación de código

Se valida que nuestro código es correcto con la herramienta Sonarcloud.io



## Árbol de archivos

## Stack

## Ejecución del código

## Contacto

https://www.linkedin.com/in/carlospaque/

carlos@carlospaque.com

https://www.carlospaque.com



