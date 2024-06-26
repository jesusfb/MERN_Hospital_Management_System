import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect("mongodb://localhost:27017/HOSPITAL_MANAGEMENT SYSTEM", {
      dbName: "HOSPITAL_MANAGEMENT_SYSTEM",
    })
    .then(() => {
      console.log("MongoDb Connected");
    })
    .catch((err) => {
      console.log("Connection to MongoDb is Unsuccessfull");
    });
};
