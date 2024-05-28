import React from "react";
import { connect } from "react-redux";

function Counter(props){
    console.log(props)
    
    return (
        <div className="border border-2 border-info m-2 p-2">
            <h1>counter:{props.counterReducer.count}</h1>
            <button className="m-2" onClick={()=>{props.dispatch({type:"INC"})}}>increment</button>
            <button className="m-2" onClick={()=>{props.dispatch({type:"DEC"})}}>decrement</button>
             
            
        </div>
    )
}
export default connect(function (store){return store})(Counter)