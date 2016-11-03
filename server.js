'use strict';

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

app.disable('x-powered-by');

switch (app.get('env')) {
  case 'development':
    app.use(morgan('dev'));
    break;

  case 'production':
    app.use(morgan('short'));
    break;

  default:
}

// Expose public directory to client
app.use(express.static(path.join(__dirname, 'public')));

// Any other pages refer to index.html
app.use((_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log('Listening on port', port); // eslint-disable-line no-console
});

module.exports = app;
