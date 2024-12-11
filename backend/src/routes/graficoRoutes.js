const { Router } = require('express');
const { getDatos, getDatoById, addDato, updateDato, deleteDato } = require('../controllers/graficoController');
const { authenticateToken } = require('../middlewares/authenticateToken.js');
const { emigrantesValidator } = require('../validations/graficoValidation.js');
const { idValidator } = require('../validations/generic.Validation');

const router = Router();

router.get('/', getDatos);
router.get('/:id', idValidator, getDatoById);
router.post('/', emigrantesValidator, addDato);
router.patch('/:id', idValidator, emigrantesValidator, updateDato);
router.delete('/:id', idValidator, deleteDato);

module.exports = router;