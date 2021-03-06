const express = require('express');
const { getMessages, createMessage } = require('../controllers/mFlowControllers');
const router = express.Router();

router.get('/', getMessages)
router.post('/', createMessage)

module.exports = router;