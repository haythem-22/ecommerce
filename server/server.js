require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const authRoutes = require("./routes/authRoutes")
const productRoutes = require("./routes/productRoutes")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)

mongoose.connect(process.env.DB_URI)
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log('connected to DB, listening on port: ', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })