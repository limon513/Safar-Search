const express = require('express');
const { BusController } = require('../../controllers');

const router = express.Router();

router.post('/',BusController.newBusRegister);

module.exports = router;