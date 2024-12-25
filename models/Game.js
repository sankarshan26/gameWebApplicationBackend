const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
    color: {
        type: String,
        required: true,
    },
    betIds: {
        type: Array,
        required: true,
        unique: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    users: {
        type: Array,
        required: true,
    }
});
const gameSchema = new mongoose.Schema({
    gameId: {
        type: String,
        required: true,
        unique: true,
    },
    gameDuration: {
        type: Number,
        required: true,
        enum: [1, 3, 5],
    }, 
    colorOptions: {
        type: Array,
        required: true,
    },
    winningColor: {
        //  can be overriden by admin panel for any game.
        type: String,
        required: true,
    },
    votes: {
        type: [voteSchema],
        required: true,
    },
    // to keep track of all the users who have played this game
    usersPlayed:{
        type: Array,
        required: true,
    },
    status:{
        type: String,
        required: true,
        enum: ['active', 'completed'],
        default: 'active',
    },
    winners: {
        type: Array,
        required: true,
    }
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;