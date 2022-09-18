import React from 'react';
import { NavLink } from 'react-router-dom';
import "../css/success.css"

export default function Success() {
  return (
    <div className='home'>
        <div className="row">
                    <div className="col-md-6 d-flex justify-content-center">
                        <img id='successImage' src="/assets/pay.jfif" className="payment" alt='payLoad.png'></img>
                    </div>
                    <div className="col-md-5 successtext">
                        <p>Your Payment Is Successfull</p>
                        <p className='lead'>Thank you for your payment. An automated payment receipt will be sent to your email.</p>
                         <NavLink to='/Home' className="backhome" type="submit">Back to Home</NavLink>
                    </div>
                </div>
    </div>
  )
}
