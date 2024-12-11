const { Router } = require('express');
const { getDatos, getDatoById, addDato, updateDato, deleteDato, getGrafico1, getGrafico2, getGrafico3 } = require('../controllers/graficoController');
const { authenticateToken } = require('../middlewares/authenticateToken.js');
const { emigrantesValidator } = require('../validations/graficoValidation.js');
const { idValidator } = require('../validations/generic.Validation');

const router = Router();

router.get('/', getDatos);
router.get('/grafico1', getGrafico1);
router.get('/grafico2', getGrafico2);
router.get('/grafico3', getGrafico3);
router.get('/:id', idValidator, getDatoById);
router.post('/', emigrantesValidator, addDato);
router.patch('/:id', idValidator, emigrantesValidator, updateDato);
router.delete('/:id', idValidator, deleteDato);




module.exports = router;