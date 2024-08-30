const express = require('express');
const { TerminalController } = require('../../../controllers');
const {TerminalMiddleware} = require('../../../middlewares');

const router = express.Router();

router.get('/',TerminalMiddleware.getTerminalsById,TerminalController.getTerminalsById);

module.exports = router;