
import './App.css';
import Counter from './counter';
import Product from './store/product';
import Todolist from './store/todolist';
import { connect } from 'react-redux';


function App(props) {
  return (
    <div className='border border-2 m-2 p-2 border-danger '> 
      <h1>cart:{props.productsReducer.cart.length}

      </h1>
     <Counter></Counter>
     <Todolist></Todolist>
    <Product></Product>
     
  
      
   
    </div>
  );
}

export default connect(store=>store)(App);
