const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 4000;

require('./config/db');

const app = express();

const poll = require('./routes/poll');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());

app.use('/poll', poll);

app.listen(port, () => console.log(`server started on port ${port}`));