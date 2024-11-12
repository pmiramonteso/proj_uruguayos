import { body } from 'express-validator';


export const loginValidator = [
    body("email").isEmail().withMessage("Provide valid email"),
    body("password")
        .exists()
        .withMessage("Password is required")
        .isString()
        .withMessage("Password should be string")
        .isLength({ min: 6 })
        .withMessage("Password should be at least 5 characters")
]

export const registroValidator = [
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
        .custom(value => {
            if (value == '123456') {
                throw new Error('Este pass es muy basico');
            }
            return true;
        })
]

export const forgotPasswordValidator = [
    body("email").isEmail()
];

export const changePasswordValidator = [
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