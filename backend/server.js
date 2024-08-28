import app from "./app.js";
import cloudinary from "cloudinary";
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: "./config/config.env" });

// Configure Cloudinary
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Start the server
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
