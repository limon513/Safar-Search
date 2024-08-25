const express = require('express');
const { BusController } = require('../../controllers');
const { BusMiddleware } = require('../../middlewares');

const router = express.Router();

router.post('/',BusMiddleware.newBusRegister,BusController.newBusRegister);

module.exports = router;