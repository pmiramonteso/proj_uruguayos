const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors'); //para poder hacer puts, y tal desde el cliente al servidor
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const testRoutes = require('./routes/testRoutes');
const negociosRoutes = require('./routes/negociosRoutes');
const { testConnection } = require('./db');
const dotenv = require('dotenv');
const { insertInitialUserData } = require('./start_data');
dotenv.config();

const app = express();

// Configura el middleware CORS para que peuda recibir solicitudes de POST, PUT, DELETE, UPDATE, etc.
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true,
}));

//header and populate req.cookies with an object keyed by the cookie names
app.use(cookieParser());

// Middleware para analizar el cuerpo de las solicitudes con formato JSON
app.use(express.json());

// Middleware para analizar el cuerpo de las solicitudes con datos de formulario
app.use(express.urlencoded({ extended: true })); // Para analizar datos de formularios en el cuerpo de la solicitud

(async () => {
  await testConnection();
  await insertInitialUserData();
})();

// Configurar rutas
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/book', bookRoutes);
app.use('/test', testRoutes);
app.use('/negocios', negociosRoutes);

// Iniciar el servidor
app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});
