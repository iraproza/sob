const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        maxlength: [64, "Your name cannot exceed 64 characters"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your passsword"],
        minlength: [6, "Password required more then 6 characters"],
        select: false
    },
    avatar: {
        public_id:{
            type: String,
            required: true
        },
        url:{
            type: String,
            required: true
        }
    },
    role: {
        type: String,
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: {
        type: String
    }, 
    resetPasswordExpire: {
        type: Date
    }
})

userSchema.pre('save', async function (next){

    if(!this.isModified('password')){
        next();
    }
    const rounds = 10;
    this.password = await bcrypt.bash(this.password, rounds);
    next();
})

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

userSchema.methods.getJwtToken = function () {
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
        expireIn: process.env.JWT_EXPIRES_TIME
    })
}

userSchema.methods.getResetPasswordToken = function (){
    const resetToken = crypto.randomBytes(20).toString('hex');
    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    this.resetPasswordExpire = Date.now() + 30*60*1000;
    return resetToken;
}

module.exports = mongoose.model('User', userSchema) 