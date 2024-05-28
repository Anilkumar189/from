import React, { useState } from "react";
import { connect } from "react-redux";

function Todolist(props){
    var [newtodo,setNewtodo]=useState("")
    console.log("props inside todolist",props)
    return (
        <div className="border border-2 border-primary m-2 p-2">
         <h1>Todolist</h1>
         <input type="text" onChange={(e)=>{setNewtodo(e.target.value)}}/>
         <button onClick={()=>{props.dispatch({type:"ADDTODOS",payload:newtodo})}} className="btn btn-success p-2 m-2">add todo</button>
         <ul>
            {
                props.todolistReducer.todos.map((todo)=>{
                    return <li>{todo}</li>
                })
            }
         </ul>
        </div>
    )
}
export default connect(store=>store)(Todolist)