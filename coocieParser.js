const express = require('express');
const cookieParser = require("cookie-parser");
const hbs = require('express-handlebars');
const app = express();
app.engine('hbs', hbs.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');

app.use(cookieParser());
app.get ('/', (req, res) => {

//Setting and getting cookies:
res.cookie("key", "value");
console.log(req.cookies);

res.send('Home is here!');
});

app.get ('/cats', (req, res) => {
res.send('Cats are here!');
});


app.listen(3000, () => console.log('Listening on port 3000...'));