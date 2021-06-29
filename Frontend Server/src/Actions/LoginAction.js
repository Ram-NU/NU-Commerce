import Axios from 'axios'
import {store} from '../Redux/Redux'

export const signup=(mail,password)=>{
    const url="http://localhost:5000/login"
    const data={ Mail:mail, Password:password }
    Axios.post(url,
        data
    ).then(()=>{
        store.dispatch({
            type:"VALID",
            payload:true

        })
    }).catch((error)=>console.log("Failed to Send!"))
      
}      
export const login=(mail,password)=>{
    const url="http://localhost:5000/login/"+mail+" "+password
    Axios.get(url).then((response)=>{
         const result=response.data
         switch(result){
            case "Success":
                store.dispatch({
                    type:"STATUS",
                    payload:"Sucessful!"
                })
                break
            case "Failure":
                store.dispatch({
                    type:"STATUS",
                    payload:"Enter Correct Password!"
                }) 
                break
            case "No Account":    
                store.dispatch({
                    type:"STATUS",
                    payload:"Account Not Found!"
                })
                break 
            default:
                store.dispatch({
                    type:"STATUS",
                    payload:"Account Not Found!"
                })     
         }
     }).catch((error)=>{console.log(error)})
}     