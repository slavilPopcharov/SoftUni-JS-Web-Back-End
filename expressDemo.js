const express = require("express");

const app = express();

//Action: At each endpoint a func is being executed
app.get ('/', (req, res) => {
res.send('Hi');
});

app.listen(5000, () => console.log("Listening on port 5000..."));
