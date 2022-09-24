const express = require('express');
const hbs = require('express-handlebars');
const VIP = require('./VIPs')

const port = 3000;
const app = express();

app.engine("hbs", hbs.engine({ extname: "hbs" }));
app.set("view engine", "hbs");

app.get ('/', (req, res) => {
res.render('home');
});

app.get ('/register', (req, res) => {
res.render('register');
});

app.get ('/VIPs', (req, res) => {
  res.render('VIPusers', { VIP });
  });

  app.get ('/profile', (req, res) => {
    res.render('profile', { VIP });
    });

app.listen(port, () => console.log('App is listening on port 3000...'));