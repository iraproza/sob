// import { Fragment } from "react"
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// Import components 
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Products from "./Components/Products/Products";
import AboutUs from "./Components/AboutUs/AboutUs";
import Product from "./Components/Product/Product";
import AddProduct from "./Components/AddProduct/AddProduct";
import Page404 from "./Components/Page404/Page404";


//REDUX store
import store from "./store";
import { Provider } from "react-redux";


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends Component {
  render() {
    return(      
      <Provider store={store}>
        <Router>
          <Header />
            <Switch>
              <Route path="/contact" exact component={Contact} />
              <Route path="/about-us" exact component={AboutUs} />
              <Route path="/" exact component={Products} />
              <Route path="/product/:id" exact component={Product} />
              <Route path="/product-add" exact component={AddProduct} />
              <Route component={Page404} />               
            </Switch> 
          <Footer />
        </Router>
      </Provider>
    )  }}
ReactDOM.render(<App />, document.getElementById("root"));


export default App;
