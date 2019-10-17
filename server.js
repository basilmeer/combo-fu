// Fetch dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');

require('dotenv').config({ path: '.env' });

// Fetch routes
const combos = require('./routes/combos');
const games = require('./routes/games');
const platforms = require('./routes/platforms');
const users = require('./routes/users');
const auth = require('./routes/auth');

// Fetch db config
const db = require('./config/db').mongoURI;

// Init app
const app = express();

// Connect db
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

// Use middleware
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
}
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Mask the routes
app.use('/api/combos', combos);
app.use('/api/games', games);
app.use('/api/platforms', platforms);
app.use('/api/users', users);
app.use('/', auth);

if (process.env.NODE_ENV === 'production')  {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

// Set the port
const PORT = process.env.PORT || 5000;

// Listen to the port
app.listen(PORT, () => console.log(`Running a server at ${PORT}`));