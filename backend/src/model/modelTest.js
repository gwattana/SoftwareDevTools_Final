import mongoose from "mongoose";

const testSchema = mongoose.Schema({
  title: {
    type: String,
    
  },
  description: {
    type: String,
    
  },
  price: {
    type: Number,
    
  },
});

export const test = mongoose.model('book', testSchema)