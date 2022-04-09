import { v2 as cloudinary } from "cloudinary";

export const uploadImageCloudinary = async(filePath) => {
    return await cloudinary.uploader.upload(filePath, {
        folder: "images",
    });
};