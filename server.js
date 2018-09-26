const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/user');
const profiles = require('./routes/api/profile');
const posts = require('./routes/api/post');

const app = express();

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDb
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello there!'));

// Use Routes
app.use('/api/users', users);
app.use('/api/profiles', profiles);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));