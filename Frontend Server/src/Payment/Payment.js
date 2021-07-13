import React,{useState} from 'react';
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {Card,CardContent,Button,TextField} from '@material-ui/core'
import './Payment.css'
import Navigation from '../homepage/js/Navigation'
import Category from '../homepage/js/Category'
import Footer from '../homepage/js/Footer'
import {store} from '../Redux/Redux'

function Payment(props) {

  const hist=useHistory()

  const [success,changeSuccess]=useState(0)

  const [card,setCard]=useState('')
  const [expiry,setExpiry]=useState('')
  const [cvv,setCvv]=useState(0)


  const [alert,changeAlert]=useState('')

  const [name,setName]=useState('')
  const [address,setAddress]=useState('')
  const [town,setTown]=useState('')
  const [state,setState]=useState('')
  const [zipcode,setZip]=useState(0)
  const [mobile,setMobile]=useState(0)


  const Address=()=>{

    if(name===''){
      changeAlert("Name sholud have atleast 4 letters!")
    }
    else if(address===''){
      changeAlert("Please enter address!")
    }
    else if(town===''){
      changeAlert("Please enter town!")
    }
    else if(state===''){
      changeAlert("Please enter state!")
    }
    else if(isNaN(zipcode)){
      changeAlert("Zipcode must be a number!")
    }
    else if(isNaN(mobile)){
      changeAlert("Mobile must be a number!")
    }
    else{
      changeAlert('')
      changeSuccess(1)
    }
}

const payment=()=>{
  console.log(card)
  if(toString(card).length<16){
    changeAlert("Please enter correct card number!")
  }
  else if(cvv.length!==3){
    changeAlert("Please enter correct CVV number!")
  }
  else if(expiry===undefined){
    changeAlert("Please enter proper expiry!")
  }
  else{
    changeAlert("Payment Successful!")
    store.dispatch({
      type:"PAID"
    })
    hist.push('/')
  }

}

  return (
    <div className="payment">
      <Navigation />
      <Category />
      <div>
        <Card className="card-payment">
          <CardContent className="card-content">
          {success===0?<div>
          <b>Address</b><br/>
            <TextField className="text-size" placeholder="Name" variant="outlined" onChange={e => setName(e.target.value)}/><br/>
            <TextField className="text-size" placeholder="Address:" variant="outlined" onChange={e => setAddress(e.target.value)}/><br/>
            <TextField className="text-size" placeholder="Town/City" variant="outlined" onChange={e => setTown(e.target.value)} /><br/>
            <TextField className="text-size" placeholder="State" variant="outlined" onChange={e => setState(e.target.value)} /><br/>
            <TextField className="text-size" placeholder="Zipcode/Postal code" variant="outlined" onChange={e => setZip(e.target.value)} /><br/>
            <TextField className="text-size" placeholder="Mobile" variant="outlined" onChange={e => setMobile(e.target.value)} /><br/><br/>
            <Button onClick={()=>{Address()}} className="submit-button" variant="contained" color="primary">Next</Button><br/><br/>
            </div>:
            <div>
              <b>Payment Details</b><br/><br/>
              <TextField className="text-size" placeholder="Card Number" variant="outlined" onChange={e => setCard(e.target.value)}/><br/>
              <TextField className="text-size" placeholder="Expiry: MM/YYYY" variant="outlined" onChange={e => setExpiry(e.target.value)} />
              <TextField className="text-size" placeholder="CVV" variant="outlined" onChange={e => setCvv(e.target.value)} /><br/>
              <b>Total: {props.total}</b><br/><br/>
              <Button onClick={()=>{payment()}} className="submit-button" variant="contained" color="primary">Proceed to Pay</Button><br/><br/>
            </div>
            }
            {alert!==undefined?alert:''}
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );

}

const mapStateToProps=(state)=>{
    return {
      ...state
    }
}

export default connect(mapStateToProps)(Payment);