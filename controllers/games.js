const Game = require('../models/game');

module.exports = {
  index,
  new: newGame, create
};


async function index(req, res) {
  const games = await Game.find({});
  console.log(games)
  res.render('games/index', { title: 'All Games', games});
  //  res.render('games/index', { games: allGames});
}

function newGame(req, res) {
  res.render('games/new', { title: 'Add Game', errorMsg: '' });
}

async function create(req, res) {
  console.log(req.body)
  try {
    await Game.create(req.body);
    res.redirect('/games/index');
  } catch (err) {
    res.render('/games/new', { errorMsg: err.message});
}
}