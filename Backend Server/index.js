const express=require('express')
const app = express()
const LoginRouter = require("./Routes/userRoute")
const ProductRouter = require('./Routes/productRoute')
const mongoose=require('mongoose')

app.use(express.json());

const uri='mongodb+srv://ram:mongodb@cluster0.nsnj5.mongodb.net/NUcart'
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected"))


app.use(LoginRouter)
app.use(ProductRouter)
app.listen(5000, () => {
    console.log("Server is running...")
  });