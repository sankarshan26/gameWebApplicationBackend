const mongoose = require('mongoose');

const betSchema = new mongoose.Schema({
    betId: {
        type: String,
        required: true,
        unique: true, // format will be game-id + user-id + timestamp
    }, 
    price: {
        type: Number,
        required: true,
    }
});