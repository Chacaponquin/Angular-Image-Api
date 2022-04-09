import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: "chaca-sa",
    api_key: "789598546412661",
    api_secret: process.env.CLAUDINARY_API_SECRET,
});