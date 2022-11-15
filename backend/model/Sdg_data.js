const mongoose = require("mongoose");

const Sdg_schema = new mongoose.Schema({
  Company_Name: String,
  Company_Industry: String,
  Company_Marketing_Units: String,
  Impact: String,
  Example_Description: String,
  Primary_SDG: String,
  Primary_Targets: String,
  Primary_Indicators: String,
  TypeofExample: String,
  Affected_Business_Process: String,
  Technology: String,
  Country_Name: String,
  Region: String,
  Business_Type: String,
  index: String,
});

module.exports = mongoose.model("sdg_data", Sdg_schema);
