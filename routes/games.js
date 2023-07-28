const express = require('express');
const router = express.Router();

const gamesCtrl = require('../controllers/games');
	
// GET / AlL games
router.get('/', gamesCtrl.index);

// GET /games/new
router.get('/new', gamesCtrl.new);

// GET /games/:id game Details (show functionality) MUST be below new route
router.get('/:id', gamesCtrl.show);

// POST /games create new gmae
router.post('/', gamesCtrl.create);

// // PUT /games/:id Updates A specific game
// router.put('/:id', gamesCtrl.update);

// // DELETE /games/:id Deletes A specific game
router.delete('/:id', gamesCtrl.delete);
	
module.exports = router;