const express = require('express');
const router = express.Router();

const playersCtrl = require('../controllers/players');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET / AlL games
router.get('/', playersCtrl.index);

// GET /games/new
router.get('/new', ensureLoggedIn, playersCtrl.new);

// GET /games/:id game Details (show functionality) MUST be below new route
// router.get('/:id', gamesCtrl.show);
router.get('/:id', playersCtrl.show);

router.get('/:id/edit', playersCtrl.edit);

router.post('/', ensureLoggedIn, playersCtrl.create);

router.patch('/:id', playersCtrl.update);

router.delete('/:id',ensureLoggedIn, playersCtrl.delete);

router.post('/games/:id/players', ensureLoggedIn, playersCtrl.addToGame);

module.exports = router;