import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxlength: 30,
        minlength: 5,
        trim: true,
    },
    email: { type: String, required: true },
    password: { type: String, required: true },
    images: {
        type: [{ ref: "Image", type: mongoose.SchemaTypes.ObjectId }],
        default: [],
    },
});

export default mongoose.model("User", userSchema);