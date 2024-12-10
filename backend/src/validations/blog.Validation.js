const { body } = require('express-validator');

// Validación de los campos de las publicaciones del blog
const blogValidator = [
    body("titulo")
        .exists()
        .withMessage("El título es obligatorio")
        .isString()
        .withMessage("El título debe ser una cadena de texto")
        .isLength({ min: 5 })
        .withMessage("El título debe tener al menos 5 caracteres"),

    body("contenido")
        .exists()
        .withMessage("El contenido es obligatorio")
        .isString()
        .withMessage("El contenido debe ser una cadena de texto")
        .isLength({ min: 20 })
        .withMessage("El contenido debe tener al menos 20 caracteres"),

    body("categoria")
        .optional()
        .isString()
        .withMessage("La categoría debe ser una cadena de texto")
        .isLength({ max: 50 })
        .withMessage("La categoría no debe exceder los 50 caracteres"),

    body("status")
        .optional()
        .isBoolean()
        .withMessage("El estado debe ser un valor booleano (true o false)"),
];

module.exports = {
    blogValidator
};
