const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Testimonial = new Schema(
    {
        content: { type: String, required: true},
        author: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = mongoose.model("testimonial", Testimonial)