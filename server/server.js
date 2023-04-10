require("dotenv").config()
const expresss = require("express")
const mongoose = require("mongoose")
const authRoutes = require("./routes/authRoutes")
const cors = require('cors')

const app = expresss()

app.use(cors())

app.use(expresss.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/auth', authRoutes)

mongoose.connect(process.env.DB_URI)
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log('connected to DB, listening on port: ', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })