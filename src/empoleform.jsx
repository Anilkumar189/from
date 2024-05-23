import { Formik ,Field, Form } from "formik";
import React from "react";
function EmployeForm(){
    return (<div>
            <h1>EmployeForm</h1>
            <Formik 
              initialValues={{
                fullname:"", 
                dob:"",
                place:""
            }}
            onSubmit={(values)=>{
                console.log(values)
            }}
            >
                 <Form>
                    <Field name="fullname" type="text"></Field>
                    <br/>
                    <Field name="dob" type="text"></Field>
                    <br/>
                    <Field name="place" type="text"></Field>
                    <br/>
                    <button>save form</button>
                 </Form>

            </Formik>
        </div>
    )
}
export default EmployeForm