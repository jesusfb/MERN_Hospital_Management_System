import app from "./app.js";
import cloudinary from "cloudinary";
const PORT=8001;

cloudinary.v2.config({
    cloud_name:"dqy6lbmp2",
    api_key:"888593832927392",
    api_secret:"JcQrMtCfpNmTA-LNKkDVKBnlrM8",
});



app.listen(PORT,()=>{
    console.log("Server is Running on" +" " + `${PORT}`);
});