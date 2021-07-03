import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {Button, Card } from 'react-bootstrap';
import "./ProductItem.css";
import '@fortawesome/fontawesome-free/js/all.js';
// Actions
import { getCurrentProduct } from "../../../Actions/shopActions";

class ProductItem extends Component {
    render() {

        const {  name,
            price,
            images,
            stock,
            _id
        } = this.props;

        return (
            <Fragment>
                <a href='#' class='details'>
                    <Card>
                        <div className='img-box'>
                            <Card.Img variant="top" src={images[0]?.url || "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"} />
                        </div>
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text > <i className="fas fa-shopping-bag"></i>
                                {stock}
                            </Card.Text>
                            <Link to={`/product/${_id}`}>
                                <Button variant="outline-secondary">{price} грн</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </a>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ shopReducer }) => {
    const { List } = shopReducer;
    return { List }
}
const mapDispatchToProps = {
    getCurrentProduct
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);