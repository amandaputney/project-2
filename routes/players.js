const express = require('express');
const router = express.Router();

const playersCtrl = require('../controllers/players');
	
// GET / AlL games
router.get('/', playersCtrl.index);

// GET /games/new
router.get('/new', playersCtrl.new);

// GET /games/:id game Details (show functionality) MUST be below new route
// router.get('/:id', gamesCtrl.show);
router.get('/:id', playersCtrl.show);

router.get('/:id/edit', playersCtrl.edit);

// // POST /games create new gmae
router.post('/', playersCtrl.create);

router.patch('/:id', playersCtrl.update);

router.delete('/:id', playersCtrl.delete);

module.exports = router;