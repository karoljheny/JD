const express = require('express');

const lembreteController = require ('./controllers/lembreteController');

const router = express.Router();

router.get('/lembretes', lembreteController.getAll);

module.exports = router;