const express = require('express');
const hbs = require('express-handlebars');

const port = 3000;
const app = express();

app.engine("hbs", hbs.engine({ extname: "hbs" }));
app.set("view engine", "hbs");

app.get ('/', (req, res) => {
res.render('home');
});



app.listen(port, () => console.log('App is listening on port 3000...'));