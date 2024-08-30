const express = require('express');
const { TerminalController } = require('../../../controllers');
const {TerminalMiddleware} = require('../../../middlewares');

const router = express.Router();

router.get('/byCity',TerminalMiddleware.getTerminalByCity,TerminalController.getTerminalByCity);

module.exports = router;