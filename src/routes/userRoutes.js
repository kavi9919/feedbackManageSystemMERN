const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const verifyToken = require('../middleware/verifyToken');

router.get('/', verifyToken, userController.getAll);

module.exports = router;

