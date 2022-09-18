import React from 'react'
import { useParams } from 'react-router-dom'
import "../../node_modules/font-awesome/css/font-awesome.css"
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import "../css/product.css";
import { AddCart } from '../redux/action';
import { useDispatch } from 'react-redux';


const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(AddCart(product));
    }


    useEffect(() => {

        const getProduct = async () => {

            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct()

    }, [id]);

    const Loading = () => {
        return (
            <>
                <p className="Loading">loading...</p>
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <section className="product">
                    <div className='image'>

                        <img src={product.image} alt={product.title} height="400px" width="400px"></img>
                    </div>
                    <div className='imageText'>
                        <p className='category'>
                            {product.category}
                        </p>
                        <p className='rate'>
                            {product.rating && product.rating.rate} <i className='fa fa-star'></i>
                        </p>
                        <h3 className='title'>{product.title}</h3>
                        <h5 className='price'>
                            $ {product.price}
                        </h5>

                        <h5 className='pordtDis'>PRODUCT DESCRIPTION</h5>
                        <p className='textdesp'>{product.description}</p>
                        <div class="d-grid gap-2">
                            <button class="btn fa-solid fa-cart-shopping" onClick={() => addProduct(product)}>ADD TO CART</button>
                            <NavLink to="/cart" class="btnCart" id='NavLink' type="button">View Cart</NavLink>
                        </div>
                    </div>
                </section>
            </>
        )
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    {loading ? <Loading /> : <ShowProduct />}

                </div>
            </div>
        </div>
    )
}

export default Product