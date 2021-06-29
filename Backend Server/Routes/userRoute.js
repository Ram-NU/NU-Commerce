const express = require("express")
const LoginModel = require("../Models/usermodel")
const app = express()

const cors=require('cors')
app.use(cors())

app.get("/login/:id", async (request, response) => {

	const credential=request.params.id
	var mail=credential.split(" ")[0]
	var password=credential.split(" ")[1]
	var result=""
	var find={Mail:mail}
	
   const login = await LoginModel.find(find);
	
	if(login.length===0){
		result="No Account"
	}
	else if(login[0].Password===password){
		result="Success"
	}
	else{
		result="Failure"
	}

   try {
     response.send(result);
   } catch (error) {
     response.status(500).send(error)
   }
 })

app.post("/login", async (request, response) => {
    const login = new LoginModel(request.body)

    try {
      await login.save()
      response.send(login)
    } catch (error) {
      response.status(500).send(error)
    }
  })

module.exports = app