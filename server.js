require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

const app = express();

// middleware
app.use(cookieSession({
  name: 'session',
  keys: [process.env.SECRET_KEY || 'yeet'],
  maxAge: 24 * 60 * 60 * 1000 * 365, // 1 year
}));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// set our routes
app.use('/api', require('./routes/api'));
app.use('/pdf', require('./routes/pdf'));
app.use(require('./routes/backup'));

app.use(require('./routes/views'));

const port = process.env.PORT || 3000;
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server running on localhost:${port}`));
