
const Game = require('../models/game');

module.exports = {
  index,
   show,
  new: newGame, 
  create
};

async function index(req, res) {
  const games = await Game.find({});
  console.log(games)
  res.render('games/index', { title: 'All Games', games});
  //  res.render('games/index', { games: allGames});
}

async function show(req, res) {
  const game = await Game.findById(req.params.id);
  res.render('games/show', { title: 'Details', game });
  console.log(req.body);
}

function newGame(req, res) {
  // Game.create(req.body);
  res.render('games/new', { title: 'Add Game', errorMsg: '' });
}

async function create(req, res) {
  try {
    console.log(req.body)
    const newGame = await Game.create(req.body);
    console.log('New game:', newGame);
    await newGame.save();
    res.redirect('/games/index');
  } catch (err) {
    res.render('games/new', { title: 'errorMsg', errMsg: err.message});
  }
}
  // async function create(req, res) {
  //   console.log(req.body)
  //   try {
  //     const game = await Game.create(req.body);
  //     res.redirect(`/games/${game._id}`);
  //   } catch (err) {
  //     res.render('/games', { errorMsg: err.message});
  // }
  // }