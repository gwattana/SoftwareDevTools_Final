import axios from "axios";
import { test } from "../model/modelTest.js";

export const create = async (req, res) => {
  try {
    const dummy = {
      title: "title1",
      description: "description",
      price: 12,
    };
    const createDummy = await test.create(
      dummy,
    );
    res.status(200).json(createDummy);
  } catch (err) {
    console.log(err);
  }
};

export const get = async(req,  res) => {
    try{
        const all = await test.find()
        res.status(200).json(all);
    }catch(err){
        console.log(err)
    }
}