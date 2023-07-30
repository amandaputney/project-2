const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playerSchema = new Schema({
    userID: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
        }],
    name: String,
    nickName: String,
    position: String,
    team: String,
    bats: {
            type: String, 
            enum: ['Right', 'Left', 'Switch Hitter'],
        },
    throws: {
            type: String, 
            enum: ['Right', 'Left', 'Switch Pitcher'],
        },
    height: String,
    weight: String, 
    birthDate: String,
    birthPlace: String,
    joinedTeam: String,
    atBats: Number,
    homeRuns: Number,
    runsBattedIn: Number,
    onBasePercentage: Number,
    active: { type: Boolean},
    }, {
        timestamps: true
    },
    { typeKey: '$type' }
    );

module.exports = mongoose.model('Player', playerSchema);