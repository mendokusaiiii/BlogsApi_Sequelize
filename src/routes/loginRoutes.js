const express = require('express');
const { userController } = require('../controller');
const { validateLogin } = require('../middlewares/validations');

const router = express.Router();

router.post('/', validateLogin, userController.userLogin);

module.exports = router;