import mongoose from "mongoose";

const falcutySchema = mongoose.Schema({
  title: {
    type: String,
  },
  name:{
    type: String,
  },
  description: {
    type: String,
  },
  track:{
    type: String,
  },
  tags: [
    {
      type: String,
    },
  ],
  Date: {
    type: String,
  },
  etc:{
    type:String
  }
});

export const falcutyModel = mongoose.model("falcuty", falcutySchema);
