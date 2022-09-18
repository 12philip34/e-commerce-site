import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import "../css/products.css";
import "../App.css";


const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    console.log(filter);

    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {

            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }

            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                <p className="Loading">loading...</p>
            </>
        )
    }

    const filterProduct = (addTo) => {
        const updateList = data.filter((serve) => serve.category === addTo);
        setFilter(updateList);
    }


    const ShowProducts = () => {
        return (
            <>
                <div className="buttonsprod">
                    <button className="btn me-2 hover" onClick={() => setFilter(data)}>Shop All</button>
                    <button className="btn me-2 hover" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn me-2 hover" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn me-2 hover" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn me-2 hover" onClick={() => filterProduct("electronics")}>Electronic</button>
                </div>
                <div className="products">
                    <div className="CardProdrow">
                        {
                            filter.map((product) => {
                                return (
                                    <div className="cardCont">
                                        <div className="card h-100">
                                            <div className="card-header">
                                                <img src={product.image} className="card-img-top" alt={product.title} />
                                            </div>
                                            <div className="cardContent">
                                                <div className="card-body">
                                                    <label>
                                                        <p className="title">{product.title}</p>
                                                        <div className="other">
                                                            <span>{product.rating.rate}</span>
                                                            <span>{product.price}</span>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="card-footer">
                                                <Link to={`/products/${product.id}`} id='aLink' class="btn btn-dark">ADD ITEM</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
    return (
        <div>
            <div className="products">
                <div className="container">
                    <div className="row rowTitle">
                        <div className="col">
                            <h1 className="title">Latest StageOut</h1>
                        </div>
                    </div>
                    <div className="row productRow">
                        <div className="col">
                            {loading ? <Loading /> : <ShowProducts />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products