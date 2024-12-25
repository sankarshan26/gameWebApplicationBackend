const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

//create a new game session
router.get('/create', gameController.createNewGame);

// fetch the list of all sessions of game
router.get('/', gameController.getAllGames);


module.exports = router;