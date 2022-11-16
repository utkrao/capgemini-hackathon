const express = require("express")
const mongoose = require("mongoose")
const route = require('./api')
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(
  "mongodb+srv://user:user123@sdgcapgemini.d6e4ptf.mongodb.net/capgemini?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

app.use(route)

app.listen(4000, () => {
  console.log("Server is running...")
})