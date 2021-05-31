import React, { Component, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

// Service 
import { getDeleteProduct } from "../../Services/api-service";


const SinglePage = ({ OneIdProduct, SingleProduct, onlyOneProduct, Loader }) => {

    if (SingleProduct === "") {
        return <Redirect to="/" />
    }


    const { _id, category, descriptions, name, numOfPurchase, images, numOfReviews, price, seller, stock } = SingleProduct;
    const onDelete = () => {
        getDeleteProduct(_id)
    }

    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row">

                    <div className="col-6 single_product_block">
                        <img className="" src={images[0].url} alt="" />
                    </div>
                    <div className="col-6 single_product_block">
                        <h2>{name}</h2>
                        <p><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i> {numOfReviews} Reviews</p>
                        <h3>UAH {price}</h3>
                        <p className="stock">In stock {stock} <i className="fas fa-cart-plus"></i></p>
                        <div>
                            <Link to="/" className="table">
                                <span className="fa-stack">
                                    <i className="fas fa-edit"></i>
                                </span>
                            </Link>
                            <Link to="/" onClick={onDelete} className="table danger">
                                <span className="fa-stack">
                                    <i className="fas fa-trash-alt"></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ shopReducer }) => {
    console.log("mapstatetoprops", shopReducer)
    const { SingleProduct, Loader } = shopReducer;
    return { SingleProduct, Loader }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePage);
