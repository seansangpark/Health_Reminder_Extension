const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000 || process.env.PORT;

const logRequests = (req, res, next) => {
  console.log(`Received a ${req.method} request from ${req.path}`);
  next();
};

app.use(logRequests);
app.use(express.static('client/dist'));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
