import mongoose from "mongoose";
import express from "express";
import router from "./src/route/router.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: `.env` });
const app = express();
//set port
const port = 8080;
app.use(cors());

app.use("/test", router);

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

// app.listen(port, () => {
//   console.log(`Start at port ${port}.`);
// });
