const express = require("express");

const app = express();

//Action: At each endpoint a func is being executed
app.get ('/', (req, res) => {
res.send('Home Page');
});

app.get ('/catalog', (req, res) => {
res.send('Catalog Page');

});

//Params
const items = [];

app.post ('/catalog/:itemName', (req, res) => {
items.push(req.params);
const item = req.params.itemName;

req.status(201);
res.send(`New item was added to the catalog: ${item}`);
});




app.listen(5000, () => console.log("Listening on port 5000..."));
