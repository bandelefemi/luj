const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    fullName: {type: String, required: true },
    email: {type: String, required: true, unique: true },
    password: { type: String, required: true},
    img: {type: String},
    isAdmin: {
        type: Boolean,
        default: false
    },
},
{
    timestamps: true
}
)

module.exports = mongoose.model("Users", UserSchema)