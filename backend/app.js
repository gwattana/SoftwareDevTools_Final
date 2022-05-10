import mongoose from "mongoose";
import express from "express";
import router from "./src/route/router.js";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser"
dotenv.config({ path: `.env` });
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//set port
const port = 3001;
app.use(cors());

app.use("/", router);

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
  })
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch((error) => {
    console.log("Error connecting to database");
    console.error(error);
    process.exit(1);
  });

app.listen(port, () => {
  console.log(`Start at port ${port}.`);
});
