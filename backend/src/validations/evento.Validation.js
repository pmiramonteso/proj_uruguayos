const { body } = require('express-validator');

// Validación de los campos de los eventos
const eventoValidator = [
    body("title")
        .exists()
        .withMessage("El título del evento es obligatorio")
        .isString()
        .withMessage("El título debe ser una cadena de texto")
        .isLength({ min: 5 })
        .withMessage("El título debe tener al menos 5 caracteres"),
    
    body("date")
        .exists()
        .withMessage("La fecha del evento es obligatoria")
        .isISO8601()
        .withMessage("La fecha debe tener un formato válido (YYYY-MM-DD)"),

    body("description")
        .optional()
        .isString()
        .withMessage("La descripción debe ser una cadena de texto"),

    body("entrada")
        .exists()
        .withMessage("La entrada es obligatoria")
        .isString()
        .withMessage("La entrada debe ser una cadena de texto")
        .isIn(['gratuita', 'con precio'])
        .withMessage("La entrada debe ser 'gratuita' o 'con precio'"),

    body("precio")
        .optional()
        .isFloat({ min: 0 })
        .withMessage("El precio debe ser un número positivo"),
    
    body("ubicacion")
        .optional()
        .isString()
        .withMessage("La ubicación debe ser una cadena de texto")
];

module.exports = {
    eventoValidator
};
