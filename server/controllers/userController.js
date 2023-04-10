const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs")

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    if(!email || !password) {
      throw Error('All fields must be filled')
    }

    const user = await User.findOne({email})
    if (!user) {
      throw Error('Incorrect Email')
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      throw Error('Incorrect password')
    }

    const token = createToken(user._id)
    res.status(200).json({email, token, userId: user._id, message:'Login successful'})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.signup(email, password)

    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = { signupUser, loginUser }