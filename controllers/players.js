const Player = require('../models/player');
const Game = require('../models/game');

module.exports = {
  index,
  new: newPlayer,
  create,
  show, update,
  edit,
  delete: deletePlayer,
  addToGame
};

async function addToGame(req, res) {
  const game = await Game.findById(req.params.id);
  // The player array holds the player's ObjectId (referencing)
  game.playersPresent.push(req.body.playerId);
  await game.save();
  res.redirect(`/games/${game._id}`);
}

async function index(req, res) {
  const players = await Player.find({}).sort('name');;
  res.render('players/index', { title: 'All Players', players });
}

async function update(req, res) {
  try {
    const updatePlayer = await Player.findOneAndUpdate({ _id: req.params.id }, req.body);
    console.log(updatePlayer);
    res.redirect(`/players/${req.params.id}`);
  } catch (err) {
    // res.redirect(`/games/${req.params.id}`, { title: 'errorMsg', errMsg: err.message});
    res.send(err)
  }
}

async function edit(req, res) {
  try {
    const editPlayer = await Player.findById(req.params.id);
    res.render('players/edit', { title: 'Edit Player', player: editPlayer });
    //  console.log('LOOK HERE: ', editGame);
  } catch (err) {
    res.render(`players/${req.params.id}`, { title: 'errorMsg', errMsg: err.message });

  }
}

function newPlayer(req, res) {
  res.render('players/new', { title: 'Add Player', errorMsg: '' });
}

async function create(req, res) {
  // //converts checkbox to bolean
  // req.body.active = !!req.body.active;
  // // Remove empty properties so that defaults will be applied
  // for (let key in req.body) {
  //   if (req.body[key] === '') delete req.body[key];
  // }
  try {
    console.log(req.body)
    const newPlayer = await Player.create(req.body);
    await newPlayer.save();
    res.redirect('/players');
  } catch (err) {
    res.render('players/new', { title: 'errorMsg', errMsg: err.message });
  }
}

async function show(req, res) {
  const player = await Player.findById(req.params.id);
  res.render('players/show', { title: 'Details', player });
  // console.log(req.body);
}

async function deletePlayer(req, res) {
  try {
    const deleteThisPlayer = await Player.deleteOne({ _id: req.params.id });
    res.redirect('/players');
  } catch (err) {
    res.render(`players/${req.params.id}`, { title: 'errorMsg', errMsg: err.message });
  }
}