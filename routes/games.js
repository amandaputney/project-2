const express = require('express');
const router = express.Router();

const gamesCtrl = require('../controllers/games');
const ensureLoggedIn = require('../config/ensureLoggedIn');
	
// GET / AlL games
router.get('/', gamesCtrl.index);

// GET /games/new
router.get('/new', ensureLoggedIn, gamesCtrl.new);

// router.get('/new', ensureLoggedIn, gamesCtrl.new);


// GET /games/:id game Details (show functionality) MUST be below new route
router.get('/:id', gamesCtrl.show);

router.get('/:id/edit', gamesCtrl.edit);

// POST /games create new gmae
// router.post('/', gamesCtrl.create);

// // PUT /games/:id Updates A specific game
router.patch('/:id', gamesCtrl.update);

router.post('/', ensureLoggedIn, gamesCtrl.create);


// // DELETE /games/:id Deletes A specific game
router.delete('/:id', gamesCtrl.delete);

	
module.exports = router;