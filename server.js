const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const { port, clientURL, dbURI, dbOpt } = require('./config/environment');

const app = express();

// db
mongoose
  .connect(dbURI, dbOpt)
  .then(() => console.log('DB connected'))
  .catch(err => console.log(err));

// import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const linkRoutes = require('./routes/link');

// app middlewares
app.use(morgan('dev'));
// app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '5mb', type: 'application/json' }));
// app.use(cors());
app.use(cors({ origin: clientURL }));

// middlewares
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', linkRoutes);

app.listen(port, () => console.log(`API is running on port ${ port }`));
