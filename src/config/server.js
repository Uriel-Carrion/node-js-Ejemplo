const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('view', path.join(__dirname, '../app/view'));

app.use(bodyParser.urlencoded({extended: false}));

module.exports = app;