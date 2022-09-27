const express = require('express');
const cookieParser = require("cookie-parser");
const hbs = require('express-handlebars');
const app = express();
app.engine('hbs', hbs.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');

app.use(cookieParser());
app.get ('/cookie', (req, res) => {

//Setting and getting cookies:
res.cookie("key", "value");
console.log(req.cookies);

res.send('Cookie is here!');
});

//Express-Session Setup
const expressSession = require("express-session");
app.use(expressSession({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));
app.get ('/', (req, res) => {
  req.session.username = "Peter"
  res.send('Home page');
});

app.get ('/session', (req, res) => {
  res.send(req.session);
  });
app.listen(3000, () => console.log('Listening on port 3000...'));