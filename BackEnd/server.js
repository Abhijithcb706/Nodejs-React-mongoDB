const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = process.env.PORT || 8000;
const data = require("./model/dataModel");
const cors = require("cors")
const app = express();
app.use(cors())




app.use(bodyParser.json());

mongoose.connect("mongodb+srv://abhijith:Abhijith2001@cluster0.ypyxvlu.mongodb.net/testData", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('DB connection successful!'));

app.post('/addData',async (req,res)=>{
    const textData = await data.create({text:req.body.text})
    console.log("data:",textData);
    res.json(textData)
})


app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
