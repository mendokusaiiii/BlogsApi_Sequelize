const express = require('express');
const { postController } = require('../controller');
const { validateJWT } = require('../middlewares/validations');

const router = express.Router();

router.get('/', validateJWT, postController.findAllPosts);

module.exports = router;