const { postMessage, getMessages } = require('./controller/message.controller');
const router = require('express').Router();

router.post('/', postMessage);
router.get('/', getMessages);

module.exports = router;

