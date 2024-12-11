const { body } = require('express-validator');

const emigrantesValidator = [
    body("año")
        .exists()
        .withMessage("El año es obligatorio")
        .isInt({ min: 1900, max: new Date().getFullYear() })
        .withMessage("El año debe ser un número válido entre 1900 y el año actual"),
    body("emigrantes_hombres")
        .optional()
        .isInt()
        .withMessage("El número de emigrantes hombres debe ser un número entero"),
    body("emigrantes_mujeres")
        .optional()
        .isInt()
        .withMessage("El número de emigrantes mujeres debe ser un número entero"),
    body("total_emigrantes_españa")
        .optional()
        .isInt()
        .withMessage("El total de emigrantes en España debe ser un número entero"),
    body("total_emigrantes_mundo")
        .optional()
        .isInt()
        .withMessage("El total de emigrantes en el mundo debe ser un número entero"),
    body("pais_destino")
        .exists()
        .withMessage("El país destino es obligatorio")
        .isString()
        .withMessage("El país destino debe ser una cadena de texto")
        .isLength({ min: 2, max: 100 })
        .withMessage("El país destino debe tener entre 2 y 100 caracteres"),
    body("nacionalidad")
        .optional()
        .isString()
        .withMessage("La nacionalidad debe ser una cadena de texto")
        .isLength({ min: 2, max: 50 })
        .withMessage("La nacionalidad debe tener entre 2 y 50 caracteres"),
    body("provincia_destino")
        .optional()
        .isString()
        .withMessage("La provincia destino debe ser una cadena de texto")
        .isLength({ min: 2, max: 100 })
        .withMessage("La provincia destino debe tener entre 2 y 100 caracteres"),
];

module.exports = {
    emigrantesValidator
};
