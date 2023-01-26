// require imports
var express = require('express');
const app = express();
var items = require('../data/items.js');

// express route to return all item routes
const itemsRoutes = express.Router();

// GET all items
itemsRoutes.get(`/`, (req, res) => {
  res.json(items);
});

// GET single item by id
itemsRoutes.get(`/:id`, (req, res) => {
  //   filter all users by their id and return only the information for the user with the matching id from the request
  const item = items.find((item) => item.id === parseInt(req.params.id));
  //   return that single user
  res.json(item);
});

module.exports = itemsRoutes;
