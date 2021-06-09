import './App.css';
import Homepage from './homepage/js/Homepage.js';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import List from './product_listing_page/js/List.js';


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

function notFound(){
  return(
    <div>404! Not Found</div>
  );
}  



function App(){

  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        
          <Route path="/" component={homepage} exact={true}/>
          <Route path="https://ram-nu.github.io/NU-Commerce/" component={homepage} exact={true}/>
          <Route path="https://ram-nu.github.io/NU-Commerce/list" component={homepage} exact={true}/>
          <Route path="/list" component={list} exact={true}/>
          <Route path="/list/:id" component={list} exact={true}/>
          <Route component={notFound}/>
       
        </Switch>  
    </BrowserRouter>
     </div>
  );
}

export default App;
