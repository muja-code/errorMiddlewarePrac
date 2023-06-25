const express = require('express');
const app = express();

const postController = require('./controllers/post.controller');
const errorMiddleware = require('./middlewares/error.middleware');

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// home page route
app.get('/', function (req, res) {
    return res.send({ error: false, message: 'Welcome to simple board app.' })
});

app.get('/posts', postController.getPosts);
app.get('/posts/:id', postController.getPostById);
app.post('/post', postController.createPost);

// Exception Middleware
app.use(errorMiddleware);

// set port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});

module.exports = app;
