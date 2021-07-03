import Axios from 'axios';
 

    export const setProduct=()=>{
         const url='http://localhost:5000/products'
         Axios.post(url,products).then((response)=>{
             console.log(response.data)
         }).catch((error)=>{
             console.log(error)
         })
    }

   

    export const getProduct=async(types)=>{
      var data=''
        await Axios.get('http://localhost:5000/products/'+types).then((response)=>{
            data=response.data
        }).catch((error)=>{
            console.log(error)})
            return data
    }

    export const getItem=async(item)=>{
        var data=''
          await Axios.get('http://localhost:5000/product/'+item).then((response)=>{
              data=response.data
          }).catch((error)=>{
              console.log(error)})
              return data
      }
