const { Router } = require('express');
const { getEventos, getEventoById, addEvento, updateEvento, deleteEvento } = require('../controllers/eventosController.js');
const { authenticateToken } = require('../middlewares/authenticateToken.js');
const { eventoValidator } = require('../validations/evento.Validation.js');
const { idValidator } = require('../validations/generic.Validation.js');

const router = Router();

// Rutas para obtener y modificar los datos de los eventos
router.get('/', getEventos);
router.get('/:id', idValidator, getEventoById);
router.post('/',  eventoValidator, addEvento);
router.patch('/:id',  idValidator, eventoValidator, updateEvento);
router.delete('/:id', authenticateToken(['admin']), idValidator, deleteEvento);

module.exports = router;

