const express = require('express');
const hbs = require('express-handlebars');
const app = express();
app.engine('hbs', hbs.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.listen(3000, () => console.log('Listening on port 3000...'));