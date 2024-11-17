const { body } = require('express-validator');

const loginValidator = [
    body("email").isEmail().withMessage("Provide valid email"),
    body("password")
        .exists()
        .withMessage("Password is required")
        .isString()
        .withMessage("Password should be string")
        .isLength({ min: 6 })
        .withMessage("Password should be at least 6 characters")
];

const registroValidator = [
    body("nombre").isString(),
    body("apellidos").isString(),
    body("email").isEmail(),
    body("password")
        .exists()
        .withMessage("Password is required")
        .isString()
        .withMessage("Password should be string")
        .isLength({ min: 6 })
        .withMessage("Password should be at least 6 characters")
];

const forgotPasswordValidator = [
    body("email").isEmail()
];

const changePasswordValidator = [
    body("token")
        .exists(),
    body("password")
        .exists()
        .withMessage("Password is required")
        .isString()
        .withMessage("Password should be string")
        .isLength({ min: 6 })
        .withMessage("Password should be at least 6 characters")
];

module.exports = {
    loginValidator,
    registroValidator,
    forgotPasswordValidator,
    changePasswordValidator
};
