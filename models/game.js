const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});


const gameSchema = new Schema({
  userID: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  date: {
    type: String,
    default: function () {
      return new Date().toDateString('en-US');
    },
  },
  time: String,
  eventType: {
    type: String,
    enum: ['Win', 'Loss', 'Tie', 'Pick Up Game', 'Practice', 'To Be Played', 'Canceled', 'Postponed', 'Forfeit By Home', 'Forfeit By Visitor', 'Meeting', 'Party', 'Other'],
  },
  location: String,
  finalScore: String,
  highlights: String,
  playersPresent: [{
    type: Schema.Types.ObjectId,
    ref: 'Player'
  }],
  comments: [commentSchema],
},
  {
    timestamps: true
  },
  { typeKey: '$type' }
);

module.exports = mongoose.model('Game', gameSchema);
