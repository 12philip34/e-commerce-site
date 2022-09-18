import React from 'react'
import "../App.css";
import Products from './Products';

const Home = () => {
    return (
        <div className="hero">
            <div className='Home'>
                <div className="centerHome">
                    <h1>New sale listed</h1>
                    <h3>Get ready to grab!!!</h3>
                </div>
            </div>
            <Products />
        </div>
    )
}

export default Home;