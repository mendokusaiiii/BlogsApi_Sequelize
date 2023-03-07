const express = require('express');
const { categoryController } = require('../controller');
const { validateJWT } = require('../middlewares/validations');

const router = express.Router();

router.post('/', validateJWT, categoryController.createCategory);
router.get('/', validateJWT, categoryController.findAllCategories);

module.exports = router;
