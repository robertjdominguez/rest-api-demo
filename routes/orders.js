// require imports
var express = require('express');
const app = express();
var orders = require('../data/orders.js');

// express route to return all item routes
const ordersRoutes = express.Router();

// GET all items
ordersRoutes.get(`/`, (req, res) => {
  res.json(orders);
});

// GET single item by id
ordersRoutes.get(`/:id`, (req, res) => {
  //   filter all users by their id and return only the information for the user with the matching id from the request
  const order = orders.find((order) => order.id === parseInt(req.params.id));
  //   return that single user
  res.json(order);
});

module.exports = ordersRoutes;
