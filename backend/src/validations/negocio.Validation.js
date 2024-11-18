const { body } = require('express-validator');

const negocioValidator = [
    body("nombre")
        .exists()
        .withMessage("El nombre es obligatorio")
        .isString()
        .withMessage("El nombre debe ser una cadena de texto")
        .isLength({ min: 3, max: 100 })
        .withMessage("El nombre debe tener entre 3 y 100 caracteres"),
    body("descripcion")
        .exists()
        .withMessage("La descripción es obligatoria")
        .isString()
        .withMessage("La descripción debe ser una cadena de texto")
        .isLength({ min: 10, max: 255 })
        .withMessage("La descripción debe tener entre 10 y 255 caracteres"),
    body("direccion")
        .optional()
        .isString()
        .withMessage("La dirección debe ser una cadena de texto")
        .isLength({ max: 200 })
        .withMessage("La dirección no puede superar los 200 caracteres"),
    body("redesSociales")
        .optional()
        .isURL()
        .withMessage("Las redes sociales deben ser una URL válida"),
    body("latitud")
        .exists()
        .withMessage("La latitud es obligatoria")
        .isDecimal()
        .withMessage("La latitud debe ser un número decimal válido"),
    body("longitud")
        .exists()
        .withMessage("La longitud es obligatoria")
        .isDecimal()
        .withMessage("La longitud debe ser un número decimal válido"),
    body("categoria")
        .exists()
        .withMessage("La categoría es obligatoria")
        .isString()
        .withMessage("La categoría debe ser una cadena de texto")
        .isIn(["restaurante", "tienda", "oficina", "otros"])
        .withMessage("La categoría debe ser una de las siguientes: restaurante, tienda, oficina, otros")
];

module.exports = {
    negocioValidator
};
