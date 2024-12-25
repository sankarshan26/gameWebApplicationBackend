const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const userRoutes = require('./routes/user');
const gameRoutes = require('./routes/game');
const app = express();
const port = 8000;

app.use(express.json());
connectDB();

app.use('/user', userRoutes);
app.use('/game', gameRoutes);

app.get('/sankarshan', (req, res) => {    
    res.send('Hello World!');
});



app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});