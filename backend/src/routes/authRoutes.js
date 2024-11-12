// src/routes/authRoutes.js
import { Router } from 'express';
import { registro, login, logout, forgotPassword, changePassword } from '../controllers/authController.js';
import { registroValidator, loginValidator, forgotPasswordValidator, changePasswordValidator } from '../validations/auth.Validation.js'

const router = Router();

// Rutas para registrarse e iniciar sesión
router.post('/registro', registroValidator, registro);
router.post('/login', loginValidator, login);
router.post('/forgot-password', forgotPasswordValidator, forgotPassword);
router.post('/change-password', changePasswordValidator, changePassword);
router.get('/logout', logout);

export default router;