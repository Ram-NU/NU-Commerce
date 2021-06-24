import { createStore } from 'redux';
  

        const State={
            user:"vickyram2802@gmail.com",
            password:"Password@NU",
            isValid:"false"
        }    
        
        const reducer=(state=State,action)=>{
            switch(action.type){
                case "Login":
                    return {
                        ...state,isValid:"true"
                    } 
                case "SignUp":
                    return {
                        ...state,isValid:"false"   
                    }    
                default:
                    return state    
            }    
        }    
        
        const store=createStore(reducer);
        

export default store;

