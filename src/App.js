import './App.css';
import Homepage from './homepage/js/Homepage';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import List from './product_listing_page/js/List';
import Productdetail from '../src/product_listing_page/Product_detail';
import Login from './Login/Login';
import Cart from './Shopping Cart/Cart'

const homepage=()=>{
  return(
    <div><Homepage/></div>
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
    <div><Login/></div>
  );
}  

const cart=()=>{
  return(
    <div><Cart/></div>
  );
}  


function App(){

  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        
          <Route path="/" component={homepage} exact={true}/>
          <Route path="/list" component={list} exact={true}/>
          <Route path="/list/:id" component={list} exact={true}/>
          <Route path="/prod" component={details} exact={true}/>
          <Route path="/login" component={login} exact={true}/>
          <Route path="/cart" component={cart} exact={true}/>
          <Route component={notFound}/>
       
        </Switch>  
    </BrowserRouter>
     </div>
  );
}

export default App;
