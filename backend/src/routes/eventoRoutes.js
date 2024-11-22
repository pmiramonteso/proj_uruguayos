const { Router } = require('express');
const { getEventos, getEventoById, addEvento, updateEvento, deleteEvento } = require('../controllers/eventosController.js');
const { authenticateToken } = require('../middlewares/authenticateToken.js');
const { eventoValidator } = require('../validations/evento.Validation.js');
const { idValidator } = require('../validations/generic.Validation.js');

const router = Router();

// Rutas para obtener y modificar los datos de los eventos
router.get('/', authenticateToken(['user']), getEventos);
router.get('/:id', authenticateToken(['user', 'mod', 'admin']), idValidator, getEventoById);
router.post('/', authenticateToken(['user', 'mod', 'admin']), eventoValidator, addEvento);
router.patch('/:id', authenticateToken(['user', 'mod', 'admin']), idValidator, eventoValidator, updateEvento);
router.delete('/:id', authenticateToken(['user', 'mod', 'admin']), idValidator, deleteEvento);
router.get('/top-eventos', getEventos);

module.exports = router;

