import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {Button } from 'react-bootstrap';
import "./Products.css";
import ProductItem from "./ProductItem/ProductItem";
import { getAllProducts } from "../../Services/api-service";
import { getAllProd } from "../../Actions/shopActions";


    const Products = ({List, SearchCurrentProduct, getAllProd}) => {        
        
        useEffect(() => {
            getAllProducts().then(data => { 
                getAllProd(data.products);
            })
        }, [])
        
        const item = List.map(products => {           
             return(
                <ProductItem  key={products._id}  {...products} />
            )
        })

        return(
            <Fragment>
                <div className="container">
                    <div className="row products-container">
                    <Link to={`/product-add`}>
                        <Button variant="outline-secondary">Add Product</Button>
                    </Link>
                        {item.length > 0 ? item: <h2>List is empty</h2>} 
                    </div>     
                </div>   
            </Fragment>
        )
     }
    
const mapStateToProps = ({ shopReducer }) => {
    const {List, SearchCurrentProduct} = shopReducer;
    return {List, SearchCurrentProduct}
}
const mapDispatchToProps = {
    getAllProd
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);