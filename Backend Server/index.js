const express=require('express')
const app = express()
const LoginRouter = require("./Routes/userRoute")
const ProductRouter = require('./Routes/productRoute')
const mongoose=require('mongoose')

app.use(express.json());

const uri='mongodb+srv://kvsp:mongodb@cluster0.2lwqv.mongodb.net/test'
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected"))


app.use(LoginRouter)
app.use(ProductRouter)
app.listen(5000, () => {
    console.log("Server is running...")
  });