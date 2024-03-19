const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    
  },
});
module.exports=mongoose.model('data',dataSchema)