
const express = require('express');
const usercontroller = require('../controller/app');

const router = express.Router();
router.post('/AddUser',usercontroller.create);
router.get('/getlist',usercontroller.list);

module.exports = router; 
