import React from "react"
import { useFormik } from "formik"
import *as Yup from "yup"
function StudentFrom(){
    var StudentFrom=useFormik({
       initialValues:{
           firstname:"",
           lastname:"",
           password:"",
           age:""
       },
       validationSchema:Yup.object({
        firstname:Yup.string()
        .required("plese fille the firstname")
        .max(5,"babu chusuko"),
        password:Yup.string().matches (/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/),
        age:Yup.number().test("checkage","age is not correct",(x)=>{
            console.log("inseid custone validation",x)
            if(x>18 && x<=45){
                return true
            }
            else{
                return false
            }

        })
    
       }),
       onSubmit:(values)=>{
           console.log(values)
       }
   })
   return(
       <div>
       <form onSubmit={StudentFrom.handleSubmit}>
        <input  className={StudentFrom.touched.firstname && StudentFrom.errors.firstname && "border border-danger"}type="text" {...StudentFrom.getFieldProps("firstname")}/>
        <div>
            {StudentFrom.touched.firstname && StudentFrom.errors.firstname && <b>  *  please enter firstname</b>}
        </div>
        <br/>
        <input type="text" {...StudentFrom.getFieldProps("lastname")}/>
        <br/>
        <input type="text" {...StudentFrom.getFieldProps("age")}/>
        <br/>
        <input type="text" {...StudentFrom.getFieldProps("password")}/>
        <br/>
          <button>show Data</button>
          </form>
          {JSON.stringify(StudentFrom.errors)}
          </div>
      
       
      
   )
}
export default StudentFrom