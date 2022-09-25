const express = require("express");
const hbs = require("express-handlebars");

// MongoDB config
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
client.connect().then(() => {
  console.log("DB connected!");
});
const db = client.db("demo");
const dbColection = db.collection("demoColection");

const app = express();
const port = 3000;
app.engine("hbs", hbs.engine({ extname: "hbs" }));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home");
});

// Display colection: (colections+people.hbs)
app.get ('/colections', async (req, res) => {
  const myColection = await dbColection.find().toArray();
  res.render('colections', { myColection })  
});

app.listen(port, () => console.log("Listening on port 3000..."));
