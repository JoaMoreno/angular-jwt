const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    name: {
        first: String,
        last: String
    },
    username: String,
    email: String,
    password: String
},{
    timestamps: true
});

module.exports = model("User", userSchema);