const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const verifyUser = require('../middleware/verifyUser');

router.post('/register', verifyUser, authController.createUser);
router.post('/login', verifyUser, authController.userLogin);

module.exports = router;