import React from "react"
import { useFormik } from "formik"

function StudentFrom(){
    var StudentFrom=useFormik({
       initialValues:{
           firstname:"",
           lastname:"",
           age:""
       },
       onSubmit:(values)=>{
           console.log(values)
       }
   })
   return(
       <div>
       <form onSubmit={StudentFrom.handleSubmit}>
        <input type="text" name="firstname" onChange={StudentFrom.handleChange}/>
        <br/>
        <input type="text" name="firstname" onChange={StudentFrom.handleChange}/>
        <br/>
        <input type="text" name="firstname" onChange={StudentFrom.handleChange}/>
        <br/>
          <button>show Data</button>
          </form>
          </div>
      
       
      
   )
}
export default StudentFrom