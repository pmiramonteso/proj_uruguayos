const { Router } = require('express');
const { getNegocios, getNegocioById, addNegocio, updateNegocio, deleteNegocio } = require('../controllers/negociosController');
const { authenticateToken } = require('../middlewares/authenticateToken.js');
const { negocioValidator } = require('../validations/negocio.Validation.js');
const { idValidator } = require('../validations/generic.Validation');

const router = Router();

router.get('/', getNegocios);
router.get('/:id', idValidator, getNegocioById);
router.post('/', negocioValidator, addNegocio);
router.patch('/:id', idValidator, negocioValidator, updateNegocio);
router.delete('/:id', idValidator, deleteNegocio);

module.exports = router;