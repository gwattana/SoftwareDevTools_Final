import axios from "axios";
import { falcutyModel } from "../model/modelFalcuty.js";

export const create = async (req, res) => {
  try {
    console.log(req.body);
    const createDummy = await falcutyModel.create(req.body);
    res.status(200).json(createDummy);
  } catch (err) {
    console.log(err);
  }
};

export const get = async (req, res) => {
  try {
    const { title, Date, tag, language } = req.body;
    let all = await falcutyModel.find();
    if(title !== ""){
      all = all.filter(data=>{
        if(data.name === `คณะ ${title}`){
          return true
        }
      })
      // console.log(all, "cb")
    }
    if(Date !== ""){
      all = all.filter(data=>{
        if(data.Date === Date){
          return true
        }
      })
    }
    // if(language !== ""){
    //   all.data.filter(data=>{
    //     if(data.Date.include(Date)){
    //       return true
    //     }
    //   })
    // }

    if(tag !== ""){
      if (
        all = all.filter(data=>{
          if(data.tags.includes(tag)){
            return true
          }
        })
      ) {
        return true;
      }
    }
    res.status(200).json(all);
  } catch (err) {
    console.log(err);
  }
};
