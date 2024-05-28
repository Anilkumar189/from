const initialState = {
    todos:["prabhas","kalki","saalar","darling","billa"]
}
function todolistReducer(state=initialState,action){
    // console.log("count::",state.count)
     
    
    if(action.type==="ADDTODOS"){
        return{...state,todos:[...state.todos,action.payload]}
       
    }
    return state

}
export default  todolistReducer