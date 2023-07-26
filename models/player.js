const { ObjectId } = require('mongodb');
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playerSchema = new Schema({
//     gameID: ObjectId,
//     userID: [{
//     type: Schema.Types.ObjectId,
//     ref: 'User'
//   }],
//     date: Date,
//     eventType: {
//         type: String, 
//         enum: ['Win', 'Loss', 'Tie', 'Pick Up Game', 'Practice', 'To Be Played', 'Canceled', 'Postponed','Forfeit By Home', 'Forfeit By Visitor', 'Meeting', 'Party', 'Other']
//     },
//     players: [{
//     type: Schema.Types.ObjectId,
//     ref: 'Player'
//   }],

}, {
    timestamps: true
});

module.exports = mongoose.model('Player', playerSchema);