const mongodb=require('mongodb')
const mongoClient=mongodb.MongoClient
const  url='mongodb://127.0.0.1:27017/'
const db='login'

mongoClient.connect(url,{useNewUrlParser:true},(error,client)=>{
    if (error){
        return console.log("Error!")
    }
    console.log("connected!")    
       var dbs=client.db(db)
       var myobj = [{ mail : "vickyram2802@gmail.com", password: "NUcart" },{ mail : "yugiyuso89@gmail.com", password: "NUcart1" }];
//        dbs.collection("customers").insertMany(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("document inserted");
//         })

//   dbs.collection("customers").find({mail:'yugiyuso89@gmail.com'}).toArray((error,data)=>{ 
//     console.log(data)
//   })

  var mailid="vickyram2802@gmail.com"
  var newvalues = { $set: {password: "VR46"} };
  dbs.collection("customers").updateMany({mail:mailid},newvalues,(error,result)=>{
      if (error) throw error;
      console.log("Result:"+result)
  })
})
