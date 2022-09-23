const express = require("express");
const app = express();

const items = [];
//Action: At each endpoint a func is being executed
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/catalog", (req, res) => {
  if (items.length > 0) {
    res.send(items.join(", "));
  } else res.send("No items in the store :(");
});

//Params
app.post("/catalog/:itemName", (req, res) => {
  items.push(req.params);
  const item = req.params.itemName;

  req.status(201);
  res.send(`New item was added to the catalog: ${item}`);
});

//Redirect
app.get ('/back-to-catalog', (req, res) => {
res.redirect('/catalog');

});

//download or read files inline res.download("fileName.pdf"); res.sendFile();
app.listen(5000, () => console.log("Listening on port 5000..."));
