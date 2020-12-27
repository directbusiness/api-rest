const express = require('express');
const route = express.Router();

const routeUsers = require('../controllers/UserController');
const routePosts = require('../controllers/PostController');
const routeCompany = require('../controllers/CompanyController');

route.get('/users', routeUsers.listUsers);
route.get('/users/:id', routeUsers.listUserID);
route.post('/users', routeUsers.createUser);
route.put('/users/:id', routeUsers.updateUserID);
route.delete('/users/:id', routeUsers.deleteUserID);

route.get('/posts', routePosts.listPosts);
route.get('/posts/:id', routePosts.listPostID);
route.post('/posts', routePosts.createPost);
route.put('/posts/:id', routePosts.updatePostID);
route.delete('/posts/:id', routePosts.deletePostID);

route.get('/company', routeCompany.listCompany);
route.post('/company/insert', routeCompany.createCompany);


module.exports = route;