const { body } = require('express-validator');

// Validación de los campos de los eventos
const eventoValidator = [
    body("titulo")
        .exists()
        .withMessage("El título del evento es obligatorio")
        .isString()
        .withMessage("El título debe ser una cadena de texto")
        .isLength({ min: 5 })
        .withMessage("El título debe tener al menos 5 caracteres"),
    
    body("descripcion")
        .exists()
        .isString()
        .withMessage("La descripción debe ser una cadena de texto"),

    body("fecha")
        .exists()
        .withMessage("La fecha del evento es obligatoria")
        .isISO8601()
        .withMessage("La fecha debe tener un formato válido (YYYY-MM-DD)"),

    body("hora")
        .exists()
        .withMessage("La hora del evento es obligatoria")
        .matches(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/)
        .withMessage("La hora debe tener un formato válido (HH:mm o HH:mm:ss)"),

    body("entrada")
        .exists()
        .withMessage("La entrada es obligatoria")
        .isString()
        .withMessage("La entrada debe ser una cadena de texto")
        .isIn(['Gratuito', 'Con precio'])
        .withMessage("La entrada debe ser 'Gratuito' o 'Con precio'"),

    body("precio")
        .optional()
        .isFloat({ min: 0 })
        .withMessage("El precio debe ser un número positivo"),
    
    body("ubicacion")
        .exists()
        .isString()
        .withMessage("La ubicación debe ser una cadena de texto")
];

module.exports = {
    eventoValidator
};
