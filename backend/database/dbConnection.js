import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config({ path: "./config/config.env" });


export const dbConnection = () => {
  mongoose
    .connect(process.env.Mongo_url, {
      dbName: "HospitalManagementSystem",
    })
    .then(() => {
      console.log("MongoDb Connected");
    })
    .catch((err) => {
      console.log(err);
    });
};
