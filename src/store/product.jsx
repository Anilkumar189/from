import React from 'react'
import {connect} from 'react-redux'
function Product(Props){
    console.log(Props)
    return (
        <div className='border border-2 border-success m-2 p-2 '>
            <h1>Products</h1>
            <ul className='d-flex flex-wrap '>
            {
                 Props.productsReducer.products.map((p)=>{
                    return <li className='w-25  p-5 d-flex flex-column justify-content-between'>
                        <p>{p.title.slice(0,20)}</p>
                        <img src={p.image} className='w-100' alt="" />
                        <h3>{p.price}</h3>
                        <button className='btn btn-success' onClick={()=>{Props.dispatch({type:"ADDTOCART",payload:p})}}>Add to cart+</button>
                        </li>
                 })
            }
            </ul>
        </div>
    )
}
export default connect(store=>store)(Product)
    