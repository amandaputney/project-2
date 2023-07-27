const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameSchema = new Schema({
  userID: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
    }],
  date: String,
  time: String,
  eventType: {
        type: String, 
        enum: ['Win', 'Loss', 'Tie', 'Pick Up Game', 'Practice', 'To Be Played', 'Canceled', 'Postponed','Forfeit By Home', 'Forfeit By Visitor', 'Meeting', 'Party', 'Other'],
    },
  location: String,
  players: [{
    type: Schema.Types.ObjectId,
    ref: 'Player'
     }],
}, {
    timestamps: true
});

module.exports = mongoose.model('Game', gameSchema);