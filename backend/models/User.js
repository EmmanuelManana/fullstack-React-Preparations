const mongoose = require("mongoose");
// destructure schema from mongoose
// const {Schema} = mongoose;

const userSchema = mongoose.Schema({
    googleId : {
        type: String,
        required: true
    }
})

// const userSchema = new Schema({
//     googleId : {
//         type: String,
//         required: true
//     }
// })

module.exports = mongoose.model('users', userSchema)