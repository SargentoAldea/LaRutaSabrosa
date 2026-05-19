# LaRutaSabrosa
Certamen 2: Backend - Angular
Julián Chirino
19-05-2026

¿Qué hace cada parte de este trabajo?

De forma simple:
Esta solución se organizó en las siguientes carpetas dentro del directorio de Backend

Database: Contiene el archivo db.js gracias al cual se permite la conexión con la base de datos MySQL utilizando el paquete nativo "mysql2".

Routes: Aqui estan las puertas para entrar al sistema, aqui es donde se definen los endpoints y los metodos HTTP, posteriormente lo que haga cada metodo 
se le delega a Controllers.

Controllers: En esta carpeta estan los archivos que redactan y ejecutan las consultas SQL hacia la base de datos, tambien es aqui donde se gestionan las
respuestas del servidor.

Index: El archivo principal encargado de "encender", este inicia Express, configura los middlewares globales y escucha en el puerto 3000

Como se puede apreciar, se cuenta con una arquitectura mucho más modular que deja marcada una separación de responsabilidades, con ello se logra un código 
más limpio, facil de mantener y escalable en el futuro
