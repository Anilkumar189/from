import React from "react";
function Counter(){
    function inc(){
     setCounter(counter+1)
     }
    function dec(){
        setCounter(counter-1)
    }
    function res(){
        setCounter(counter=0)
    }
 
    var[counter,setCounter]= React.useState(0);
    return <div>
    <h1>Counter:{counter}</h1>
    <button onClick={()=>{inc()}}>increment</button>
    <button onClick={()=>{dec()}}>decrement</button>
    <button onClick={()=>{res()}}>reset</button>
    </div>
}

export default Counter