import './App.css';
import Homepage from './homepage/js/Homepage.js';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import List from './product_listing_page/js/List.js';
import Productdetail from '../src/product_listing_page/Product_detail.js';
import Login from './Login/Login.js';

function homepage(){
  return(
    <div><Homepage/></div>
  );
}

function list(){
  return(
    <div><List/></div>
  );
} 

function details(){
  return(
    <div><Productdetail/></div>
  );
}

function notFound(){
  return(
    <div>404! Not Found</div>
  );
}  

const login=()=>{
  return(
    <div><Login/></div>
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
          <Route component={notFound}/>
       
        </Switch>  
    </BrowserRouter>
     </div>
  );
}

export default App;
