import './App.css';
import Homepage from './homepage/js/Homepage';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import List from './product_listing_page/js/List';
import Productdetail from '../src/product_listing_page/Product_detail';
import Login from './Login/Login';
import Cart from './Shopping Cart/Cart'
import {store} from './Redux/Redux';
import Payment from './Payment/Payment'

const homepage=()=>{
  return(
    <div><Homepage store={store}/></div>
  );
}

const list=()=>{
  return(
    <div><List/></div>
  );
} 

const details=()=>{
  return(
    <div><Productdetail/></div>
  );
}

const notFound=()=>{
  return(
    <div>404! Not Found</div>
  );
}  

const login=()=>{
  return(
    <div><Login store={store} /></div>
  );
}  

const cart=(hist1)=>{
  return(
    <div><Cart store={store} /></div>
  );
}  
 
const payment=()=>{
  return(
    <div><Payment/></div>
  );
} 


function App(){
  
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        
          <Route path="/" component={homepage} exact={true}/>
          <Route path="/list/:id" component={list} exact={true}/>
          <Route path="/prod/:id" component={details} exact={true}/>
          <Route path="/login" component={login} exact={true}/>
          <Route path="/search/" component={list} exact={true}/>
          <Route path="/cart" component={cart} exact={true}/>
          <Route path="/payment" component={payment} exact={true}/>
          <Route component={notFound}/>
       
        </Switch>  
    </BrowserRouter>
     </div>
  );
}

export default App;
