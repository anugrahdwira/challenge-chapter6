const express = require('express');
const router = express.Router();

const rootController = require('./controllers/root');

router.get('/index', rootController.index);
router.get('/game', rootController.game);
router.get('/login', rootController.login);

module.exports = router;
