// Load environment variables from .env file
require('dotenv').config();

const app = require("./app");
const { connectDatabase } = require("./config/database");
const cloudinary = require("cloudinary");

// Connect to the MongoDB database
connectDatabase();

// Cloudinary configuration using environment variables
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME ,
  api_key: process.env.CLOUDINARY_API_KEY ,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Start the server on the port specified in .env or default to 4000
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
