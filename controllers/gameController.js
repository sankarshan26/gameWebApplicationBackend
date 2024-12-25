const Game = require('../models/Game');

const dummyData = {
    gameId: 'game123',
    gameDuration: 3,
    colorOptions: ['Red', 'Green', 'Blue'],
    winningColor: 'Green',
    votes: [
      {
        color: 'Red',
        betIds: ['bet1', 'bet2'],
        totalPrice: 150,
        users: ['user1', 'user2'],
      },
      {
        color: 'Green',
        betIds: ['bet3', 'bet4'],
        totalPrice: 200,
        users: ['user3', 'user4'],
      },
      {
        color: 'Blue',
        betIds: ['bet5'],
        totalPrice: 100,
        users: ['user5'],
      },
    ],
    usersPlayed: ['user1', 'user2', 'user3', 'user4', 'user5'],
    status: 'completed',
    winners: ['user3', 'user4'], // Users who bet on the winning color (Green)
  };
  
//create a new game
exports.createNewGame = async (req, res) => {
    const newGame = new Game(dummyData);
    try {
        await newGame.save();
        res.status(201).json(newGame);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating new game' });
    }
}

//fetch the list of all games 
exports.getAllGames = async (req, res) => {
    try {
        const games = await Game.find();
        res.status(200).json(games);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching games sessions' });
    }
}

//update wining color
exports.updateWiningColor = async (req, res) => {
    try {
        const {gameId, color} = req.body;
        const game = await Game.findById(gameId);
        if (!game) {
            return res.status(404).json({ message: 'Game not found' });
        }
        if (game.status === 'completed') {
            return res.status(400).json({ message: 'Game already completed' });
        }
        if (!game.colorOptions.includes(color)) {
            return res.status(400).json({ message: 'Invalid color' });
        }
        game.winningColor = color;
        await game.save();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Some error occured while updating winning color for Game' });
    }
}

exports.generateWiningColor = async (req, res) => {
    try {

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Some error occured while generating winning color for Game' });
    }
}