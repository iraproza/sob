import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import "./Product.css";
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
        composition
    } = product;

    return (
        <Fragment>
            <div className='container'> 
                <div className="content">
                    <div className="product-image">   
                        <img src={images[0]?.url} alt="Omar Dsoky" />
                    </div>	
                    <div className="product-details">
                        {editing ? <label>Name: <input value={editProduct.name} onChange={(e)=> onEditProduct(e.target.value,'name')}/></label>:<h1>{name}</h1>}
                        {editing ? <label>Descriptions: <input value={editProduct.descriptions}  onChange={(e)=> onEditProduct(e.target.value,'descriptions')}/></label>:<p className="information">{descriptions}</p>}
                        {editing ? <label>How Use:<input value={editProduct.howUse}  onChange={(e)=> onEditProduct(e.target.value,'howUse')}/></label>:<p className="information">How Use: {howUse}</p>}
                        {editing ? <label>Composition:<input value={editProduct.composition}  onChange={(e)=> onEditProduct(e.target.value,'composition')}/></label>:<p className="information">Composition: {composition}</p>}
                        <div className="control">
                            <button className="btn">
                                {editing ? <label>Price: <input value={editProduct.price}  onChange={(e)=> onEditProduct(Number(e.target.value),'price')}/></label>:<span className="price">{price} грн</span>}  
                                <span className="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
                                <span className="buy">Buy Now</span>
                            </button>  
                            <button className="btn btn-danger"onClick={onDelete}> 
                                Delete 
                            </button>
                            
                            {editing ? <button className='btn btn-warning' onClick={onSave}> Save</button>:<button className="btn btn-success" onClick={onEdit}> 
                                Edit 
                            </button> }

                        </div>
                    </div>   
                
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