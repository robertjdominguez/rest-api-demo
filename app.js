// imports
var express = require('express');
// eventually we'll have some routes (endpoints)
var userRoutes = require('./routes/users.js');
var itemRoutes = require('./routes/items.js');
var orderRoutes = require('./routes/orders.js');

const app = express();
const port = 3000;

app.get(`/`, (req, res) => {
  res.send(`This worked!`);
});

app.use('/users', userRoutes);
app.use('/items', itemRoutes);
app.use('/orders', orderRoutes);

app.listen(3000, () => console.log(`Listening on port ${port}...`));
