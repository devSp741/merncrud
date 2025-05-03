const express = require('express');
const router = express.Router();


const validate = require('../middlewares/validateMiddleware');
const { registerSchema, loginSchema } = require('../validations/authValidation');
const { register, login } = require('../controllers/authController');


// Register Route
router.post('/register', validate(registerSchema), register);

// Login Route
router.post('/login', validate(loginSchema), login);

module.exports = router;
