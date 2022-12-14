const express = require('express');
const hbs = require('express-handlebars');
const app = express();
app.engine('hbs', hbs.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');

//JWT
const jwt = require('jsonwebtoken');
const payload = { username: "Peter" };
const options = { expiresIn: "2d" };
const sectret = "My personal signature"
const userJWT = jwt.sign(payload, sectret, options)

app.get ('/', (req, res) => {
res.send(userJWT);
});


//Bcrypt setup
const bcrypt = require("bcrypt");
const saltRounds = 10;
const password = '123'
const hashedPass = '$2b$10$BdlRjcUO7Ys.H.ATg/QaMeWXxVqNq83gBB73dY0cmT6TlJatua2Wa'
//Hashing a password
app.get ('/hash/:password', async(req, res) => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(req.params.password, salt)
  res.send(`password: ${req.params.password}, salt: ${salt}\nhashedPass: ${hash}`);
});

//Comparing entered from user with the hashed password
app.get ('/compare/:password', async (req, res) => {
const isVAlidPassword = await bcrypt.compare(req.params.password, hashedPass)
isVAlidPassword ? res.send("Wellcome") : res.send("Wrong password!")
});







app.listen(3000, () => console.log('Listening on port 3000...'));