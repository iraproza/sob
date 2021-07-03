import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {Button, Carousel } from 'react-bootstrap';
import "./Products.css";
import ProductItem from "./ProductItem/ProductItem";
import { getAllProducts } from "../../Services/api-service";
import { getAllProd } from "../../Actions/shopActions";


const Products = ({List,  searchList, valueSearch, getAllProd}) => {        
    
    useEffect(() => {
        getAllProducts().then(data => { 
            getAllProd(data.products);
        })
    }, [])

    const renderList = () =>{     
        if(searchList.length === 0 && valueSearch.length === 0) {
            return List.map(products => {
                return (
                    <ProductItem  key={products._id}  {...products} />
                )
            })
        } 
        else if (searchList.length > 0) {
            return searchList.map(products => {
                return (
                    <ProductItem  key={products._id}  {...products} />
                )
            })
        }
        else if(searchList.length === 0 && valueSearch.length > 0 ){
            return <h2>Products not found</h2>;
        }
    }

    return(
        <Fragment>
                <Carousel>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.squarespace-cdn.com/content/v1/5b96faeaa9e0285146f28410/1591054924640-0GZ6N5OI7QARFLX7YTB1/ke17ZwdGBToddI8pDm48kFyD7pzB8zoMIVY5aiUuFlp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0jG2lbcDYBOeMi4OFSYem8DMb5PTLoEDdB05UqhYu-xbnSznFxIRsaAU-3g5IaylIg/skincare+banner.jpg?format=2500w"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Discover the Secrets of Nature</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item><img
                    className="d-block w-100"
                    src="https://maincream.com/upload/e6c2fd0c-06195742-story-image-20290-cover-1500x900.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Essential Guide to Skincare Treatment</h3>
                    
                    </Carousel.Caption>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://bonvivant.ua/image/catalog/blog/natural-cosmetic.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Wearable Solutions</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="container">
                <div className="row products-container" id='product'>
                    {renderList()}
                </div>     
            </div>   
        </Fragment>
    )
}
    
const mapStateToProps = ({ shopReducer }) => {
    const {List, searchList, valueSearch } = shopReducer;
    return {List, searchList, valueSearch }
}
const mapDispatchToProps = {
    getAllProd
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);