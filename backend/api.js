const express = require("express");
const bodyParser = require("body-parser");
const SDG_schema = require("./model/Sdg_data");
const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post("/tp", async (req, res) => {
  console.log(req.body);
  const result = await SDG_schema.find(req.body.id);
  
  console.log(result);
  res.json(result);
});

app.get("/tp", async (req, res) => {
  console.log(req.body);
  const result = await SDG_schema.find(req.body.id);
  
  console.log(result);
  res.json(result);
});

module.exports = app;
