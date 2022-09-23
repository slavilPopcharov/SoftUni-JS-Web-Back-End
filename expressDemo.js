const express = require("express"); //.Router()
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
app.get("/back-to-catalog", (req, res) => {
  res.redirect("/catalog");
});

//download or read files inline res.download("fileName.pdf"); res.sendFile();

//Middlewares: has access to req,res cycle. Used in routing, auth, err handling...
//There are third-party MWs like cookieParser
// Every req wiff first pass throw this middleware
app.use((req, res, next) => {
  console.log("Time:" + Date.now());
  next();
});

const limitedItems = ["Item1","Item2","Item3",];
const itemsMiddleware = (req, res, next) =>{
  req.items = limitedItems; 
  next(); //Will point to the action!
};

//Will execute middleware befor the action. The MW is for this route only.
app.get ('/limited-items',itemsMiddleware, (req, res) => {
if (req.items.length > 0) {
  res.send(req.items.join(", "));
} else {
  res.send("No avaible items.");
} 
});

// Every req wiff first pass throw this middleware. Write before paths!!!
app.use(itemsMiddleware);

// Static files. On this route (/static) will search for the file in the publicFolder
app.use('/static', express.static('publicFolder'));

app.listen(5000, () => console.log("Listening on port 5000..."));
