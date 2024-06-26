import app from "./app.js";
import cloudinary from "cloudinary";
const PORT=8001;

cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_SECRET,
    api_secret:process.env.CLOUDINARY_API_KEY,
});



app.listen(PORT,()=>{
    console.log("Server is Running on" +" " + `${PORT}`);
});