const Game = require('../models/game');

module.exports = {
  index,
  new: newGame
};


async function index(req, res) {
  const games = await Game.find({});
  res.render('games/index', { title: 'All Games', games });
}

function newGame(req, res) {
  res.render('games/new', { title: 'Add Game', errorMsg: '' });
}