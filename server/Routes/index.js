const express = require('express');
const UserLoginController = require('../Controller/Login');
const UserSignupController = require('../Controller/Signup');
const router = express.Router();

router.post('/login', UserLoginController);
router.post('/signup', UserSignupController);


export default router;