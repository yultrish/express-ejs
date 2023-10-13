const express = require('express');
// const route = require('./route');
const bodyParser = require('body-parser');
const app = express();
const port = 3070
// require ejs layout
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const {render} = require('ejs');

// middleware
// use body-parser
app.use(bodyParser.json());

// set view engine
app.set('view engine', 'ejs');
// set layout
app.use(expressLayouts);
app.set('layout', 'layouts/main');
// global static files path
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', route);

app.get('/', (req, res) => {
    res.render('pages/index', {title: "Login"});
});

app.listen(() => {
    console.log(`Server is running on port ${port}`);
});

