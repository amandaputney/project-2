const Game = require('../models/game');

module.exports = {
  create, delete: deleteComment
};

async function create(req, res) {
  const game = await Game.findById(req.params.id);

  // Adds the user-centric info to req.body 
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;


  game.comments.push(req.body);
  try {
    await game.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/games/${game._id}`);
}

async function deleteComment(req, res) {
  const game = await Game.findOne({ 'comments._id': req.params.id, 'comments.user': req.user._id });
  // not logged in
  if (!game) return res.redirect('/games');
  // Remove the comment 
  game.comments.remove(req.params.id);
  // Save the updated  doc
  await game.save();
  // Redirect back to show view
  res.redirect(`/games/${game._id}`);
}