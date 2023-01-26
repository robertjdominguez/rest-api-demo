// require imports
var express = require('express');
const app = express();
var users = require('../data/users.js');

// express route to return all user routes
const userRoutes = express.Router();

// GET all users
userRoutes.get(`/`, (req, res) => {
  res.json(users);
});

// GET single user by id
userRoutes.get(`/:id`, (req, res) => {
  //   filter all users by their id and return only the information for the user with the matching id from the request
  const user = users.find((user) => user.id === parseInt(req.params.id));
  //   return that single user
  res.json(user);
});

module.exports = userRoutes;
