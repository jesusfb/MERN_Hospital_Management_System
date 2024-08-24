import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect("mongodb+srv://aggymukul:n8AaCwleTJt4jetT@cluster0.d3r97.mongodb.net/HospitalManagementSystem", {
      dbName: "HospitalManagementSystem",
    })
    .then(() => {
      console.log("MongoDb Connected");
    })
    .catch((err) => {
      console.log("Connection to MongoDb is Unsuccessfull");
    });
};
