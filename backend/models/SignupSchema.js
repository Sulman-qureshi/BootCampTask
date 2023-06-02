const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signupSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true, 
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    resetToken:{type:String},
    expireToken:{type:Date},
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})


signupSchema.methods.generateAuthToken = async function () {
    console.log("User ID: ,",this._id.toString(), "a Secred Key ", process.env.SECRET_KEY )
    try {

        let token = jwt.sign({ _id: this._id.toString() }, process.env.SECRET_KEY);
        console.log("User Tokden Generated: ",token);
        this.tokens = this.tokens.concat({ token:token})
        await this.save();
        return token;

    } catch (err) {
        console.log(err);
    }
}
module.exports = mongoose.model('users', signupSchema);
