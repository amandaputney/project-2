
const Game = require('../models/game');

module.exports = {
  index,
   show,
  new: newGame, 
  create,
  delete: deleteGame,
  edit,
  update
};

async function index(req, res) {
  const games = await Game.find({});
  function sortByDateDesc(a, b) {
    return new Date(b.date) - new Date(a.date);
  }
  const sortedGames = games.sort(sortByDateDesc);
  res.render('games/index', { title: 'All Games', games});

}


async function update(req, res) {
  try {
    // const updateGame= await Game.update(req.params.id, req.body);
    const updateGame= await Game.findOneAndUpdate({_id: req.params.id}, req.body);
    // await updateGame.save();
    console.log(updateGame);
    res.redirect(`/games/${req.params.id}`);
  } catch (err) {
      // res.redirect(`/games/${req.params.id}`, { title: 'errorMsg', errMsg: err.message});
      res.send(err)
  }
  }
//findoneandupdate

async function edit(req, res) {
 try {
   const editGame = await Game.findById(req.params.id);
   res.render('games/edit', { title: 'Edit Game', game: editGame});
  //  console.log('LOOK HERE: ', editGame);
 } catch (err) {
       res.render(`games/${req.params.id}`, { title: 'errorMsg', errMsg: err.message});

 }
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
      res.redirect('/games');
    } catch (err) {
      res.render(`games/${req.params.id}`, { title: 'errorMsg', errMsg: err.message});
  }
  }


//  async function edit(req, res) {
//   try {
//     const editGame = await Game.getOne({_id: req.params.id});
//     res.render(`games/${req.params.id}/edit`, { title: 'Edit Game', editGame});
//   } catch (err) {
//         res.render(`games/${req.params.id}`, { title: 'errorMsg', errMsg: err.message});

//   }
// };

