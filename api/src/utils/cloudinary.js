const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const { CLOUD_NAME, CLOUD_KEY, CLOUD_KEY_SECRET } = process.env;

cloudinary.config({
    cloud_name: CLOUD_NAME,
    cloud_key: CLOUD_KEY,
    cloud_key_secret: CLOUD_KEY_SECRET,
});

module.exports = cloudinary;
