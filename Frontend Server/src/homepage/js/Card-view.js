import '../css/Card-view.css';
import {useHistory} from 'react-router-dom'; 

function CardView(props){ 

    var hist=useHistory();

    const Al=(caty)=>{
        hist.push('list/'+caty)
      } 

      const Categories=props.data;
        return(
            <div>
            {Categories.map((items,index)=>(
                <section className="card-container" key={index} onClick={()=>{Al(items.category)}}>                    
                    
                    <section className="card-title">
                        {items.category}
                    </section>   
                    <section className="card-image">
                        <img src={items.image} alt="card-img"/>          
                    </section>
                    <section className="card-button">
                    <button onClick={()=>Al(items.category)}>view</button>
                    </section>   
                
                </section>        
            ))} 
            </div>       
        );
    }      

export default CardView