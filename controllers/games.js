
const Game = require('../models/game');

module.exports = {
  index,
   show,
  new: newGame, 
  create,
  delete: deleteGame,
};

async function index(req, res) {
  const games = await Game.find({});
  function sortByDateDesc(a, b) {
    return new Date(b.date) - new Date(a.date);
  }
  const sortedGames = games.sort(sortByDateDesc);
  console.log(sortedGames);
  // console.log(games)
  res.render('games/index', { title: 'All Games', games});
  //  res.render('games/index', { games: allGames});
}

async function show(req, res) {
  const game = await Game.findById(req.params.id);
  res.render('games/show', { title: 'Details', game });
  // console.log(req.body);
}

function newGame(req, res) {
  // Game.create(req.body);
  res.render('games/new', { title: 'Add Game', errorMsg: '' });
}

async function create(req, res) {
  try {
    // console.log(req.body)
    const newGame = await Game.create(req.body);
    await newGame.save();
    res.redirect('/games');
  } catch (err) {
    res.render('games/new', { title: 'errorMsg', errMsg: err.message});
  }
}


  async function deleteGame(req, res) {
    try {
      const deleteThisGame = await Game.deleteOne({_id: req.params.id});
      // await deleteGame.deleteOne();
      res.redirect('/games');
    } catch (err) {
      res.render(`games/${req.params.id}`, { title: 'errorMsg', errMsg: err.message});
  }
  };


  // async function deleteGame(req, res) {
  //   try {
  //     await Game.deleteOne(req.params.id);
  //     res.redirect('/games');
  //   } catch (err) {
  //     res.render(`games/${Game._id}`, { title: 'errorMsg', errMsg: err.message});
  // }
  // };