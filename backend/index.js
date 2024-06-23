const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Initialize Passport
app.use(passport.initialize());
require('./config/passport')(passport);

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/usage', require('./routes/usage'));
app.use('/api/billing', require('./routes/billing'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
