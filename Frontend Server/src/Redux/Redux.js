import { createStore } from "redux"

const State={
    items:[],
    total:0,
    empty:true,
    isValid:false,
    mail:'',
    password:'',
    valid:''
}    

const reducer=(state=State,action)=>{
    switch(action.type){
        case 'ADD':
            return addToCart(state,action.payload) 
        case 'REMOVE':
            return removeFromCart(state,action.payload)   
        case "STATUS":
            return changeStatus(state,action.payload)   
        case "VALID":
            return valid(state,action.payload) 
        case "CREDENTIALS":
            return credentials(state,action.payload)         
        default:
            return state    
    }   
}      

export const store=createStore(reducer)

export const changeStatus=(state,status)=>{
    return {
        ...state,valid:status
    }    
}

export const valid=(state,valid)=>{
    return {
        ...state,isValid:valid,valid:"Successful!"
    }
}  

export const credentials=(state,credentials)=>{
    return {
        ...state,mail:credentials.mail,password:credentials.password
    }
}  

export const addToCart=(state,payload)=>{
    return {
        ...state,items:[...state.items,payload],empty:false,total:state.total+payload.price
    }       
}    

export const removeFromCart=(state,payload)=>{
    const items=state.items.filter(product => product.product !== payload.product)
    return {
       ...state,items:items,empty:items[0]?false:true,total:state.total-payload.price
    }    
}  
   

