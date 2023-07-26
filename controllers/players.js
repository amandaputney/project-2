const Player = require('../models/player');

module.exports = {
  index,
  new: newPlayer
};


async function index(req, res) {
  const players = await Player.find({});
  res.render('players/index', { title: 'All Players', players });
}

function newPlayer(req, res) {
  res.render('players/new', { title: 'Add Player', errorMsg: '' });
}