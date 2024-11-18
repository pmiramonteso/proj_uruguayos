const { Router } = require('express');
const { getNegocios, getNegocioById, addNegocio, updateNegocio, deleteNegocio } = require('../controllers/negociosController');
const { authenticateToken } = require('../middlewares/authenticateToken.js');
const { negocioValidator } = require('../validations//negocio.Validation');
const { idValidator } = require('../validations/generic.Validation');

const router = Router();

router.get('/', authenticateToken(['user']), getNegocios);
router.get('/:id', authenticateToken(['user', 'mod', 'admin']), idValidator, getNegocioById);
router.post('/', authenticateToken(['mod', 'admin']), negocioValidator, addNegocio);
router.patch('/:id', authenticateToken(['mod', 'admin']), idValidator, negocioValidator, updateNegocio);
router.delete('/:id', authenticateToken(['admin']), idValidator, deleteNegocio);

module.exports = router;