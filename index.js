const express = require('express');
const bodyParser = require('body-parser');

const validator = require('./validator');

const app = express();

app.use(bodyParser.json());

app.post('/signin', (req, res, next) => {
  const validationResult = validator.check(req.route.path, req.body);

  if (validationResult.error) {
    res.status(400).json({
      succeed: false,
      message: validationResult.error.details
    });
  } else {
    res.json({ succeed: true });
  }
});

app.post('/signup', (req, res, next) => {
  const validationResult = validator.check(req.route.path, req.body);

  if (validationResult.error) {
    res.status(400).json({
      succeed: false,
      message: validationResult.error.details
    });
  } else {
    res.json({ succeed: true });
  }
});

app.post('/drinks', (req, res, next) => {
  const validationResult = validator.check(req.route.path, req.body);

  if (validationResult.error) {
    res.status(400).json({
      succeed: false,
      message: validationResult.error.details
    });
  } else {
    res.json({ succeed: true });
  }
});

app.post('/recieps', (req, res, next) => {
  const validationResult = validator.check(req.route.path, req.body);

  if (validationResult.error) {
    res.status(400).json({
      succeed: false,
      message: validationResult.error.details
    });
  } else {
    res.json({ succeed: true });
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
