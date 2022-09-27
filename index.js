const express = require('express');
const hbs = require('express-handlebars');
const app = express();
app.engine('hbs', hbs.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');

//Setup
const expressSession = require("express-session");
app.use(expressSession({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))


app.get ('/', (req, res) => {
  req.session.username = "hello"
res.send('Home page');
});

app.get ('/s', (req, res) => {
res.send(req.session);
});





app.listen(3000, () => console.log('Listening on port 3000...'));