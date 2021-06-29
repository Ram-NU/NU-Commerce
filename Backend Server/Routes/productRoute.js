const express= require('express')
const ProductModel=require('../Models/productModel')
const app=express()

const cors=require('cors')

app.use(cors())

app.post('/product',async(request,response)=>{
    const product= new ProductModel(request.body)
        console.log(request.body)
    try{
        await product.save()
        response.send(product)
    }
    catch(error){
        response.status(500).send(error)
    }
})

app.get('/product/:id',async(request,response)=>{
    const data=request.params.id
    const product=await ProductModel.find({type:data})
        console.log(product)

        try{
            response.send(product)
        }
        catch(error){
            response.status(500).send(error)
        }
})

module.exports= app