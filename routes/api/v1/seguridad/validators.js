const { check }= require("express-validator");
const { validateResult }= require("./validateHelper")

const validateCreate = [
    check('email').isEmail().exists().not().isEmpty(),
    check('password').isLength({min:8}).exists().not().isEmpty(),
    (req, res, next) => {
        validateResult(req, res, next);
    }
]

module.exports = {validateCreate}