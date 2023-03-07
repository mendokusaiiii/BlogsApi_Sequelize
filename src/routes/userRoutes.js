const express = require('express');
const { userController } = require('../controller');
const { validateJWT } = require('../middlewares/validations');

const router = express.Router();

router.post('/', userController.createUser);
router.get('/', validateJWT, userController.getAllUsers);
router.get('/:id', validateJWT, userController.getUsersById);

module.exports = router;