const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const validator = require("validator")

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    }, 
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: false,
        trim: true
    },
    phone: {
        type: String,
        required: false,
        trim: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }, 
    createdAt: {
        type: Date,
        default: Date.now()
    }
})


userSchema.statics.signup = async function(email, password, name, phone) {
    if (!email || !password) {
        throw Error('All fields must be filled')
    }
    if(!validator.isEmail(email)) {
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)) {
        throw Error('Password is not strong enough')
    }

    const exists = await this.findOne({email})
    
    if(exists) {
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({email, password: hash, name: name || '', phone: phone || ''})

    return user
}

module.exports = mongoose.model('User', userSchema)

