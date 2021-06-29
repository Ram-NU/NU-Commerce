import Axios from 'axios';
 

    export const setProduct=(category)=>{
         const url='http://localhost:5000/product'
         Axios.post(url,category).then((response)=>{
         }).catch((error)=>{
             console.log(error)
         })
    }

   

    export const getProduct=async(types)=>{
      var data=''
        await Axios.get('http://localhost:5000/product/'+types).then((response)=>{
            data=response.data
        }).catch((error)=>{
            console.log(error)})
            return data
    }
