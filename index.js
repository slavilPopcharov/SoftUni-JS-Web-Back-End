const express = require("express");
const hbs = require("express-handlebars");
const app = express();
const port = 3000;

const route = require("./controlers/routes")
app.use(express.urlencoded({extended: false}))
app.engine("hbs", hbs.engine({ extname: "hbs" }));
app.set("view engine", "hbs");

// Mongoose config:
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/demoColection";
async function main() {
  await mongoose.connect(url);
  console.log('DB connected');
};
main().catch(err => console.log(err));

// Than syntax:
// mongoose.connect(url)
//   .then( ()=> {
//     console.log("Works")
//   })
//   .catch((err)=>{
//     console.log('Errorr', err);
//   });

app.use('/', route)

app.listen(port, () => console.log("Listening on port 3000..."));
