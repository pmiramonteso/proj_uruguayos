# 🇺🇾 Uruguayos en España

📄 **Descripción**  
"Uruguayos en España" es una plataforma diseñada para fortalecer los vínculos culturales de uruguayos en España. Este proyecto ofrece un espacio donde los usuarios pueden explorar eventos, negocios y un blog con noticias y contenido relacionado. Además, incluye un panel de administración para gestionar los recursos del sitio.

✨ **Características**  
- **Roles de Usuario y Administrador**: Implementación de roles con autenticación mediante tokens JWT.  
- **Gestión de Recursos**: Panel administrativo para agregar, editar o eliminar eventos, negocios y publicaciones del blog.  
- **Calendario Interactivo**: Visualización de eventos mediante FullCalendar.  
- **Mapa Interactivo**: Negocios uruguayos en España ubicados en un mapa creado con Leaflet.  
- **Blog de Noticias**: Espacio para difundir contenido variado sobre los vínculos culturales entre ambos países.  
- **Base de Datos MySQL**: Gestión de datos eficiente y robusta utilizando MySQL.  

☁️ **Interacción con la API**  
El backend del proyecto está desarrollado con Node.js y Express, permitiendo manejar las peticiones y la comunicación con la base de datos MySQL. 

💻 **Tecnologías Utilizadas**  
- **Frontend**:  
  - Angular 18  
  - Tailwind CSS  
  - SCSS  
  - FullCalendar  
  - Leaflet  

- **Backend**:  
  - Node.js  
  - Express.js  
  - MySQL  
  - JWT para autenticación  
  - Nodemon para el desarrollo  

📋 **Requisitos**  
1. **Node.js** y **npm** instalados en tu sistema. Puedes descargarlos desde [nodejs.org](https://nodejs.org/).  
2. **Angular CLI** instalado globalmente:  
   ```bash
   npm install -g @angular/cli

🛠️ **Instalación**

Clona este repositorio:
git clone https://github.com/pmiramonteso/proj_uruguayos.git

Ingresa al directorio del proyecto:
cd proj_uruguayos

Instala las dependencias del backend y frontend:
npm install
cd backend
npm install

Configura el archivo .env con los datos de tu base de datos MySQL:
env
Copiar código
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=uruguayos_en_espana
JWT_SECRET=tu_secreto_jwt

🖥️ **Ejecución**

Levanta el servidor del backend:
cd backend
npm run dev

Levanta la aplicación Angular:
cd proj_uruguayos
ng serve -o

🤝 **Contribuciones**
Si deseas colaborar en este proyecto o informar sobre problemas, crea un "issue" o envía un "pull request".

📧 **Contacto**
Paola Miramontes – pmiramonteso@gmail.com
