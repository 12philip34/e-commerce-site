import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Empty from ".././image/empty-cart.png";
import "../css/cart.css";
import "../css/product.css";
import { AddCart } from '../redux/action';
import { DeleteCrat } from '../redux/action';
import { NavLink } from 'react-router-dom';

const Cart = () => {

    const state = useSelector((state) => state.HandleCart);
    const dispatch = useDispatch();

         const delProduct = (cartItem) =>{
             dispatch(AddCart(cartItem))
         }

        const addProduct = (cartItem) => {
            dispatch(DeleteCrat(cartItem))
         }

    const cartItems = (cartItem) => {

        return (
            <div className="px-4 my-5 bg-white rounded-3" key={cartItem.id}>
                 <div className="container py-4">
                     <div className="product">
                         <div className="image">
                             <img src={cartItem.image} alt={cartItem.title} height="60%" width="60%"/>
                         </div>
                         <div className="imageText">
                             <h6 className='title'>{cartItem.title}</h6>
                             <p className="textdesp"> 
                             {cartItem.qty} x ${cartItem.price} = ${cartItem.qty * cartItem.price}</p>
                             <div className="buttoncalc">
                             <button id='button' className="btn btn-outline-dark me-4" onClick={()=> delProduct(cartItem)}><i className="fa fa-plus"></i></button>
                             <button id='button' className="btn btn-outline-dark me-4" onClick={()=> addProduct(cartItem)}><i className="fa fa-minus"></i></button>
                             </div>
                         </div>
                     </div>
                 </div>
                 <hr />
             </div>
            
        )
    }

    const emptyCart = ()=> {
                 return(
                     <div className="px-4 my-5 bg-light rounded-3 py-5">
                         <div className="container py-4">
                             <div className="row justify-content-center">
                                <img id='emptyImage' src={Empty} alt="empty.png" />
                                 <h3 className="text-center emptyCart">Cart Empty</h3>
                             </div>
                         </div> 
                     </div>
                 )
             }
        
             const button = () =>{
                 return(
                     <div className="container">
                         <div className="row">
                             <NavLink to="/checkout" className="checkproceed">Proceed To Checkout</NavLink>
                         </div>
                     </div>
                 )
             }
        

    return (
        <div className="cart">
            <div className="container">
                <div className="row">
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
                </div>
            </div>
        </div>
    )
};

export default Cart;
