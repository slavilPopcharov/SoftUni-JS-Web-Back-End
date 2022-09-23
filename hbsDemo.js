const express = require("express");
const app = express();
const port = 5000;

//HBS setup: In layouts/main stits the {{{body}}} + all html, whitch is same for all pages of our app
// extname: "hbs" -> to change the main-layout ext.
const hbs = require("express-handlebars");
app.engine("hbs", hbs.engine({ extname: "hbs" }));
app.set("view engine", "hbs");

// {{#each}}
const names = [
  {firstName: "Gabriela", lastName: "Radulova"},
  {firstName: "Gabriela", lastName: "Radulova"},
  {firstName: "Gabriela", lastName: "Radulova"},
  {firstName: "Gabriela", lastName: "Radulova"},
]
app.get ('/People', (req, res) => {
res.render('people', { names } );
});


//{{#if/if-else}}
const items = [{ one: [1, 2, 3]}]
app.get ('/catalog', (req, res) => {
res.render('catalog', {items});
});


app.get("/:firstName?", (req, res) => {
  res.render("home");
});

app.listen(port, () => console.log("App is listening on port 5000..."));
