const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true },
    category:{type: Array},
    size:{type: String},
    color:{type: String},
    price:{type: Number, required: true},
    brand:{type: String, required: true},
    img:{type: String, required: true},
    inStock: {type: Boolean, default: true}
},
{
    timestamps: true
}
)

module.exports = mongoose.model("Products", ProductSchema)