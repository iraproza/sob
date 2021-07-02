import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import "./Product.css";
// import ProductItem from "./ProductItem/ProductItem";
import { getOneProduct, getDeleteProduct, putEditProduct } from "../../Services/api-service";
import { getCurrentProduct as getCurrentProductAction, editOneProduct } from "../../Actions/shopActions";

const Product = ({ match, product, getCurrentProduct, history, editOneProduct }) => {    
    const id = match.params.id; 

    useEffect(()=>{
        getOneProduct(id).then(
            (response) => {
                getCurrentProduct(response.product)
            }
        )
    }, [])

    const onDelete = () => {
        getDeleteProduct(id).then(
            ()=> {
                history.push('/')
            }
        )
    }

    const onEdit = () => {
        setEditing(true)
    }

    const onEditProduct = (value, field) => {
        setEditProduct({
            ...editProduct,
            [field]: value
        })
    }

    const onSave = () => {
        putEditProduct(id, editProduct).then(
            (response) => {
                editOneProduct(response.productEdit);
                setEditing(false)
            }
        )
    }

    const [editProduct, setEditProduct ] = useState({});
    const [editing, setEditing ] = useState(false);

    useEffect(()=> {
        setEditProduct(product)
    }, [product]) 

    if(!product) return null;

    const {
        name,
        price,
        descriptions,
        images,
        howUse,
        category,
        composition,
        stock,
        salePrice,
        reviews,
        createdAt,
        _id
    } = product;

    return (
        <Fragment>
            <div className="box">	
                <div className="product-details">
                    {editing ? <input value={editProduct.name} onChange={(e)=> onEditProduct(e.target.value,'name')}/>:<h1>{name}</h1>}
                    {editing ? <input value={editProduct.descriptions}  onChange={(e)=> onEditProduct(e.target.value,'descriptions')}/>:<p className="information">{descriptions}</p>}
                    
                    <div className="control">
                        <button className="btn">
                            {editing ? <input value={editProduct.price}  onChange={(e)=> onEditProduct(Number(e.target.value),'price')}/>:<span className="price">{price}</span>}  
                            <span className="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
                            <span className="buy">Buy Now</span>
                        </button>  
                        <button onClick={onDelete}> 
                            Delete 
                        </button>
                        <button onClick={onEdit}> 
                            Edit 
                        </button>  
                        <button onClick={onSave}> 
                            Save 
                        </button>

                    </div>
                </div>   
                <div className="product-image">   
                    <img src="https://sc01.alicdn.com/kf/HTB1Cic9HFXXXXbZXpXXq6xXFXXX3/200006212/HTB1Cic9HFXXXXbZXpXXq6xXFXXX3.jpg" alt="Omar Dsoky" />
                </div>
            </div>
        </Fragment>
    );   
    
}
const mapStateToProps = (state) => ({
    product: state.shopReducer.SingleProduct,
});

const mapDispatchToProps = {
    getCurrentProduct: getCurrentProductAction, 
    editOneProduct: editOneProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);