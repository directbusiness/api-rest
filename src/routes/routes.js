const express = require('express');
const route = express.Router();

const routeUsers = require('../controllers/UserController');
const routePosts = require('../controllers/PostController');

route.get('/users', routeUsers.listUsers);
route.get('/users/:id', routeUsers.listUserID);
route.get('/posts', routePosts.listPosts);
route.get('/posts/:id', routePosts.listPostID);


module.exports = route;