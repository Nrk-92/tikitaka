TikiTaka E-commerce - Backend

Nota sobre la entrega

Debido a que el desarrollo de este proyecto ha coincidido con la semana de exámenes y entregas finales, no he tenido tiempo para terminar la parte del Frontend. Por lo tanto, el proyecto se centra en toda la infraestructura del Backend y la persistencia de datos, quedando la API REST totalmente operativa y testeada a través de Postman.

---

Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- /db/init.sql: Script que crea de forma automática la base de datos TikiTaka, las tablas (product, order y order_detail), define las claves foráneas e inyecta los productos iniciales.

- /backend: Contiene todo el código de la API en Node.js y Express.

- app.js: Punto de entrada del servidor donde se configuran los middlewares (CORS, JSON) y se enlazan las rutas.

- db.js: Archivo de conexión que inicializa el pool de conexiones usando mysql2/promise.

- /product y /order: Módulos separados que contienen sus propias rutas, repositorios asíncronos y formateadores de respuesta response.js.

- Dockerfile y docker-compose.yml: Archivos de configuración para contenedorizar y levantar todo el entorno local en un solo comando.

---

Requisitos de Ejecución

Es necesario tener instalado:

- Docker Desktop
- Postman (para probar los endpoints)

---

Cómo Levantar el Proyecto

Para evitar fallos con datos cacheados de pruebas anteriores, lo ideal es limpiar los volúmenes antiguos y levantar los contenedores desde cero. Abre una terminal en la raíz del proyecto y ejecuta:

   1. docker compose down -v
   2. docker compose up -d --build
