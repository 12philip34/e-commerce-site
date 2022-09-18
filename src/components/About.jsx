import React from 'react';
import "../css/about.css";
import Commerce from "../image/sales.jpg"
import Customers from "../image/elect.jpg"

const About = () => {
    return (
        <div className='about'>
            <div className="grid">
                <div className="colOne">
                    <div className="cols">
                        <h3>Commerce</h3>
                        <p>
                            Sell anywhere and get paid anytime with flexible omnichannel? tools.
                            Connect and customize all parts of your business...
                        </p>
                        <img src={Commerce} alt="Commerce.jpeg" />
                    </div>
                </div>
                <div className="colTwo">
                    <div className="cols">
                        <h3>Customers</h3>
                        <p>
                            Grow your business, integrate your data, and build lasting
                            customer relationships, all for free with La Boutique.
                        </p>
                        <img src={Customers} alt="Customers.jpeg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
