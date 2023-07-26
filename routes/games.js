const express = require('express');
const router = express.Router();

const gamesCtrl = require('../controllers/games');
	
// GET /games
router.get('/', gamesCtrl.index);
// GET /games/new
router.get('/new', gamesCtrl.new);
// GET /games/:id (show functionality) MUST be below new route
router.get('/:id', gamesCtrl.show);
// POST /games
router.post('/', gamesCtrl.create);
	
module.exports = router;