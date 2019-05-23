const express = require('express');
const path = require('path');

const {
  env: {
    PORT: port = 8000
  }
} = process;

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist/cake')));

require('./server/config/configuration');
require('./server/config/routes')(app);

app.listen(port, () => console.log(`express server listening on port ${port}`));
