import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {Button } from 'react-bootstrap';
// import "./Products.css";
import { postProduct } from "../../Services/api-service";
import { getAllProd } from "../../Actions/shopActions";


const AddProduct = ({history}) => {  
    
    
    const [product, setProduct ] = useState({
        name: '',
        price: 0,
        descriptions: '',
        images: [],
        howUse: '',
        category: '',
        composition: '',
        stock: 0,
        salePrice: '',
        reviews: []
    })

    const onSubmit = (e) => {
        e.preventDefault();
        postProduct(product).then(
            ()=> {
                history.push('/')
            }
        )
    };

    const onChange = (value, field) => setProduct({
        ...product,
        [field]: value,
    });

    const isValid = (product.name && product.descriptions && product.category && product.price && product.howUse);

    return(
        <Fragment>     
            <div class="container">
                <div class="row">
                    <div class="col">
                        <form action="/add-product" method="post" onSubmit={onSubmit}>
                            <div class="form-group">
                                <label for="product">Name</label>
                                <input type="text" class="form-control" name="title" aria-describedby="addProduct" value={product.name} onChange={(e) => onChange(e.target.value, 'name')}/>
                            </div> 
                            <div class="form-group">
                                <label for="category">Category</label>
                                <select value={product.category} onChange={(e) => onChange(e.target.value, 'category')} defaultValue="">
                                    <option value="Make-up">Make-up</option>
                                    <option value="Hair">Hair</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="price">Price</label>
                                <input type="number" class="form-control" name="price" aria-describedby="addProduct" value={product.price} onChange={(e) => onChange(Number(e.target.value), 'price')}/>
                            </div>
                            <div class="form-group">
                                <label for="howUse">How use</label>
                                <input type="text" class="form-control" name="howUse" aria-describedby="addProduct" value={product.howUse} onChange={(e) => onChange(e.target.value, 'howUse')}/>
                            </div>
                            <div class="form-group">
                                <label for="image">Image</label>
                                <input type="text" class="form-control" name="image" aria-describedby="addProduct"/>
                            </div>
                            <div class="form-group">
                                <textarea name="description" id="" cols="30" rows="6" value={product.descriptions} onChange={(e) => onChange(e.target.value, 'descriptions')}></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary" disabled={!isValid}>Submit</button>
                        </form>
                    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);







